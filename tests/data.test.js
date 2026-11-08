"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const publicDir = path.resolve(__dirname, "..", "public");

test("Verificar integridad de diccionarios de idioma (es, en, pt)", () => {
  const languages = ["es", "en", "pt"];
  const requiredKeys = ["meta", "nav", "hero", "about", "skills", "projects", "services", "contact", "support"];

  languages.forEach((lang) => {
    const filePath = path.join(publicDir, "locales", `${lang}.json`);
    assert.ok(fs.existsSync(filePath), `Archivo ${lang}.json debe existir`);

    const raw = fs.readFileSync(filePath, "utf8");
    const json = JSON.parse(raw);

    requiredKeys.forEach((key) => {
      assert.ok(json[key], `Clave '${key}' debe existir en ${lang}.json`);
    });

    assert.ok(Array.isArray(json.projects?.projects), `projects.projects debe ser un array en ${lang}.json`);
    assert.equal(json.projects.projects.length, 5, `Debe haber 5 proyectos configurados en ${lang}.json`);
  });
});

test("Verificar archivo de metadatos projects.json", () => {
  const filePath = path.join(publicDir, "data", "projects.json");
  assert.ok(fs.existsSync(filePath), "projects.json debe existir");

  const projects = JSON.parse(fs.readFileSync(filePath, "utf8"));
  assert.ok(Array.isArray(projects), "projects.json debe ser un array");
  assert.equal(projects.length, 5, "Deben existir 5 proyectos");

  projects.forEach((proj) => {
    assert.ok(proj.id, "Cada proyecto debe tener un id");
    assert.ok(proj.icon, "Cada proyecto debe tener un icon");
    assert.ok(proj.folder, "Cada proyecto debe tener un folder");
    assert.ok(proj.repo, "Cada proyecto debe tener un repo");
    assert.match(proj.repo, /^https:\/\/github\.com\/wilkin-barban\//, "El repo debe pertenecer a wilkin-barban");
    assert.ok(proj.release, "Cada proyecto debe tener un release");
    assert.match(proj.release, /^https:\/\/github\.com\/wilkin-barban\//, "El release debe pertenecer a wilkin-barban");

    const folderPath = path.join(publicDir, proj.folder);
    assert.ok(fs.existsSync(folderPath), `La carpeta de capturas public/${proj.folder} debe existir`);
  });
});

test("Verificar archivo de configuracion config.json", () => {
  const filePath = path.join(publicDir, "data", "config.json");
  assert.ok(fs.existsSync(filePath), "config.json debe existir");

  const config = JSON.parse(fs.readFileSync(filePath, "utf8"));
  assert.ok(Array.isArray(config.contactLinks), "contactLinks debe ser un array");
  assert.equal(config.contactLinks[0].href, "https://github.com/wilkin-barban/", "El enlace de GitHub debe usar la cuenta nueva");
  assert.ok(config.supportTargets?.wise, "supportTargets debe contener wise");
  assert.ok(config.supportTargets?.pix, "supportTargets debe contener pix");
  assert.equal(config.supportTargets.pix, "wilkin.barban@gmail.com");
});
