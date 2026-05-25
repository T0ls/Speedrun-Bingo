const DIFFICULTIES = Object.freeze({
  easy: { label: "Short", key: "easy" },
  normal: { label: "Normal", key: "normal" },
  hard: { label: "Long", key: "hard" }
});

const PENALTIES = Object.freeze([
  { id: "1", name: "The thief", description: "Your rival chooses a console you can't use.", cost: 1 },
  { id: "2", name: "Sabaku", description: "You can't skip cutscenes.", cost: 1 },
  { id: "3", name: "Coffee break", description: "You must take a 5min coffee break at the end of your second goal.", cost: 1 },
  { id: "4", name: "In row", description: "You must complete the goals in the order given (up->down, left->right).", cost: 1 },
  { id: "5", name: "2D", description: "You must complete one goal in a 2D game.", cost: 1 },

  { id: "6", name: "Revolver", description: "You can't reload in games.", cost: 2 },
  { id: "7", name: "Bob the builder", description: "You can't build structures in games.", cost: 2 },
  { id: "8", name: "Hobby", description: "You choose a goal, and you must complete it twice in 2 different games.", cost: 2 },
  { id: "9", name: "Casual gamer", description: "You may only play games released after 2015.", cost: 2 },
  { id: "10", name: "Underaged", description: "You can't play PEGI 18 games.", cost: 2 },

  { id: "11", name: "The ass*ole", description: "Your rival chooses a goal for you that locks all the goals in the same row and column.", cost: 3 },
  { id: "12", name: "One's more!", description: "Your rival chooses one more goal you have to complete to get bingo.", cost: 3 },
  { id: "13", name: "I'll handle that", description: "Your rival chooses 2 bingo lines, and you have to complete 5 of those.", cost: 3 },
  { id: "14", name: "D12", description: "You roll a D12 and let him decide your bingo (1-5 row, 6-10 column, 11 TL-BR, 12 BL-TR).", cost: 3 },
  { id: "15", name: "The glitch", description: "You have to reverse your movement controls on one game.", cost: 4 }
]);

const GRID_SIZE = 5;
const TOTAL_SLOTS = GRID_SIZE * GRID_SIZE;
const activeCountdownTimeouts = [];

function scheduleCountdownStep(callback, delayMs) {
  const timeoutId = window.setTimeout(() => {
    const timeoutIndex = activeCountdownTimeouts.indexOf(timeoutId);

    if (timeoutIndex >= 0) {
      activeCountdownTimeouts.splice(timeoutIndex, 1);
    }

    callback();
  }, delayMs);

  activeCountdownTimeouts.push(timeoutId);
}

function clearPendingCountdowns() {
  activeCountdownTimeouts.forEach((timeoutId) => {
    window.clearTimeout(timeoutId);
  });

  activeCountdownTimeouts.length = 0;
}

function normalizeSeed(seedValue) {
  return String(seedValue ?? "").trim().toUpperCase();
}

function isValidSeed(seedValue) {
  return seedValue === "" || /^[LMH][A-Z0-9]{8}$/.test(seedValue);
}

function sanitizeLandingSeedInput(seedValue) {
  const uppercased = normalizeSeed(seedValue);

  if (uppercased === "") {
    return "";
  }

  const cleaned = uppercased.replace(/[^A-Z0-9]/g, "").slice(0, 9);

  if (cleaned === "") {
    return "";
  }

  const prefix = cleaned[0];

  if (prefix !== "L" && prefix !== "M" && prefix !== "H") {
    return cleaned;
  }

  return cleaned;
}

function parseSeed(seedValue, fallbackDifficulty = "normal") {
  const normalizedSeed = normalizeSeed(seedValue);

  if (normalizedSeed === "") {
    return { difficulty: fallbackDifficulty, seed: "" };
  }

  const prefix = normalizedSeed[0];

  if (prefix === "L") {
    return { difficulty: "easy", seed: normalizedSeed };
  }

  if (prefix === "H") {
    return { difficulty: "hard", seed: normalizedSeed };
  }

  if (prefix === "M") {
    return { difficulty: "normal", seed: normalizedSeed };
  }

  return { difficulty: fallbackDifficulty, seed: normalizedSeed };
}

