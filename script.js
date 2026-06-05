const leftZone = document.querySelector(".signal-zone-left");
const rightZone = document.querySelector(".signal-zone-right");

const signalTexts = [
  { text: "Signal extraction for brands, products, and policy.", type: "long" },
  { text: "Behavioural science for better decisions.", type: "long" },
  { text: "Quant research with a nervous system.", type: "long" },
  { text: "Evidence, strategy, and the occasional cat.", type: "long" },
  { text: "Human behaviour → decision-ready evidence.", type: "long" },
  { text: "Data, psychology, and useful noise reduction.", type: "long" },
  { text: "Models are useful. People are stranger.", type: "long" },
  { text: "From messy behaviour to clearer choices.", type: "long" },
  { text: "Behavioural science", type: "short" },
  { text: "Neuroscience", type: "short" },
  { text: "Psychology", type: "short" },
  { text: "Decision-making", type: "short" },
  { text: "Data", type: "short" },
  { text: "Python", type: "short" },
  { text: "Implicit methods", type: "short" },
  { text: "Quant research", type: "short" },
  { text: "Human behaviour", type: "short" },
  { text: "Strategy", type: "short" },
  { text: "Evidence", type: "short" },
  { text: "AI workflows", type: "short" },
  { text: "Future", type: "short" },
  { text: "Cyborg-adjacent", type: "short" },
  { text: "Cats", type: "short" }
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

function createSpark(zone, item, isGlitch = false) {
  if (!zone) return;

  const spark = document.createElement("span");

  if (isGlitch) {
    spark.className = "signal-spark is-glitch";
    spark.textContent = item;
  } else {
    spark.className = item.type === "short" ? "signal-spark is-short" : "signal-spark";
    spark.textContent = item.text;
  }

  spark.style.setProperty("--x", `${randomBetween(0, 72)}%`);
  spark.style.setProperty("--y", `${randomBetween(0, 88)}%`);
  spark.style.setProperty("--life", `${randomBetween(4400, 6200)}ms`);

  zone.appendChild(spark);

  window.setTimeout(() => {
    spark.remove();
  }, 7000);
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

/* Seed a few immediately so the hero does not look empty on load. */
spawnSignal();
setTimeout(spawnSignal, 350);
setTimeout(spawnSignal, 950);

/* Slower than the boxed-tag version; visible, but still sparse. */
setInterval(spawnSignal, 1350);
