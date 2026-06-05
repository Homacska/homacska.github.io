const leftZone = document.querySelector(".signal-zone-left");
const rightZone = document.querySelector(".signal-zone-right");

/* Restored the earlier keyword set. No long sentence pool. */
const signalTexts = [
  "Behavioural science",
  "Neuroscience",
  "Psychology",
  "Decision-making",
  "Data",
  "Python",
  "Signal",
  "Future",
  "Cyborg-adjacent",
  "Cats",
  "Implicit methods",
  "Quant research",
  "Human behaviour",
  "Strategy",
  "Evidence",
  "AI workflows",
  "Brains",
  "Models",
  "Noise",
  "Meaning"
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

function pickSignal() {
  return signalTexts[Math.floor(Math.random() * signalTexts.length)];
}

function createSpark(zone, text, isGlitch = false) {
  if (!zone) return;

  const spark = document.createElement("span");
  spark.className = "signal-spark";

  if (isGlitch) {
    spark.classList.add("is-glitch");
  } else {
    const tone = Math.random();
    if (tone > 0.72) spark.classList.add("is-blue");
    if (tone < 0.28) spark.classList.add("is-sand");
  }

  spark.textContent = text;

  /* Keep text inside the side zones so it sits outside the brackets and does not overlap the name area. */
  spark.style.setProperty("--x", `${randomBetween(0, 18)}%`);
  spark.style.setProperty("--y", `${randomBetween(4, 84)}%`);
  spark.style.setProperty("--life", `${randomBetween(4300, 5600)}ms`);

  zone.appendChild(spark);

  window.setTimeout(() => {
    spark.remove();
  }, 6200);
}

function spawnSignal() {
  signalCount += 1;

  const useGlitch = signalCount % 4 === 0;
  const zone = nextZone === "right" ? rightZone : leftZone;

  if (useGlitch) {
    const glitch = glitchTexts[Math.floor(Math.random() * glitchTexts.length)];
    createSpark(zone, glitch, true);
  } else {
    createSpark(zone, pickSignal(), false);
  }

  nextZone = nextZone === "right" ? "left" : "right";
}

/* Seed visible text immediately. */
spawnSignal();
setTimeout(spawnSignal, 450);
setTimeout(spawnSignal, 1100);

/* Sparse, pulsing, no drifting movement. */
setInterval(spawnSignal, 1600);
