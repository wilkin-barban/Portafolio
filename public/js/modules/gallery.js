/**
 * Módulo de Galería: Modal Viewer y consumo de API
 */
import { createElement } from "./utils.js";

export const closeGalleryViewer = () => {
  document.querySelector("[data-gallery-viewer]")?.remove();
  if (!document.querySelector("[data-support-dialog]")) {
    document.body.classList.remove("has-dialog");
  }
};

export const openGalleryViewer = (src, alt, title) => {
  closeGalleryViewer();

  const viewer = createElement("div", "gallery-viewer");
  viewer.dataset.galleryViewer = "";
  viewer.innerHTML = `
    <div class="gallery-viewer__backdrop" data-gallery-close></div>
    <section class="gallery-viewer__panel" role="dialog" aria-modal="true" aria-label="${alt}">
      <div class="gallery-viewer__header">
        <div>
          <p class="gallery-viewer__kicker">${title}</p>
          <h3>${alt}</h3>
        </div>
        <button type="button" aria-label="Cerrar" data-gallery-close>×</button>
      </div>
      <div class="gallery-viewer__frame">
        <img src="${src}" alt="${alt}">
      </div>
    </section>
  `;

  document.body.append(viewer);
  document.body.classList.add("has-dialog");
  viewer.querySelectorAll("[data-gallery-close]").forEach((button) => {
    button.addEventListener("click", closeGalleryViewer);
  });
};

export const fetchGallery = async (folder) => {
  try {
    const response = await fetch(`/api/gallery/${encodeURIComponent(folder)}`);
    if (!response.ok) return [];
    const data = await response.json();
    return Array.isArray(data.images) ? data.images : [];
  } catch (_error) {
    return [];
  }
};
