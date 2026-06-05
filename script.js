const phrases = Array.from(document.querySelectorAll(".phrase"));
let phraseIndex = 0;

function rotatePhrase() {
  if (!phrases.length) return;

  phrases[phraseIndex].classList.remove("is-visible");
  phraseIndex = (phraseIndex + 1) % phrases.length;
  phrases[phraseIndex].classList.add("is-visible");
}

setInterval(rotatePhrase, 3600);

// Tiny controlled interference on keyword text.
const glitchTexts = [
  "WHY? MODEL ψ DATA ∆ SIGNAL p < .05 // CATNOISE",
  "0101 BEHAVIOUR / MODEL / EVIDENCE / %$£! / SIGNAL LOST",
  "HUMAN INPUT → NOISY OUTPUT → MEANING",
  "PYTHON / BRAINS / BRANDS / DECISIONS / CATS"
];

const fields = Array.from(document.querySelectorAll(".glitch-field"));

setInterval(() => {
  fields.forEach((field) => {
    if (Math.random() > 0.55) {
      field.textContent = glitchTexts[Math.floor(Math.random() * glitchTexts.length)];
    }
  });
}, 1800);
