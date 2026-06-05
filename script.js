const phrases = [
  "Turning behaviour into decision-ready evidence.",
  "Psychology, data, and strategy under one roof.",
  "Quant research with a behavioural spine.",
  "Human messiness. Clear decisions.",
  "Signal extraction for brands, products, and policy.",
  "Somewhere between lab notes and future interfaces."
];

const glyphs = [
  "%$£!^", "0101", "ψ", "Δ", "SIGNAL", "NOISE", "p < .05", "CAT", "MODEL", "WHY?", "A/B", "DATA", "∞", "BEHAVIOUR", "██▒░"
];

const rotatingText = document.querySelector("#rotatingText");
const interference = document.querySelector("#interference");

let phraseIndex = 0;

function rotatePhrase() {
  if (!rotatingText) return;

  rotatingText.classList.add("is-changing");

  window.setTimeout(() => {
    phraseIndex = (phraseIndex + 1) % phrases.length;
    rotatingText.textContent = phrases[phraseIndex];
    rotatingText.classList.remove("is-changing");
  }, 560);
}

function createInterference() {
  if (!interference) return;

  const fragment = document.createDocumentFragment();
  const glyphCount = window.matchMedia("(max-width: 640px)").matches ? 18 : 42;

  interference.innerHTML = "";

  for (let i = 0; i < glyphCount; i += 1) {
    const span = document.createElement("span");
    span.textContent = glyphs[Math.floor(Math.random() * glyphs.length)];
    span.style.left = `${Math.random() * 100}%`;
    span.style.top = `${Math.random() * 100}%`;
    span.style.animationDelay = `${Math.random() * 4}s`;
    span.style.animationDuration = `${2 + Math.random() * 4}s`;
    fragment.appendChild(span);
  }

  interference.appendChild(fragment);
}

function scrambleMoment() {
  if (!rotatingText || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const original = rotatingText.textContent;
  const scramble = ["%", "$", "£", "!", "^", "#", "0", "1", "Δ", "ψ"];
  const length = Math.min(original.length, 28);
  let frame = 0;

  const interval = window.setInterval(() => {
    rotatingText.textContent = Array.from({ length }, () => scramble[Math.floor(Math.random() * scramble.length)]).join("");
    frame += 1;

    if (frame > 4) {
      window.clearInterval(interval);
      rotatingText.textContent = original;
    }
  }, 55);
}

createInterference();
window.setInterval(rotatePhrase, 4200);
window.setInterval(createInterference, 5200);
window.setInterval(scrambleMoment, 9300);
window.addEventListener("resize", createInterference);