function getDifficultyConfig(difficultyValue) {
  return DIFFICULTIES[difficultyValue] ?? DIFFICULTIES.normal;
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

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
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

function getCellStateForButton(currentState, targetState) {
  if (currentState === targetState) {
    return "normal";
  }

  return targetState;
}

function applyCellState(cell, state) {
  cell.dataset.state = state;
  cell.classList.toggle("is-completed", state === "completed");
  cell.classList.toggle("is-blocked", state === "blocked");
}

function renderBoard(goals) {
  for (let slot = 1; slot <= TOTAL_SLOTS; slot += 1) {
    const cell = document.getElementById(`slot${slot}`);

    if (cell) {
      cell.textContent = goals[slot - 1] ?? "";
      applyCellState(cell, "normal");

      if (cell.dataset.stateListener !== "true") {
        cell.addEventListener("click", () => {
          const currentState = cell.dataset.state ?? "normal";
          applyCellState(cell, getCellStateForButton(currentState, "completed"));
        });

        cell.addEventListener("contextmenu", (event) => {
          event.preventDefault();
          const currentState = cell.dataset.state ?? "normal";
          applyCellState(cell, getCellStateForButton(currentState, "blocked"));
        });

        cell.dataset.stateListener = "true";
      }
    }
  }
}

function readQueryParams() {
  return new URLSearchParams(window.location.search);
}

function buildCardUrl({ seed, difficulty, penalties }) {
  const params = new URLSearchParams();

  if (seed) {
    params.set("seed", seed);
  }

  if (difficulty && difficulty !== "normal") {
    params.set("difficulty", difficulty);
  }

  if (Array.isArray(penalties) && penalties.length > 0) {
    params.set("penalties", penalties.join(","));
  }

  const query = params.toString();
  return query ? `bingo-card.html?${query}` : "bingo-card.html";
}

function navigateTo(url) {
  window.location.href = url;
}

function setCountdownValue(value) {
  const countdownNumber = document.getElementById("countdownNumber");

  if (countdownNumber) {
    countdownNumber.textContent = value;
  }
}

function resetCountdownOverlay() {
  const overlay = document.getElementById("countdownOverlay");

  if (!overlay) {
    return;
  }

  overlay.classList.remove("is-visible");
  overlay.setAttribute("aria-hidden", "true");
  document.body.classList.remove("site-locked");
  setCountdownValue("3");
}

function resetLandingTransientState() {
  resetCountdownOverlay();
  lockLandingControls(false);
}

function resetSettingsTransientState() {
  resetCountdownOverlay();
  lockControls(
    false,
    ".difficulty-button, [data-penalty-row], #generateSeedButton, #copySeedButton, #settingsStartButton"
  );
}

function resetTransientPageState() {
  clearPendingCountdowns();

  const pageType = document.body.dataset.page;

  if (pageType === "landing") {
    resetLandingTransientState();
    return;
  }

  if (pageType === "settings") {
    resetSettingsTransientState();
  }
}

function lockLandingControls(locked) {
  const controls = document.querySelectorAll(
    "#landingSeedInput, #startSeedButton, #personalizeButton"
  );

  controls.forEach((element) => {
    element.disabled = locked;
  });
}

function showLandingError(message) {
  const errorNode = document.getElementById("landingError");

  if (errorNode) {
    errorNode.textContent = message;
  }
}

function lockControls(locked, selector) {
  const controls = document.querySelectorAll(selector);

  controls.forEach((element) => {
    element.disabled = locked;
  });
}

function randomSeedToken(length = 8) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  if (window.crypto?.getRandomValues) {
    const values = new Uint32Array(length);
    window.crypto.getRandomValues(values);

    return Array.from(values, (value) => alphabet[value % alphabet.length]).join("");
  }

  let token = "";

  for (let index = 0; index < length; index += 1) {
    token += alphabet[Math.floor(Math.random() * alphabet.length)];
  }

  return token;
}

function getDifficultyCode(difficultyValue) {
  if (difficultyValue === "easy") {
    return "L";
  }

  if (difficultyValue === "hard") {
    return "H";
  }

  return "M";
}

function formatSeed({ difficulty }) {
  return `${getDifficultyCode(difficulty)}${randomSeedToken()}`;
}

