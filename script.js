const topCluster = document.querySelector(".signal-cluster-top");
const bottomCluster = document.querySelector(".signal-cluster-bottom");

const signalTexts = [
  "Behavioural science",
  "Neuroscience",
  "Psychology",
  "Decision-making",
  "Data",
  "Python",
  "Implicit methods",
  "Quant research",
  "Human behaviour",
  "Strategy",
  "Evidence",
  "AI workflows",
  "Models",
  "Noise → meaning",
  "Future",
  "Cyborg-adjacent",
  "Cats"
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
let nextCluster = "top";

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createSpark(cluster, text, isGlitch = false) {
  if (!cluster) return;

  const spark = document.createElement("span");
  spark.className = isGlitch ? "signal-spark is-glitch" : "signal-spark";
  spark.textContent = text;

  spark.style.setProperty("--x", `${randomBetween(4, 68)}%`);
  spark.style.setProperty("--y", `${randomBetween(8, 72)}%`);
  spark.style.setProperty("--life", `${randomBetween(4200, 5600)}ms`);

  cluster.appendChild(spark);

  window.setTimeout(() => {
    spark.remove();
  }, 6200);
}

function spawnSignal() {
  signalCount += 1;

  const useGlitch = signalCount % 4 === 0;
  const textPool = useGlitch ? glitchTexts : signalTexts;
  const text = textPool[Math.floor(Math.random() * textPool.length)];

  const cluster = nextCluster === "top" ? topCluster : bottomCluster;
  createSpark(cluster, text, useGlitch);

  nextCluster = nextCluster === "top" ? "bottom" : "top";
}

spawnSignal();
setTimeout(spawnSignal, 900);
setInterval(spawnSignal, 1450);
