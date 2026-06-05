const leftZone = document.querySelector(".signal-zone-left");
const rightZone = document.querySelector(".signal-zone-right");

const signalTexts = [
  "Signal extraction for brands, products, and policy.",
  "Behavioural science for better decisions.",
  "Quant research with a nervous system.",
  "Evidence, strategy, and the occasional cat.",
  "Human behaviour → decision-ready evidence.",
  "Data, psychology, and useful noise reduction.",
  "Models are useful. People are stranger.",
  "From messy behaviour to clearer choices."
];

const glitchTexts = [
  "WHY? MODEL ψ DATA ∆ SIGNAL p < .05",
  "0101 BEHAVIOUR / MODEL / EVIDENCE",
  "%$£! → CLEAN SIGNAL",
  "CATNOISE // SIGNAL FOUND",
  "HUMAN INPUT → NOISY OUTPUT",
  "MODEL / BRAIN / BRAND / DECISION"
];

let signalCount = 0;
let nextZone = "right";

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createSpark(zone, text, isGlitch = false) {
  if (!zone) return;

  const spark = document.createElement("span");
  spark.className = isGlitch ? "signal-spark is-glitch" : "signal-spark";
  spark.textContent = text;

  spark.style.setProperty("--x", `${randomBetween(0, 72)}%`);
  spark.style.setProperty("--y", `${randomBetween(2, 86)}%`);
  spark.style.setProperty("--life", `${randomBetween(3900, 5400)}ms`);

  zone.appendChild(spark);

  window.setTimeout(() => {
    spark.remove();
  }, 6000);
}

function spawnSignal() {
  signalCount += 1;

  const useGlitch = signalCount % 4 === 0;
  const textPool = useGlitch ? glitchTexts : signalTexts;
  const text = textPool[Math.floor(Math.random() * textPool.length)];

  const zone = nextZone === "right" ? rightZone : leftZone;
  createSpark(zone, text, useGlitch);

  nextZone = nextZone === "right" ? "left" : "right";
}

spawnSignal();
setTimeout(spawnSignal, 1200);
setInterval(spawnSignal, 1850);
