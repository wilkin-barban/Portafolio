/**
 * Módulo de Proyectos, Habilidades, Servicios y Casos de Estudio
 */
import { createElement, writeToClipboard } from "./utils.js";
import { fetchGallery, openGalleryViewer } from "./gallery.js";

const assetVersion = "20261127-1";

export const renderSkills = (locale) => {
  const skills = document.querySelector("[data-skills]");
  if (!skills || !locale.skills?.list) return;

  skills.innerHTML = "";
  locale.skills.list.forEach((skill) => {
    skills.append(createElement("span", "skill-pill", skill));
  });
};

export const renderServices = (locale) => {
  const services = document.querySelector("[data-services]");
  if (!services || !locale.services?.list) return;

  services.innerHTML = "";
  locale.services.list.forEach((service) => {
    const card = createElement("article", "service-card reveal");
    const items = service.items.map((item) => `<li>${item}</li>`).join("");
    card.innerHTML = `
      <div class="card-icon" aria-hidden="true">${service.icon}</div>
      <h3>${service.title}</h3>
      <p>${service.intro}</p>
      <ul>${items}</ul>
    `;
    services.append(card);
  });
};

export const renderContacts = ({ locale, currentLang, contactLinks, onSupportClick }) => {
  const contacts = document.querySelector("[data-contacts]");
  if (!contacts || !contactLinks) return;

  contacts.innerHTML = "";
  contactLinks.forEach((contact) => {
    if (contact.action === "support") {
      const button = createElement("button", "contact-link contact-link--support");
      button.type = "button";
      button.innerHTML = `<span class="link-icon" aria-hidden="true">${contact.icon}</span>${locale.support[contact.labelKey]}`;
      button.addEventListener("click", onSupportClick);
      contacts.append(button);
      return;
    }

    const link = createElement("a", "contact-link");
    link.href = contact.href;
    link.target = contact.href.startsWith("http") ? "_blank" : "";
    link.rel = contact.href.startsWith("http") ? "noreferrer" : "";
    link.innerHTML = `<span class="link-icon" aria-hidden="true">${contact.icon}</span>${contact.label[currentLang] || contact.label.es}`;
    contacts.append(link);
  });
};

export const renderProjectCaseStudy = (project, locale) => {
  if (!project.caseStudy) return "";

  const cards = [
    {
      title: locale.projects.does,
      text: project.does
    },
    ...project.caseStudy.sections
  ];

  const sections = cards
    .map(
      (section) => `
        <article class="project-case__card">
          <h4>${section.title}</h4>
          <p>${section.text}</p>
        </article>
      `
    )
    .join("");

  const methods = project.caseStudy.methods.map((method) => `<p>${method}</p>`).join("");
  const steps = project.caseStudy.steps.map((step) => `<li>${step}</li>`).join("");
  const commands = Array.isArray(project.caseStudy.commands)
    ? project.caseStudy.commands
    : [{ label: project.caseStudy.commandTitle, command: project.caseStudy.command }];
  const commandBlocks = commands
    .map(
      (item) => `
        <div class="project-command">
          <div class="project-command__bar">
            <span>${item.label}</span>
            <button type="button" data-copy-command data-copy-label="${project.caseStudy.commandLabel}" data-copied-label="${project.caseStudy.commandCopied}">${project.caseStudy.commandLabel}</button>
          </div>
          <pre><code>${item.command}</code></pre>
        </div>
      `
    )
    .join("");

  return `
    <div class="project-case">
      <div class="project-case__grid">${sections}</div>
      <article class="project-case__install">
        <h4>${project.caseStudy.installTitle}</h4>
        <div class="project-case__methods">${methods}</div>
        <h5>${project.caseStudy.stepsTitle}</h5>
        <ol>${steps}</ol>
      </article>
      <h4>${project.caseStudy.commandTitle}</h4>
      ${commandBlocks}
    </div>
  `;
};

