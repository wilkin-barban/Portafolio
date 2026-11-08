"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const http = require("node:http");
const app = require("../src/server.js");

let server;
let baseUrl;

test.before(async () => {
  await new Promise((resolve) => {
    server = app.listen(0, () => {
      const port = server.address().port;
      baseUrl = `http://127.0.0.1:${port}`;
      resolve();
    });
  });
});

test.after(async () => {
  await new Promise((resolve) => server.close(resolve));
});

test("GET /health responde 200 y status ok", async () => {
  const res = await fetch(`${baseUrl}/health`);
  assert.equal(res.status, 200);

  const data = await res.json();
  assert.deepEqual(data, { status: "ok" });
});

test("Cabeceras de seguridad HTTP presentes", async () => {
  const res = await fetch(`${baseUrl}/health`);
  assert.equal(res.headers.get("x-content-type-options"), "nosniff");
  assert.equal(res.headers.get("x-frame-options"), "SAMEORIGIN");
  assert.equal(res.headers.get("referrer-policy"), "strict-origin-when-cross-origin");
  assert.equal(res.headers.get("x-powered-by"), null);
});

test("GET /api/gallery/:project responde 200 para proyectos autorizados", async () => {
  const res = await fetch(`${baseUrl}/api/gallery/CRM_Sofia_Manager`);
  assert.equal(res.status, 200);

  const data = await res.json();
  assert.ok(Array.isArray(data.images));
  assert.ok(data.images.length >= 1);
});

test("GET /api/gallery/:project rechaza con 404 carpetas no autorizadas", async () => {
  const res = await fetch(`${baseUrl}/api/gallery/assets`);
  assert.equal(res.status, 404);

  const data = await res.json();
  assert.ok(data.error.includes("no autorizado"));
});

test("GET /api/gallery/:project rechaza con 404 proyectos inexistentes", async () => {
  const res = await fetch(`${baseUrl}/api/gallery/proyecto_falso`);
  assert.equal(res.status, 404);
});

test("GET /api/gallery/:project bloquea intentos de Path Traversal", async () => {
  const res = await fetch(`${baseUrl}/api/gallery/..%2Fsrc`);
  assert.equal(res.status, 404);
});

test("GET * responde con index.html (SPA Fallback)", async () => {
  const res = await fetch(`${baseUrl}/cualquier-ruta-inexistente`);
  assert.equal(res.status, 200);
  assert.ok(res.headers.get("content-type")?.includes("text/html"));
});
