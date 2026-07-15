document.querySelectorAll(".materials .panel").forEach((panel) => {
  if (panel.id === "source-files") return;

  const sourceLabel = panel.querySelector(".eyebrow");
  const title = panel.querySelector("h2");
  if (!sourceLabel || !title) return;

  const head = document.createElement("div");
  head.className = "source-heading";
  sourceLabel.before(head);

  const button = document.createElement("button");
  button.type = "button";
  button.className = "slide-toggle";
  button.textContent = "הצגת השקופית";
  button.setAttribute("aria-expanded", "false");

  head.append(sourceLabel, button);

  const preview = document.createElement("article");
  preview.className = "slide-preview";
  preview.hidden = true;

  const bodyItems = [...panel.children].filter((child) =>
    child.matches("p:not(.eyebrow), ul")
  );

  preview.innerHTML = `
    <div class="slide-frame">
      <div class="slide-topline">${sourceLabel.textContent}</div>
      <h3>${title.textContent}</h3>
      <div class="slide-content"></div>
    </div>
  `;

  const content = preview.querySelector(".slide-content");
  bodyItems.forEach((item) => content.append(item.cloneNode(true)));
  title.after(preview);

  button.addEventListener("click", () => {
    preview.hidden = !preview.hidden;
    button.textContent = preview.hidden ? "הצגת השקופית" : "הסתרת השקופית";
    button.setAttribute("aria-expanded", String(!preview.hidden));
  });
});