export const showProject = async ({ projectId, projects, locale, shouldScroll = false }) => {
  const detail = document.querySelector("[data-project-detail]");
  if (!detail) return;

  const project = projects.find((item) => item.id === projectId) || projects[0];
  if (!project) return;

  detail.hidden = false;
  detail.classList.remove("is-ready");

  const galleryLabel = locale.projects.gallery;
  const noImages = locale.projects.noImages;
  const images = await fetchGallery(project.folder);
  const gallery = images.length
    ? images
        .map((src, index) => {
          const versionedSrc = `${src}?v=${assetVersion}`;
          const alt = `${galleryLabel} ${index + 1} - ${project.name}`;
          return `
            <a class="gallery-item" href="${versionedSrc}" data-gallery-image data-gallery-alt="${alt}" data-gallery-title="${galleryLabel}">
              <img src="${versionedSrc}" alt="${alt}" loading="lazy" decoding="async">
            </a>
          `;
        })
        .join("")
    : `<div class="gallery-empty">${noImages} <code>public/${project.folder}</code>.</div>`;

  const caseStudy = renderProjectCaseStudy(project, locale);
  const overview = project.caseStudy
    ? ""
    : `
      <div class="detail-columns">
        <div>
          <h4>${locale.projects.does}</h4>
          <p>${project.does}</p>
        </div>
      </div>
    `;

  detail.innerHTML = `
    <div class="project-detail__copy">
      <span class="project-card__number">${project.icon}</span>
      <h3>${project.name}</h3>
      <p class="project-detail__lead">${project.description}</p>
      ${overview}
      ${caseStudy}
      <div class="project-actions">
        ${[
          project.repo && { href: project.repo, label: locale.projects.repo, primary: true },
          project.live && { href: project.live, label: locale.projects.live },
          project.release && { href: project.release, label: locale.projects.release }
        ].filter(Boolean).map((action) => `<a class="button ${action.primary ? "button--primary" : "button--ghost"}" href="${action.href}" target="_blank" rel="noreferrer">${action.label}</a>`).join("")}
      </div>
    </div>
    <div class="project-gallery">
      <p class="eyebrow">${galleryLabel}</p>
      <div class="gallery-grid">${gallery}</div>
    </div>
  `;

  detail.querySelectorAll("[data-copy-command]").forEach((button) => {
    button.addEventListener("click", async () => {
      const command = button.closest(".project-command")?.querySelector("code")?.textContent.trim();
      if (!command) return;
      await writeToClipboard(command);
      button.textContent = button.dataset.copiedLabel;
      window.setTimeout(() => {
        button.textContent = button.dataset.copyLabel;
      }, 1600);
    });
  });

  detail.querySelectorAll("[data-gallery-image]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      openGalleryViewer(link.href, link.dataset.galleryAlt, link.dataset.galleryTitle);
    });
  });

  requestAnimationFrame(() => detail.classList.add("is-ready", "is-visible"));
  if (shouldScroll) detail.scrollIntoView({ behavior: "smooth", block: "start" });
};

export const renderProjects = ({ projects, locale, onSelectProject }) => {
  const container = document.querySelector("[data-projects]");
  if (!container) return;

  container.innerHTML = "";
  projects.forEach((project, index) => {
    const card = createElement("article", "project-card reveal");
    card.innerHTML = `
      <span class="project-card__number">${String(index + 1).padStart(2, "0")}</span>
      <div class="card-icon" aria-hidden="true">${project.icon}</div>
      <h3>${project.name}</h3>
      <p><strong>${project.subtitle}</strong></p>
      <p>${project.description}</p>
      <button class="text-action" type="button" data-project-id="${project.id}">${locale.projects.open}</button>
    `;
    container.append(card);
  });

  container.querySelectorAll("[data-project-id]").forEach((button) => {
    button.addEventListener("click", () => onSelectProject(button.dataset.projectId));
  });
};
