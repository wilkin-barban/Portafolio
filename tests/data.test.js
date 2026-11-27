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
    assert.equal(json.projects.projects.length, 7, `Debe haber 7 proyectos configurados en ${lang}.json`);
  });
});

test("Verificar archivo de metadatos projects.json", () => {
  const filePath = path.join(publicDir, "data", "projects.json");
  assert.ok(fs.existsSync(filePath), "projects.json debe existir");

  const projects = JSON.parse(fs.readFileSync(filePath, "utf8"));
  assert.ok(Array.isArray(projects), "projects.json debe ser un array");
  assert.equal(projects.length, 7, "Deben existir 7 proyectos");

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
  assert.equal(config.contactLinks[1].href, "mailto:wilkin.barban@gmail.com", "El correo de contacto debe ser wilkin.barban@gmail.com");
  assert.ok(config.supportTargets?.wise, "supportTargets debe contener wise");
  assert.ok(config.supportTargets?.pix, "supportTargets debe contener pix");
  assert.equal(config.supportTargets.pix, "wilkin.barban@gmail.com");
});

test("Segmenta está alineado en metadatos y capturas", () => {
  const projects = JSON.parse(fs.readFileSync(path.join(publicDir, "data", "projects.json"), "utf8"));
  const segmenta = projects.find((project) => project.id === "segmenta");

  assert.ok(segmenta, "Segmenta debe existir en projects.json");
  assert.equal(segmenta.icon, "SG");
  assert.equal(segmenta.folder, "Segmenta");
  assert.equal(segmenta.release, "https://github.com/wilkin-barban/Segmenta/releases/latest");

  ["captura_1.png", "captura_2.png", "captura_3.png"].forEach((file) => {
    assert.ok(fs.existsSync(path.join(publicDir, "Segmenta", file)), `Debe existir public/Segmenta/${file}`);
  });
});

test("Segmenta está presente en los tres idiomas", () => {
  ["es", "en", "pt"].forEach((lang) => {
    const json = JSON.parse(fs.readFileSync(path.join(publicDir, "locales", `${lang}.json`), "utf8"));
    const segmenta = json.projects.projects.find((project) => project.name === "Segmenta");

    assert.ok(segmenta, `Segmenta debe existir en ${lang}.json`);
    assert.ok(segmenta.subtitle, `Segmenta debe tener subtítulo en ${lang}.json`);
    assert.ok(segmenta.caseStudy?.sections?.length >= 3, `Segmenta debe tener caso de estudio en ${lang}.json`);
    assert.ok(json.skills.list.includes("Rust"), `Rust debe estar en habilidades de ${lang}.json`);
  });
});

test("Cauce está alineado en metadatos y capturas", () => {
  const projects = JSON.parse(fs.readFileSync(path.join(publicDir, "data", "projects.json"), "utf8"));
  const cauce = projects.find((project) => project.id === "cauce");

  assert.ok(cauce, "Cauce debe existir en projects.json");
  assert.equal(cauce.icon, "CA");
  assert.equal(cauce.folder, "Cauce");
  assert.equal(cauce.release, "https://github.com/wilkin-barban/Cauce/releases/latest");

  ["captura_1.png", "captura_2.png", "captura_3.png"].forEach((file) => {
    assert.ok(fs.existsSync(path.join(publicDir, "Cauce", file)), `Debe existir public/Cauce/${file}`);
  });
});

test("Cauce está presente en los tres idiomas", () => {
  ["es", "en", "pt"].forEach((lang) => {
    const json = JSON.parse(fs.readFileSync(path.join(publicDir, "locales", `${lang}.json`), "utf8"));
    const cauce = json.projects.projects.find((project) => project.name === "Cauce");

    assert.ok(cauce, `Cauce debe existir en ${lang}.json`);
    assert.ok(cauce.subtitle, `Cauce debe tener subtítulo en ${lang}.json`);
    assert.ok(cauce.caseStudy?.sections?.length >= 3, `Cauce debe tener caso de estudio en ${lang}.json`);
    assert.ok(json.skills.list.includes("Rust"), `Rust debe estar en habilidades de ${lang}.json`);
  });
});

test("Trindade está alineado en metadatos, capturas y versión v0.8.12", () => {
  const projects = JSON.parse(fs.readFileSync(path.join(publicDir, "data", "projects.json"), "utf8"));
  const trindade = projects.find((project) => project.id === "trindade");

  assert.ok(trindade, "Trindade debe existir en projects.json");
  assert.equal(trindade.icon, "TR");
  assert.equal(trindade.folder, "Trindade");
  assert.equal(trindade.release, "https://github.com/wilkin-barban/Trindade/releases/latest");

  ["captura_1.png", "captura_2.png", "captura_3.png"].forEach((file) => {
    assert.ok(fs.existsSync(path.join(publicDir, "Trindade", file)), `Debe existir public/Trindade/${file}`);
  });

  ["es", "en", "pt"].forEach((lang) => {
    const json = JSON.parse(fs.readFileSync(path.join(publicDir, "locales", `${lang}.json`), "utf8"));
    const tr = json.projects.projects.find((project) => project.name === "Trindade Massas");

    assert.ok(tr, `Trindade Massas debe existir en ${lang}.json`);
    const outcome = tr.caseStudy?.sections?.find((section) => /v0\.8\.12/.test(section.text));
    assert.ok(outcome, `Trindade Massas debe referenciar v0.8.12 en ${lang}.json`);
  });
});
