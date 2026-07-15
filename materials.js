const slidePreviewMap = {
  team: [
    { src: "slide-previews/team-03.webp", label: "זהות חברתית, שקופית 3" },
  ],
  "group-vs-team": [
    { src: "slide-previews/group-vs-team-02.webp", label: "זהות חברתית, שקופית 2" },
  ],
  synergy: [
    { src: "slide-previews/synergy-three-e-04.webp", label: "זהות חברתית, שקופית 4" },
  ],
  "three-e": [
    { src: "slide-previews/synergy-three-e-04.webp", label: "זהות חברתית, שקופית 4" },
  ],
  "team-types": [
    { src: "slide-previews/team-types-05.webp", label: "זהות חברתית, שקופית 5" },
    { src: "slide-previews/team-types-map.webp", label: "מפת סוגי צוותים" },
  ],
  "social-identity": [
    { src: "slide-previews/social-identity-01.webp", label: "זהות חברתית, שקופית 1" },
    { src: "slide-previews/exam-prep-03.webp", label: "הכנה למבחן, שקופית 3" },
  ],
  "identity-formation": [
    { src: "slide-previews/exam-prep-03.webp", label: "הכנה למבחן, שקופית 3" },
  ],
  "social-representation": [
    { src: "slide-previews/social-representation-01.webp", label: "ייצוג חברתי, שקופית 1" },
    { src: "slide-previews/exam-prep-03.webp", label: "הכנה למבחן, שקופית 3" },
    { src: "slide-previews/exam-prep-04.webp", label: "הכנה למבחן, שקופית 4" },
  ],
  norms: [
    { src: "slide-previews/exam-prep-04.webp", label: "הכנה למבחן, שקופית 4" },
  ],
  cohesion: [
    { src: "slide-previews/exam-prep-04.webp", label: "הכנה למבחן, שקופית 4" },
    { src: "slide-previews/cohesion-emotional-05.webp", label: "ייצוגים חברתיים, עמוד 5" },
  ],
  "emotional-contagion": [
    { src: "slide-previews/cohesion-emotional-05.webp", label: "ייצוגים חברתיים, עמוד 5" },
  ],
  "psychological-safety": [
    { src: "slide-previews/psychological-safety-10.webp", label: "ייצוגים חברתיים, עמוד 10" },
  ],
  tuckman: [
    { src: "slide-previews/exam-prep-05.webp", label: "הכנה למבחן, שקופית 5" },
  ],
  belbin: [
    { src: "slide-previews/belbin-05.webp", label: "תפקידים בצוות, שקופית 5" },
    { src: "slide-previews/belbin-06.webp", label: "תפקידים בצוות, שקופית 6" },
    { src: "slide-previews/belbin-07.webp", label: "תפקידים בצוות, שקופית 7" },
    { src: "slide-previews/belbin-08.webp", label: "תפקידים בצוות, שקופית 8" },
  ],
  bales: [
    { src: "slide-previews/bales-09.webp", label: "תפקידים בצוות, שקופית 9" },
    { src: "slide-previews/bales-10.webp", label: "תפקידים בצוות, שקופית 10" },
    { src: "slide-previews/bales-11.webp", label: "תפקידים בצוות, שקופית 11" },
  ],
  harrison: [
    { src: "slide-previews/harrison-12.webp", label: "תפקידים בצוות, שקופית 12" },
  ],
  "stuck-team": [
    { src: "slide-previews/stuck-team-15.webp", label: "תפקידים בצוות, שקופית 15" },
  ],
};

document.querySelectorAll(".materials .panel").forEach((panel) => {
  if (panel.id === "source-files") return;

  const sourceLabel = panel.querySelector(".eyebrow");
  const title = panel.querySelector("h2");
  if (!sourceLabel || !title) return;

  const slides = slidePreviewMap[panel.id] || [];
  const head = document.createElement("div");
  head.className = "source-heading";
  sourceLabel.before(head);

  const button = document.createElement("button");
  button.type = "button";
  button.className = "slide-toggle";
  button.textContent = slides.length ? "הצגת שקופית מקור" : "הצגת המקור";
  button.setAttribute("aria-expanded", "false");

  head.append(sourceLabel, button);

  const preview = document.createElement("article");
  preview.className = "slide-preview";
  preview.hidden = true;

  if (slides.length) {
    preview.innerHTML = `
      <div class="slide-gallery" aria-label="שקופיות מקור">
        ${slides
          .map(
            (slide) => `
              <figure class="slide-image-card">
                <figcaption>${slide.label}</figcaption>
                <img src="${slide.src}" alt="${slide.label}" loading="lazy" />
              </figure>
            `
          )
          .join("")}
      </div>
    `;
  } else {
    preview.innerHTML = `
      <div class="slide-frame">
        <div class="slide-topline">${sourceLabel.textContent}</div>
        <h3>${title.textContent}</h3>
        <p>לנושא הזה אין שקופית מצגת נפרדת בקובצי המקור, אלא מקור מסמך.</p>
      </div>
    `;
  }

  title.after(preview);

  button.addEventListener("click", () => {
    preview.hidden = !preview.hidden;
    button.textContent = preview.hidden
      ? slides.length
        ? "הצגת שקופית מקור"
        : "הצגת המקור"
      : "הסתרת המקור";
    button.setAttribute("aria-expanded", String(!preview.hidden));
  });
});