function formatRunTime(elapsedMs) {
  const totalSeconds = Math.floor(elapsedMs / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const milliseconds = Math.floor(elapsedMs % 1000);

  return `${[hours, minutes, seconds]
    .map((value) => String(value).padStart(2, "0"))
    .join(":")}<small class="card-timer__ms">.${String(milliseconds).padStart(3, "0")}</small>`;
}

function writeToClipboard(value) {
  if (navigator.clipboard?.writeText) {
    return navigator.clipboard.writeText(value);
  }

  return new Promise((resolve, reject) => {
    const helper = document.createElement("textarea");
    helper.value = value;
    helper.setAttribute("readonly", "true");
    helper.style.position = "fixed";
    helper.style.opacity = "0";
    document.body.appendChild(helper);
    helper.select();

    try {
      const copied = document.execCommand("copy");
      document.body.removeChild(helper);
      if (copied) {
        resolve();
      } else {
        reject(new Error("Copy failed"));
      }
    } catch (error) {
      document.body.removeChild(helper);
      reject(error);
    }
  });
}

function startLandingCountdown(seedValue) {
  const overlay = document.getElementById("countdownOverlay");

  clearPendingCountdowns();

  if (!overlay) {
    navigateTo(buildCardUrl({ seed: seedValue }));
    return;
  }

  document.body.classList.add("site-locked");
  lockLandingControls(true);
  showLandingError("");
  overlay.classList.add("is-visible");
  overlay.setAttribute("aria-hidden", "false");

  const steps = ["3", "2", "1", "START!"];

  steps.forEach((step, index) => {
    scheduleCountdownStep(() => {
      setCountdownValue(step);
    }, index * 700);
  });

  scheduleCountdownStep(() => {
    navigateTo(buildCardUrl({ seed: seedValue }));
  }, 2800);
}

function startSettingsCountdown(onComplete) {
  const overlay = document.getElementById("countdownOverlay");

  clearPendingCountdowns();

  if (!overlay) {
    onComplete();
    return;
  }

  document.body.classList.add("site-locked");
  overlay.classList.add("is-visible");
  overlay.setAttribute("aria-hidden", "false");

  const steps = ["3", "2", "1", "START!"];

  steps.forEach((step, index) => {
    scheduleCountdownStep(() => {
      setCountdownValue(step);
    }, index * 700);
  });

  scheduleCountdownStep(() => {
    onComplete();
  }, 2800);
}

function initLandingPage() {
  const personalizeButton = document.getElementById("personalizeButton");
  const startButton = document.getElementById("startSeedButton");
  const seedInput = document.getElementById("landingSeedInput");

  if (personalizeButton) {
    personalizeButton.addEventListener("click", () => {
      navigateTo("bingo-settings.html");
    });
  }

  if (!startButton || !seedInput) {
    return;
  }

  const isLandingSeedReady = (seedValue) => seedValue !== "" && /^[LMH][A-Z0-9]{8}$/.test(seedValue);

  const updateSeedState = () => {
    const sanitizedValue = sanitizeLandingSeedInput(seedInput.value);

    if (seedInput.value !== sanitizedValue) {
      seedInput.value = sanitizedValue;
    }

    startButton.disabled = !isLandingSeedReady(sanitizedValue);

    if (isLandingSeedReady(sanitizedValue)) {
      showLandingError("");
    }
  };

  updateSeedState();

  const handleStart = () => {
    const seedValue = normalizeSeed(seedInput.value);

    if (!isLandingSeedReady(seedValue)) {
      if (seedValue === "") {
        showLandingError("The seed cannot be empty.");
      } else {
        showLandingError("Use exactly 9 alphanumeric characters starting with L, M, or H.");
      }
      return;
    }

    if (!isValidSeed(seedValue)) {
      showLandingError("Use exactly 9 alphanumeric characters starting with L, M, or H.");
      return;
    }

    startLandingCountdown(seedValue);
  };

  startButton.addEventListener("click", handleStart);
  seedInput.addEventListener("input", updateSeedState);
  seedInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      handleStart();
    }
  });
}

