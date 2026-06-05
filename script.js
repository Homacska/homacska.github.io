const leftZone = document.querySelector(".signal-zone-left");
const rightZone = document.querySelector(".signal-zone-right");

/* Restored the v2 bottom-line sentences. */
const signalTexts = [
  "Signal extraction for brands, products, and policy.",
  "Behavioural science for better decisions.",
  "Quant research with a nervous system.",
  "Evidence, strategy, and the occasional cat."
];

let signalCount = 0;
let nextZone = "right";

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickSignal() {
  return signalTexts[Math.floor(Math.random() * signalTexts.length)];
}

function createSpark(zone, text) {
  if (!zone) return;

  const spark = document.createElement("span");
  spark.className = "signal-spark";
  spark.textContent = text;

  /* Keep text completely outside the bracket/name area. */
  spark.style.setProperty("--x", `${randomBetween(0, 10)}%`);
  spark.style.setProperty("--y", `${randomBetween(8, 78)}%`);
  spark.style.setProperty("--life", `${randomBetween(6800, 8200)}ms`);

  zone.appendChild(spark);

  window.setTimeout(() => {
    spark.remove();
  }, 8600);
}

function spawnSignal() {
  signalCount += 1;

  const zone = nextZone === "right" ? rightZone : leftZone;
  createSpark(zone, pickSignal());

  nextZone = nextZone === "right" ? "left" : "right";
}

/* Seed visible text immediately. */
spawnSignal();
setTimeout(spawnSignal, 1800);

/* Slower, longer sentence display. No movement. */
setInterval(spawnSignal, 3600);
