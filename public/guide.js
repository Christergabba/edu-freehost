"use strict";

// Guiden og alle lenkene virker også uten JavaScript.
document.querySelectorAll(".code-block").forEach((block, index) => {
  const code = block.querySelector("code");
  const button = document.createElement("button");
  button.type = "button";
  button.className = "copy-button";
  button.textContent = "Kopier tekst";
  button.setAttribute("aria-label", `Kopier kodeeksempel eller prompt ${index + 1}`);
  block.prepend(button);

  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(code.textContent);
      document.getElementById("copy-status").textContent = `Tekst ${index + 1} er kopiert. Du kan lime den inn nå.`;
      button.textContent = "Kopiert!";
    } catch {
      // Marker teksten slik at den også kan kopieres når utklippstavlen er sperret.
      const range = document.createRange();
      range.selectNodeContents(code);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      document.getElementById("copy-status").textContent = "Teksten er markert. Bruk Kopier i nettleseren, Ctrl+C eller ⌘C.";
      button.textContent = "Teksten er markert";
    }
  });
});