function initSettingsPage() {
  const startButton = document.getElementById("settingsStartButton");
  const generateSeedButton = document.getElementById("generateSeedButton");
  const copySeedButton = document.getElementById("copySeedButton");
  const generatedSeedOutput = document.getElementById("generatedSeedOutput");
  const seedFeedback = document.getElementById("seedFeedback");
  const penaltiesCardToggle = document.getElementById("penaltiesCardToggle");
  const penaltiesPanel = document.getElementById("penaltiesPanel");
  const penaltiesTableBody = document.getElementById("penaltiesTableBody");
  const pointsSpentNode = document.getElementById("penaltyPointsSpent");
  const difficultyButtons = document.querySelectorAll(".difficulty-button");
  let selectedDifficulty = "normal";
  let currentSeed = "";
  const clearPenaltiesButton = document.getElementById("clearPenaltiesButton");

  if (penaltiesTableBody) {
    penaltiesTableBody.innerHTML = PENALTIES.map((penalty) => `
      <tr data-penalty-row="${penalty.id}" tabindex="0" role="button" aria-pressed="false">
        <td class="penalty-cell--meta">
          <div class="penalty-name">${penalty.name}</div>
          <div class="penalty-description">${penalty.description}</div>
        </td>
        <td>${penalty.cost}</td>
      </tr>
    `).join("");
  }

  difficultyButtons.forEach((button) => {
    button.addEventListener("click", () => {
      difficultyButtons.forEach((otherButton) => otherButton.classList.remove("is-active"));
      button.classList.add("is-active");
      difficultyButtons.forEach((otherButton) => {
        otherButton.setAttribute("aria-pressed", otherButton === button ? "true" : "false");
      });
      selectedDifficulty = button.dataset.difficulty ?? "normal";
      regenerateSeed();
    });
  });

  function getSelectedPenalties() {
    return PENALTIES.filter((penalty) => {
      const row = penaltiesTableBody?.querySelector(`[data-penalty-row="${penalty.id}"]`);
      return row?.classList.contains("is-selected") ?? false;
    });
  }

  function updatePenaltyRows() {
    if (!penaltiesTableBody || !pointsSpentNode) {
      return;
    }

    const selectedPenaltyIds = new Set(getSelectedPenalties().map((penalty) => penalty.id));
    let totalPoints = 0;

    PENALTIES.forEach((penalty) => {
      totalPoints += selectedPenaltyIds.has(penalty.id) ? penalty.cost : 0;
      const row = penaltiesTableBody.querySelector(`[data-penalty-row="${penalty.id}"]`);

      if (row) {
        row.classList.toggle("is-selected", selectedPenaltyIds.has(penalty.id));
        row.setAttribute("aria-pressed", selectedPenaltyIds.has(penalty.id) ? "true" : "false");
      }
    });

    pointsSpentNode.textContent = String(totalPoints);
  }

  function updateSeedOutput(seedValue, feedbackMessage = "Seed generated.") {
    currentSeed = seedValue;

    if (generatedSeedOutput) {
      generatedSeedOutput.value = seedValue;
    }

    if (copySeedButton) {
      copySeedButton.disabled = seedValue === "";
    }

    if (seedFeedback) {
      seedFeedback.textContent = feedbackMessage;
    }
  }

  function regenerateSeed() {
    const seedValue = formatSeed({ difficulty: selectedDifficulty });
    updateSeedOutput(seedValue);
  }

  if (!startButton || !generateSeedButton || !copySeedButton || !generatedSeedOutput) {
    return;
  }

  if (penaltiesCardToggle && penaltiesPanel) {
    const penaltiesCard = penaltiesCardToggle.closest("[data-penalties-card]");

    function openPenaltiesPanel() {
      penaltiesCardToggle.setAttribute("aria-expanded", "true");
      penaltiesPanel.hidden = false;
      requestAnimationFrame(() => {
        penaltiesCard?.classList.add("is-open");
        penaltiesPanel.classList.add("is-expanded");
      });
      const hint = penaltiesCardToggle.querySelector(".settings-block__hint");
      if (hint) hint.textContent = "Choose the penalties you want and watch the points spent update.";
    }

    function closePenaltiesPanel() {
      penaltiesCardToggle.setAttribute("aria-expanded", "false");
      penaltiesCard?.classList.remove("is-open");
      penaltiesPanel.classList.remove("is-expanded");
      window.setTimeout(() => {
        if (!penaltiesCardToggle.matches('[aria-expanded="true"]')) {
          penaltiesPanel.hidden = true;
        }
      }, 220);
      const hint = penaltiesCardToggle.querySelector(".settings-block__hint");
      if (hint) hint.textContent = "Click to open the list and select the penalties you want.";
    }

    penaltiesCardToggle.addEventListener("click", () => {
      const isOpen = penaltiesCardToggle.getAttribute("aria-expanded") === "true";
      if (isOpen) {
        closePenaltiesPanel();
      } else {
        openPenaltiesPanel();
      }
    });

    document.addEventListener("click", (event) => {
      if (penaltiesPanel.hidden) return;
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (penaltiesCard?.contains(target)) return;
      closePenaltiesPanel();
    });
  }

  function togglePenaltyRow(row) {
    if (!(row instanceof HTMLElement) || !row.matches("[data-penalty-row]")) {
      return;
    }

    row.classList.toggle("is-selected");
    updatePenaltyRows();
    regenerateSeed();
  }

  penaltiesTableBody?.addEventListener("click", (event) => {
    const target = event.target;

    if (!(target instanceof HTMLElement)) {
      return;
    }

    const row = target.closest("[data-penalty-row]");

    if (!row || !penaltiesTableBody.contains(row)) {
      return;
    }

    togglePenaltyRow(row);
  });

  penaltiesTableBody?.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }

    const target = event.target;

    if (!(target instanceof HTMLElement)) {
      return;
    }

    const row = target.closest("[data-penalty-row]");

    if (!row || !penaltiesTableBody.contains(row)) {
      return;
    }

    event.preventDefault();
    togglePenaltyRow(row);
  });

  if (clearPenaltiesButton) {
    clearPenaltiesButton.addEventListener("click", () => {
      if (!penaltiesTableBody) return;
      const rows = penaltiesTableBody.querySelectorAll('[data-penalty-row]');
      rows.forEach((r) => {
        r.classList.remove('is-selected');
        r.setAttribute('aria-pressed', 'false');
      });
      updatePenaltyRows();
      regenerateSeed();
    });
  }

  // Navigation to landing is handled by the back link in the markup.

  generateSeedButton.addEventListener("click", () => {
    regenerateSeed();
  });

  copySeedButton.addEventListener("click", async () => {
    const seedValue = normalizeSeed(currentSeed || generatedSeedOutput.value);

    if (!seedValue) {
      return;
    }

    try {
      await writeToClipboard(seedValue);
      if (seedFeedback) {
        seedFeedback.textContent = "Seed copied to clipboard.";
      }
    } catch {
      if (seedFeedback) {
        seedFeedback.textContent = "Clipboard copy is not available in this browser.";
      }
    }
  });

  const handleStart = () => {
    const seedValue = normalizeSeed(currentSeed || generatedSeedOutput.value || formatSeed({ difficulty: selectedDifficulty }));
    const selectedPenaltyIds = getSelectedPenalties().map((penalty) => penalty.id);

    if (!isValidSeed(seedValue)) {
      if (seedFeedback) {
        seedFeedback.textContent = "Use L, M, or H followed by letters and numbers only.";
      }
      return;
    }

    updateSeedOutput(seedValue, "Launching the run...");
    startButton.disabled = true;
    generateSeedButton.disabled = true;
    copySeedButton.disabled = true;
    lockControls(true, ".difficulty-button, [data-penalty-row], #generateSeedButton, #copySeedButton, #settingsStartButton");

    startSettingsCountdown(() => {
      navigateTo(buildCardUrl({ seed: seedValue, penalties: selectedPenaltyIds }));
    });
  };

  startButton.addEventListener("click", handleStart);
  generatedSeedOutput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      handleStart();
    }
  });

  generatedSeedOutput.addEventListener("focus", () => {
    generatedSeedOutput.select();
  });

  regenerateSeed();
  updatePenaltyRows();
}

