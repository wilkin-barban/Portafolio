/**
 * Módulo de Donación y Apoyo (Wise / PIX con código QR)
 */
import { createElement, writeToClipboard } from "./utils.js";

export const closeSupportDialog = () => {
  document.querySelector("[data-support-dialog]")?.remove();
  if (!document.querySelector("[data-gallery-viewer]")) {
    document.body.classList.remove("has-dialog");
  }
};

export const openSupportDialog = ({ currentLang, supportTargets, getSupportText }) => {
  closeSupportDialog();

  const isPix = currentLang === "pt";
  const config = {
    isPix,
    target: isPix ? supportTargets.pix : supportTargets.wise,
    qrValue: isPix ? supportTargets.pix : supportTargets.wise,
    copiedText: isPix ? getSupportText("support_pix_copied") : getSupportText("support_link_copied")
  };

  const dialog = createElement("div", "support-dialog");
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=320x320&margin=12&data=${encodeURIComponent(config.qrValue)}`;
  dialog.dataset.supportDialog = "";
  dialog.innerHTML = `
    <div class="support-dialog__backdrop" data-support-close></div>
    <section class="support-dialog__panel" role="dialog" aria-modal="true" aria-labelledby="support-title">
      <div class="support-dialog__hero">
        <p class="support-dialog__kicker">${getSupportText("support_title")}</p>
        <h3 id="support-title">${getSupportText("support_heading")}</h3>
        <p>${getSupportText("support_message")}</p>
        <span>${getSupportText("support_note")}</span>
      </div>
      <div class="support-dialog__qr-card">
        <div class="support-dialog__qr-frame">
          <img src="${qrUrl}" alt="${getSupportText("support_title")}" width="320" height="320" data-support-qr>
          <p class="support-dialog__qr-error" data-support-qr-error hidden>${getSupportText("support_qr_error")}</p>
        </div>
        <p class="support-dialog__hint">${getSupportText("support_scan_hint")}</p>
        <p class="support-dialog__target">${getSupportText("support_target").replace("{target}", config.target)}</p>
        <p class="support-dialog__status" data-support-status role="status" aria-live="polite"></p>
      </div>
      <div class="support-dialog__actions">
        <button class="button button--ghost" type="button" data-support-close>${getSupportText("support_close")}</button>
        ${
          config.isPix
            ? ""
            : `<button class="button button--ghost" type="button" data-support-copy>${getSupportText("support_copy")}</button>`
        }
        <button class="button button--primary" type="button" data-support-primary>${getSupportText("support_open")}</button>
      </div>
    </section>
  `;

  document.body.append(dialog);
  document.body.classList.add("has-dialog");

  const status = dialog.querySelector("[data-support-status]");
  const showCopied = async () => {
    await writeToClipboard(config.target);
    status.textContent = config.copiedText;
  };

  dialog.querySelectorAll("[data-support-close]").forEach((button) => {
    button.addEventListener("click", closeSupportDialog);
  });
  dialog.querySelector("[data-support-copy]")?.addEventListener("click", showCopied);
  dialog.querySelector("[data-support-primary]")?.addEventListener("click", async () => {
    if (config.isPix) {
      await showCopied();
      return;
    }
    window.open(config.target, "_blank", "noopener,noreferrer");
  });
  dialog.querySelector("[data-support-qr]")?.addEventListener("error", (event) => {
    event.currentTarget.hidden = true;
    dialog.querySelector("[data-support-qr-error]").hidden = false;
  });
};
