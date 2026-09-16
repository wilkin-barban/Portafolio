"use strict";

const path = require("path");
const fs = require("fs");
const express = require("express");

const app = express();
const port = process.env.PORT || 80;
const publicDir = path.resolve(__dirname, "..", "public");

app.disable("x-powered-by");

// Cabeceras de seguridad HTTP
app.use((_req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "SAMEORIGIN");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  res.setHeader("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  next();
});

app.use(
  express.static(publicDir, {
    extensions: ["html"],
    maxAge: process.env.NODE_ENV === "production" ? "1d" : 0,
    etag: true
  })
);

const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif", ".svg"]);
const screenshotName = /^captura[_-]?(\d+)\.[^.]+$/i;

// Obtener carpetas de proyectos autorizadas (Whitelist dinámica)
const getAuthorizedFolders = () => {
  try {
    const projectsFile = path.join(publicDir, "data", "projects.json");
    if (fs.existsSync(projectsFile)) {
      const projects = JSON.parse(fs.readFileSync(projectsFile, "utf8"));
      return new Set(projects.map((p) => p.folder).filter(Boolean));
    }
  } catch (error) {
    console.error("Error al leer whitelist de proyectos:", error.message);
  }
  return new Set();
};

app.get("/api/gallery/:project", async (req, res) => {
  const project = req.params.project;
  const authorizedFolders = getAuthorizedFolders();

  // Validación contra lista blanca
  if (!authorizedFolders.has(project)) {
    res.status(404).json({ images: [], error: "Proyecto no autorizado o no encontrado" });
    return;
  }

  const galleryDir = path.resolve(publicDir, project);

  // Protección estricta contra Path Traversal
  if (!galleryDir.startsWith(publicDir + path.sep)) {
    res.status(400).json({ images: [], error: "Ruta de directorio inválida" });
    return;
  }

  const relativeDir = `/${encodeURIComponent(project)}`;

  try {
    const entries = await fs.promises.readdir(galleryDir, { withFileTypes: true });
    const images = entries
      .filter((entry) => entry.isFile())
      .map((entry) => entry.name)
      .filter((name) => imageExtensions.has(path.extname(name).toLowerCase()))
      .sort((a, b) => {
        const aShot = a.match(screenshotName);
        const bShot = b.match(screenshotName);

        if (aShot && bShot) return Number(aShot[1]) - Number(bShot[1]);
        if (aShot) return -1;
        if (bShot) return 1;

        return a.localeCompare(b, undefined, { numeric: true });
      })
      .map((name) => `${relativeDir}/${encodeURIComponent(name)}`);

    res.status(200).json({ images });
  } catch (error) {
    if (error.code === "ENOENT") {
      res.status(200).json({ images: [] });
      return;
    }

    res.status(500).json({ images: [] });
  }
});

let statsCache = null;
let statsLastFetch = 0;

app.get("/api/stats", async (_req, res) => {
  const now = Date.now();
  // Retornar de caché si tiene menos de 1 hora
  if (statsCache && now - statsLastFetch < 3600000) {
    return res.status(200).json(statsCache);
  }

  try {
    const response = await fetch("https://api.github.com/users/wilkinbarban", {
      headers: { "User-Agent": "Portfolio-App" },
      signal: AbortSignal.timeout(5000)
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const data = await response.json();
    statsCache = {
      repos: data.public_repos || 4,
      followers: data.followers || 0
    };
    statsLastFetch = now;

    res.status(200).json(statsCache);
  } catch (error) {
    if (statsCache) return res.status(200).json(statsCache);
    res.status(502).json({ error: "Failed to fetch stats from GitHub", details: error.message });
  }
});

app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

app.get("*", (_req, res) => {
  res.sendFile(path.join(publicDir, "index.html"));
});

let server = null;
if (require.main === module) {
  server = app.listen(port, () => {
    console.log(`Portfolio running at http://localhost:${port}`);
  });

  // Cierre graceful
  process.on("SIGTERM", () => {
    server.close(() => {
      console.log("Servidor Express cerrado limpiamente (SIGTERM)");
    });
  });
}

module.exports = app;