function initCardPage() {
  const data = window.BINGO_DATA;
  const query = readQueryParams();
  const seedValue = normalizeSeed(query.get("seed"));
  const difficultyValue = query.get("difficulty") ?? "normal";
  const penaltyIds = (query.get("penalties") ?? "")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);
  const seedInfo = parseSeed(seedValue, difficultyValue);
  const difficulty = getDifficultyConfig(seedInfo.difficulty);
  const selectedPenalties = [...new Set(penaltyIds)]
    .map((penaltyId) => PENALTIES.find((penalty) => penalty.id === penaltyId))
    .filter(Boolean);
  const seedLabel = document.getElementById("cardSeedLabel");
  const difficultyLabel = document.getElementById("Tdtype");
  const timerLabel = document.getElementById("speedrunTimer");
  const endButton = document.getElementById("endSpeedrunButton");
  const pauseButton = document.getElementById("pauseSpeedrunButton");
  const selectedPenaltiesList = document.getElementById("selectedPenaltiesList");
  const selectedPenaltiesEmpty = document.getElementById("selectedPenaltiesEmpty");

  if (!data) {
    return;
  }

  if (difficultyLabel) {
    difficultyLabel.textContent = difficulty.label;
  }

  if (seedLabel) {
    seedLabel.textContent = seedInfo.seed ? `Seed: ${seedInfo.seed}` : "Seed: random";
  }

  if (selectedPenaltiesList) {
    if (selectedPenalties.length === 0) {
      selectedPenaltiesList.innerHTML = "";
      if (selectedPenaltiesEmpty) {
        selectedPenaltiesEmpty.hidden = false;
      }
    } else {
      selectedPenaltiesList.innerHTML = selectedPenalties
        .map((penalty) => `
          <li class="selected-penalty-item">
            <strong>${penalty.name}</strong>
            <p class="selected-penalty-description">${penalty.description}</p>
            <span>Cost ${penalty.cost}</span>
          </li>
        `)
        .join("");

      if (selectedPenaltiesEmpty) {
        selectedPenaltiesEmpty.hidden = true;
      }
    }
  }

  let timerStartedAt = window.performance.now();
  let timerElapsed = 0;
  let timerFrame = null;
  let timerPaused = false;

  function refreshTimerLabel() {
    if (!timerLabel) {
      return;
    }

    const elapsed = timerElapsed + (timerStartedAt === null ? 0 : window.performance.now() - timerStartedAt);

    timerLabel.innerHTML = formatRunTime(elapsed);
    window.requestAnimationFrame(refreshTimerLabel);
  }

  function startTimerFrame() {
    if (timerFrame !== null) {
      return;
    }

    timerFrame = window.requestAnimationFrame(refreshTimerLabel);
  }

  function stopTimerFrame() {
    if (timerFrame === null) {
      return;
    }

    window.clearInterval(timerFrame);
    timerFrame = null;
  }

  if (timerLabel) {
    timerLabel.innerHTML = "00:00:00<small class=\"card-timer__ms\">.000</small>";
  }

  refreshTimerLabel();
  startTimerFrame();

  if (endButton) {
    endButton.addEventListener("click", () => {
      stopTimerFrame();
      timerStartedAt = null;

      if (timerLabel) {
        timerLabel.classList.add("is-ended");
      }

      endButton.disabled = true;
      endButton.textContent = "SPEEDRUN ENDED";

      if (pauseButton) {
        pauseButton.disabled = true;
      }
    });
  }

  if (pauseButton) {
    pauseButton.addEventListener("click", () => {
      if (!timerPaused && timerStartedAt === null) {
        return;
      }

      if (timerPaused) {
        timerStartedAt = window.performance.now();
        timerPaused = false;
        pauseButton.textContent = "||";
        pauseButton.setAttribute("aria-label", "Pause speedrun");
        pauseButton.setAttribute("title", "Pause speedrun");
        startTimerFrame();
        refreshTimerLabel();
        return;
      }

      timerElapsed += window.performance.now() - timerStartedAt;
      timerStartedAt = null;
      timerPaused = true;
      stopTimerFrame();
      refreshTimerLabel();
      pauseButton.textContent = "▶";
      pauseButton.setAttribute("aria-label", "Resume speedrun");
      pauseButton.setAttribute("title", "Resume speedrun");
    });
  }

  const goals = generateBoard(data[difficulty.key], seedInfo.seed);
  renderBoard(goals);
}

function initPage() {
  resetTransientPageState();

  const pageType = document.body.dataset.page;

  if (pageType === "landing") {
    initLandingPage();
    return;
  }

  if (pageType === "settings") {
    initSettingsPage();
    return;
  }

  if (pageType === "card") {
    initCardPage();
  }
}

window.addEventListener("DOMContentLoaded", initPage);
window.addEventListener("pageshow", resetTransientPageState);
window.addEventListener("pagehide", clearPendingCountdowns);
