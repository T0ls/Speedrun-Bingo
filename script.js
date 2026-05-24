const DIFFICULTIES = Object.freeze({
  1: { label: "Short", key: "easy" },
  2: { label: "Normal", key: "normal" },
  3: { label: "Long", key: "hard" }
});

const GRID_SIZE = 5;
const TOTAL_SLOTS = GRID_SIZE * GRID_SIZE;

let currentDifficulty = null;

function normalizeSeed(seedValue) {
  return String(seedValue ?? "").trim();
}

function createSeededRandom(seedValue) {
  const normalizedSeed = normalizeSeed(seedValue);

  if (normalizedSeed === "") {
    return Math.random;
  }

  let state = 2166136261;

  for (let index = 0; index < normalizedSeed.length; index += 1) {
    state ^= normalizedSeed.charCodeAt(index);
    state = Math.imul(state, 16777619);
  }

  return () => {
    state += 0x6D2B79F5;
    let value = state;

    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);

    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function pickRandom(items, random) {
  return items[Math.floor(random() * items.length)];
}

function shuffled(array, random) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function unusedGoalsFromCategory(goalsInCategory, usedGoals) {
  if (!Array.isArray(goalsInCategory)) {
    return [];
  }

  return goalsInCategory.filter((goal) => !usedGoals.has(goal));
}

function pickUniqueGoal(categories, preferredCategoryIndex, usedGoals, random) {
  const preferredCandidates = unusedGoalsFromCategory(
    categories[preferredCategoryIndex],
    usedGoals
  );

  if (preferredCandidates.length > 0) {
    return pickRandom(preferredCandidates, random);
  }

  const fallbackCategoryIndices = shuffled(
    categories
      .map((_, index) => index)
      .filter((index) => index !== preferredCategoryIndex),
    random
  );

  for (const categoryIndex of fallbackCategoryIndices) {
    const fallbackCandidates = unusedGoalsFromCategory(
      categories[categoryIndex],
      usedGoals
    );

    if (fallbackCandidates.length > 0) {
      return pickRandom(fallbackCandidates, random);
    }
  }

  return null;
}

function generateBoard(categories, seedValue) {
  if (!Array.isArray(categories) || categories.length !== TOTAL_SLOTS) {
    throw new Error("Invalid goals database: expected 25 categories per difficulty.");
  }

  const random = createSeededRandom(seedValue);
  const board = new Array(TOTAL_SLOTS);
  const usedGoals = new Set();

  for (let row = 0; row < GRID_SIZE; row += 1) {
    const rowOffsets = shuffled([0, 1, 2, 3, 4], random);

    for (let col = 0; col < GRID_SIZE; col += 1) {
      const slotIndex = row * GRID_SIZE + col;
      const categoryIndex = row * GRID_SIZE + rowOffsets[col];
      const selectedGoal = pickUniqueGoal(categories, categoryIndex, usedGoals, random);

      board[slotIndex] = selectedGoal ?? "";
      if (selectedGoal !== null) {
        usedGoals.add(selectedGoal);
      }
    }
  }

  return board;
}

function renderBoard(goals) {
  for (let slot = 1; slot <= TOTAL_SLOTS; slot += 1) {
    const cell = document.getElementById(`slot${slot}`);
    if (cell) {
      cell.textContent = goals[slot - 1] ?? "";
    }
  }
}

function getSeedInput() {
  return document.getElementById("seedInput");
}

function getSeedValue() {
  const seedInput = getSeedInput();
  const urlSeed = new URLSearchParams(window.location.search).get("seed");

  return normalizeSeed(seedInput?.value ?? urlSeed);
}

function syncSeedInput(value) {
  const seedInput = getSeedInput();

  if (seedInput) {
    seedInput.value = normalizeSeed(value);
  }
}

function setDifficulty(level) {
  const config = DIFFICULTIES[level];
  const data = window.BINGO_DATA;

  if (!config || !data) {
    return;
  }

  currentDifficulty = level;
  document.getElementById("Tdtype").textContent = config.label;

  const seed = getSeedValue();
  const goals = generateBoard(data[config.key], seed);
  renderBoard(goals);

  console.log("Difficulty:", config.label);
  console.log("Seed:", seed || "(none)");
  console.table(goals);
}

function Easy() {
  setDifficulty(1);
}

function Normal() {
  setDifficulty(2);
}

function Hard() {
  setDifficulty(3);
}

window.Easy = Easy;
window.Normal = Normal;
window.Hard = Hard;
syncSeedInput(new URLSearchParams(window.location.search).get("seed") ?? "");

window.main = () => {
  if (currentDifficulty !== null) {
    setDifficulty(currentDifficulty);
  }
};
