"use strict";

const path = require("path");
const fs = require("fs");
const express = require("express");

const app = express();
const port = process.env.PORT || 80;
const publicDir = path.join(__dirname, "..", "public");

app.disable("x-powered-by");

app.use((req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
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

app.get("/api/gallery/:project", async (req, res) => {
  const project = req.params.project;
  const galleryDir = path.join(publicDir, project);
  const relativeDir = `/${project}`;

  if (!galleryDir.startsWith(publicDir)) {
    res.status(400).json({ images: [] });
    return;
  }

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
  if (statsCache && now - statsLastFetch < 3600000) {
    return res.status(200).json(statsCache);
  }
  
  try {
    const response = await fetch("https://api.github.com/users/wilkinbarban", {
      headers: { "User-Agent": "Portfolio-App" }
    });
    
    if (!response.ok) {
      throw new Error("GitHub API failed");
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
    res.status(500).json({ error: "Failed to fetch stats" });
  }
});

app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

app.get("*", (_req, res) => {
  res.sendFile(path.join(publicDir, "index.html"));
});

app.listen(port, () => {
  console.log(`Portfolio running at http://localhost:${port}`);
});
