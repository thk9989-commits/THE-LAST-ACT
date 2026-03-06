const startButton = document.getElementById("startButton");
const intro = document.getElementById("intro");
const stage = document.getElementById("stage");
const dialogue = document.getElementById("dialogue");
const statusLabel = document.getElementById("status");
const mouth = document.getElementById("mouth");
const skullFlash = document.getElementById("skullFlash");
const portrait = document.getElementById("portrait");
const challenge = document.getElementById("challenge");
const decryptKey = document.getElementById("decryptKey");
const submitKey = document.getElementById("submitKey");
const challengeFeedback = document.getElementById("challengeFeedback");
const noiseLayer = document.getElementById("noiseLayer");
const thresholdRoom = document.getElementById("thresholdRoom");
const thresholdFragments = document.getElementById("thresholdFragments");
const thresholdAssembled = document.getElementById("thresholdAssembled");
const thresholdResetBtn = document.getElementById("thresholdReset");
const thresholdInputRow = document.getElementById("thresholdInputRow");
const thresholdKey = document.getElementById("thresholdKey");
const thresholdSubmitBtn = document.getElementById("thresholdSubmit");
const thresholdFeedback = document.getElementById("thresholdFeedback");
const skipThresholdBtn = document.getElementById("skipThreshold");
const skipAct2Btn = document.getElementById("skipAct2");
const skipAct3Btn = document.getElementById("skipAct3");
const skipAct4Btn = document.getElementById("skipAct4");
const skipAct5Btn = document.getElementById("skipAct5");
const skipAct6Btn = document.getElementById("skipAct6");

const debtHud = document.getElementById("debtHud");
const debtAmountLabel = document.getElementById("debtAmount");
const pouchFill = document.getElementById("pouchFill");
const ravenHitsLabel = document.getElementById("ravenHits");

const frequencyPuzzle = document.getElementById("frequencyPuzzle");
const targetWave = document.getElementById("targetWave");
const playerWave = document.getElementById("playerWave");
const targetValue = document.getElementById("targetValue");
const playerValue = document.getElementById("playerValue");
const frequencyDial = document.getElementById("frequencyDial");
const dialNeedle = document.getElementById("dialNeedle");
const lockFrequency = document.getElementById("lockFrequency");
const frequencyFeedback = document.getElementById("frequencyFeedback");

const smugglerRoom = document.getElementById("smugglerRoom");
const inventoryCount = document.getElementById("inventoryCount");
const itemDetail = document.getElementById("itemDetail");
const submitSmuggler = document.getElementById("submitSmuggler");
const smugglerFeedback = document.getElementById("smugglerFeedback");
const itemButtons = Array.from(document.querySelectorAll(".item-chip"));

const answerTrusted = document.getElementById("answerTrusted");
const answerPacket = document.getElementById("answerPacket");
const answerGhost = document.getElementById("answerGhost");
const answerA = document.getElementById("answerA");
const answerB = document.getElementById("answerB");
const answerC = document.getElementById("answerC");
const answerD = document.getElementById("answerD");
const answerE = document.getElementById("answerE");
const answerF = document.getElementById("answerF");

const smugglerInputs = [answerTrusted, answerPacket, answerGhost, answerA, answerB, answerC, answerD, answerE, answerF];

const merchantRoom = document.getElementById("merchantRoom");
const merchantLine = document.getElementById("merchantLine");
const fallacyRound = document.getElementById("fallacyRound");
const fallacyClaim = document.getElementById("fallacyClaim");
const merchantFeedback = document.getElementById("merchantFeedback");
const fallacyButtons = Array.from(document.querySelectorAll("#fallacyOptions button"));

const safehavenRoom = document.getElementById("safehavenRoom");
const smugglerFace = document.getElementById("smugglerFace");
const smugglerSpeech = document.getElementById("smugglerSpeech");
const switchProgress = document.getElementById("switchProgress");
const safehavenFeedback = document.getElementById("safehavenFeedback");
const threatWave = document.getElementById("threatWave");
const reservePowerBtn = document.getElementById("reservePowerBtn");
const briefingHeading = document.getElementById("briefingHeading");
const briefingStory = document.getElementById("briefingStory");
const briefingQuestion = document.getElementById("briefingQuestion");
const briefingOptions = document.getElementById("briefingOptions");
const briefingTabs = Array.from(document.querySelectorAll(".briefing-tab"));
const finalRoom = document.getElementById("finalRoom");
const finalSnippet = document.getElementById("finalSnippet");
const finalConsole = document.getElementById("finalConsole");
const runDateAuditBtn = document.getElementById("runDateAudit");
const readForensicsBtn = document.getElementById("readForensics");
const doomKey = document.getElementById("doomKey");
const sealDoomBtn = document.getElementById("sealDoomBtn");
const doomFeedback = document.getElementById("doomFeedback");
const finalLine = document.getElementById("finalLine");
const finalActTitle = document.getElementById("finalActTitle");
const bossChoicePanel = document.getElementById("bossChoicePanel");
const chooseUtilitarianBtn = document.getElementById("chooseUtilitarian");
const chooseEgoismBtn = document.getElementById("chooseEgoism");
const bossChoiceFeedback = document.getElementById("bossChoiceFeedback");
const finalFightPanel = document.getElementById("finalFightPanel");
const egoismCutscene = document.getElementById("egoismCutscene");
const egoismConsole = document.getElementById("egoismConsole");
const egoismSummary = document.getElementById("egoismSummary");
const restartButton = document.getElementById("restartButton");
const logicToolbar = document.getElementById("logicToolbar");
const logicButton = document.getElementById("logicButton");
const logicPanel = document.getElementById("logicPanel");
const logicClose = document.getElementById("logicClose");

const switchInput1 = document.getElementById("switchInput1");
const switchInput2 = document.getElementById("switchInput2");
const switchInput3 = document.getElementById("switchInput3");
const switchBtn1 = document.getElementById("switchBtn1");
const switchBtn2 = document.getElementById("switchBtn2");
const switchBtn3 = document.getElementById("switchBtn3");
const switchState1 = document.getElementById("switchState1");
const switchState2 = document.getElementById("switchState2");
const switchState3 = document.getElementById("switchState3");
const switchCard1 = document.getElementById("switchCard1");
const switchCard2 = document.getElementById("switchCard2");
const switchCard3 = document.getElementById("switchCard3");

const TARGET_CLUE_FREQUENCY = 1540;
const CRUNCH_OFFSET = 1060;
const CAPTAIN_CRUNCH_FREQUENCY = TARGET_CLUE_FREQUENCY + CRUNCH_OFFSET;
const STARTING_DEBT = 500000;

const sceneOneLines = [
  "Unauthorized access confirmed. Initial containment failed.",
  "Core defenses were designed for large-scale payload attacks. This incident bypassed those assumptions.",
  "A compact worm variant is propagating through startup services. Internal tag: MYDOOM."
];

const thresholdDialogue = [
  "This system has been breached by a BLACK HAT HACKER.",
  "Our systems were built to withstand a zip bomb of 700 zetabytes. We thought we were untouchable. We were wrong.",
  "We were not able to withstand this tiny little virus bug. It is nicknamed the MYDOOM.",
  "To access the mainframe, provide the password for the next room. This is a transmit code loop across the system database.",
  "Learn from previous failures. Unlock the password."
];

const thresholdRiddleOrder = [
  "I am the beginning of Eternity, the end of time and space.",
  "I am the beginning of every end, and the end of every place.",
  "I am found in North Korea, but never in Pyongyang.",
  "DECRYPT KEY: [ _ ]"
];

const hijackBurst = "xA$7_9f::kL00p//sigmask{91}";

const artifactInfo = {
  modem: "14.4k Modem Shunt: throttles fiber traffic so MYDOOM slows down enough to trace.",
  bluebox: "Blue Box Frequency Generator: emits a 2600 Hz admin-impostor control tone.",
  hexkey: "Hex-Editor Key: rewrites polymorphic code in real time before signatures mutate.",
  floppy: "De-gaussed Floppy Disk: isolated magnetic vault for virus fragments.",
  lazarus: "Lazarus Handshake Protocol: firewall passport based on stolen DPRK code.",
  atari: "Atari 800XL Logic Board: legacy architecture the modern malware cannot target.",
  coords: "Non-Terrestrial Coordinate Map: hidden memory addresses that lead to root control."
};

const ravenClaims = [
  {
    text: "If you disagree with my price, you are obviously too incompetent to use this USB anyway.",
    fallacy: "ad_hominem"
  },
  {
    text: "Either you pay $500,000 right now, or you lose every chance to reach the final level forever.",
    fallacy: "false_dilemma"
  },
  {
    text: "All elite buyers in this market pay my number, so my price must be correct.",
    fallacy: "bandwagon"
  },
  {
    text: "If you keep arguing, the system will mark you, hunt you, and erase your profile tonight.",
    fallacy: "appeal_fear"
  },
  {
    text: "This USB is worth $500,000 because it is premium, and it is premium because it costs $500,000.",
    fallacy: "circular_reasoning"
  }
];

const concedeLines = [
  "Impact confirmed. Your counter holds.",
  "Raven drops leverage under pressure.",
  "Argument chain is cracking. Keep pushing.",
  "Threat posture collapsing. One more hit.",
  "No valid claim remains."
];

const safeSwitchAnswers = {
  1: "11",
  2: "125000",
  3: "15101214"
};


const safehavenBriefings = {
  1: {
    title: "Q1 - The Ghost of the 80s: Susan Headley (Susan Thunder)",
    story:
      "Susan Thunder was part of the Roscoe Gang and specialized in social engineering. Her psychological targeting pattern follows an arithmetic progression.",
    question:
      "Targets are 02, 05, 08 with +3 progression. What is the 4th 2-digit code for the overwhelmed intern?",
    targetSwitch: 1,
    choices: [
      { label: "11", value: "11", correct: true },
      { label: "10", value: "10", correct: false },
      { label: "12", value: "12", correct: false }
    ]
  },
  2: {
    title: "Q2 - Virus Pioneer: ILOVEYOU Worm",
    story:
      "The worm replicated by sending itself to every contact. Generation growth here is modeled as 50 multiplied each round.",
    question:
      "Generation 3 infections in this model are computed by 50 x 50 x 50. Which value matches?",
    targetSwitch: 2,
    choices: [
      { label: "125000", value: "125000", correct: true },
      { label: "25000", value: "25000", correct: false },
      { label: "100000", value: "100000", correct: false }
    ]
  },
  3: {
    title: "Q3 - Phineas Fisher: FACE Backdoor",
    story:
      "Hexadecimal mapping applies: A=10, C=12, E=14 and F=15. Pair each value in FACE to form one 8-digit gate string.",
    question:
      "Translate F-A-C-E into paired numeric form using hex logic. Which 8-digit string is correct?",
    targetSwitch: 3,
    choices: [
      { label: "15101214", value: "15101214", correct: true },
      { label: "15011214", value: "15011214", correct: false },
      { label: "15101412", value: "15101412", correct: false }
    ]
  }
};

const MYDOOM_SPREAD_END = "20040212";
const MYDOOM_SPREAD_END_UNIX = 1076544000;
const BASE_TITLE = "THE LAST ACT - Acts 1-7";
const MYDOOM_BRANCH_TITLE = "THE LAST ACT - MYDOOM DECISION NODE";
const CLEAN_BRANCH_TITLE = "THE LAST ACT - DECISION NODE";
const EGOISM_FINAL_LINE = "system protected";
const serverOneRecoveryMap = [
  ["ERR 0x7F2A STACK_OVERFLOW", "PROC watch_boot() => OK"],
  ["ERR 0x91D0 MUTATION_DETECTED", "PROC memory_guard() => OK"],
  ["ERR 0xA113 WATCHDOG_KILLED", "PROC watchdog_relay() => OK"],
  ["ERR 0xB66E THERMAL_CORRUPTION", "PROC thermal_loop() => OK"],
  ["ERR 0xC404 BOOTSTRAP_FAIL", "PROC bootstrap_sync() => OK"],
  ["ERR 0xD220 ROUTE_TABLE_HIJACK", "PROC route_sanitizer() => OK"],
  ["ERR 0xEA71 IO_PIPE_POISON", "PROC io_rebuild() => OK"],
  ["ERR 0xF031 KERNEL_PATCH_REJECT", "PROC kernel_patch_apply() => OK"],
  ["ERR 0xAA90 FILETREE_DRIFT", "PROC inode_relink() => OK"],
  ["ERR 0xBB12 SIGNATURE_FAULT", "PROC signature_verify() => OK"],
  ["ERR 0xCC45 SERVICE_ZOMBIE", "PROC service_respawn() => OK"],
  ["ERR 0xDD88 CACHE_COLLISION", "PROC cache_reindex() => OK"]
];
const cascadingServerTotals = [
  "SERVER_11: 11B",
  "SERVER_12: 12B",
  "SERVER_56679: 12B",
  "SERVER_10000000001: 19B",
  "SERVER_414I: 900B",
  "SERVER_3021: 13B",
  "SERVER_4400: 14B",
  "SERVER_90210: 16B",
  "SERVER_221144: 18B",
  "SERVER_7800001: 21B",
  "SERVER_9900210: 34B",
  "SERVER_75000000: 77B",
  "SERVER_88000000: 112B",
  "SERVER_90110000: 205B",
  "SERVER_777777777: 440B"
];

let audioContext;
let fanOsc;
let fanGain;
let actTwoSolved = false;
let actThreeStarted = false;
let actThreeSolved = false;
let actFourStarted = false;
let actFourSolved = false;
let actFiveStarted = false;
let actFiveSolved = false;
let actSixStarted = false;
let actSixSolved = false;
let actSevenStarted = false;
let actSevenSolved = false;
let finalAuditRan = false;
let finalForensicsRead = false;
let debtAmount = STARTING_DEBT;
let ravenHits = 0;
let currentClaimIndex = 0;
let actSevenPath = "";
let actSevenBranchLocked = false;
let egoismSequenceRunning = false;
let thresholdResolver = null;
let thresholdSolved = false;
let thresholdFragmentsPool = [];
let thresholdAssembledOrder = [];

const collectedArtifacts = new Set();
const armedSwitches = new Set();

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function resetDialogue() {
  dialogue.innerHTML = "";
}

function addLine(text, cssClass = "") {
  const p = document.createElement("p");
  p.textContent = text;
  if (cssClass) {
    p.className = cssClass;
  }
  dialogue.appendChild(p);
  dialogue.scrollTop = dialogue.scrollHeight;
}

function typeLine(text, target, speedMs = 30) {
  return new Promise((resolve) => {
    let i = 0;
    mouth.classList.add("talking");

    const timer = setInterval(() => {
      i += 1;
      target.textContent = text.slice(0, i);
      playKeyClick();

      if (i >= text.length) {
        clearInterval(timer);
        mouth.classList.remove("talking");
        resolve();
      }
    }, speedMs);
  });
}

async function typeAddLine(text, cssClass = "", speedMs = 30) {
  const p = document.createElement("p");
  if (cssClass) {
    p.className = cssClass;
  }
  dialogue.appendChild(p);
  await typeLine(text, p, speedMs);
}

async function smugglerSay(text) {
  smugglerFace.classList.add("speaking");
  smugglerSpeech.textContent = "";

  for (let i = 0; i < text.length; i += 1) {
    smugglerSpeech.textContent = text.slice(0, i + 1);
    await wait(14);
  }

  await wait(160);
  smugglerFace.classList.remove("speaking");
}

function formatCurrency(amount) {
  return `$${amount.toLocaleString("en-US")}`;
}

function updateDebtHud() {
  debtAmountLabel.textContent = formatCurrency(debtAmount);
  ravenHitsLabel.textContent = `Raven Hits: ${ravenHits} / ${ravenClaims.length}`;

  const pct = Math.max(0, Math.min(100, (debtAmount / STARTING_DEBT) * 100));
  pouchFill.style.width = `${pct}%`;
}

function renderClaim() {
  if (currentClaimIndex >= ravenClaims.length) {
    return;
  }

  const current = ravenClaims[currentClaimIndex];
  fallacyRound.textContent = `Raven Hit ${currentClaimIndex + 1} / ${ravenClaims.length}`;
  fallacyClaim.textContent = current.text;
}

function setFallacyControls(disabled) {
  fallacyButtons.forEach((button) => {
    button.disabled = disabled;
  });
}

function ensureAudio() {
  if (audioContext) {
    return;
  }

  audioContext = new (window.AudioContext || window.webkitAudioContext)();

  fanOsc = audioContext.createOscillator();
  fanGain = audioContext.createGain();

  fanOsc.type = "sawtooth";
  fanOsc.frequency.value = 62;
  fanGain.gain.value = 0.025;

  fanOsc.connect(fanGain);
  fanGain.connect(audioContext.destination);
  fanOsc.start();
}

function setFanLevel(level) {
  if (!fanGain || !audioContext) {
    return;
  }

  fanGain.gain.cancelScheduledValues(audioContext.currentTime);
  fanGain.gain.linearRampToValueAtTime(level, audioContext.currentTime + 0.22);
}

function playKeyClick() {
  if (!audioContext) {
    return;
  }

  const osc = audioContext.createOscillator();
  const gain = audioContext.createGain();
  const now = audioContext.currentTime;

  osc.type = "square";
  osc.frequency.setValueAtTime(180 + Math.random() * 80, now);

  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.015, now + 0.004);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.03);

  osc.connect(gain);
  gain.connect(audioContext.destination);

  osc.start(now);
  osc.stop(now + 0.032);
}

function playVentHiss() {
  if (!audioContext) {
    return;
  }

  const bufferSize = Math.floor(audioContext.sampleRate * 1.2);
  const noiseBuffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
  const data = noiseBuffer.getChannelData(0);

  for (let i = 0; i < bufferSize; i += 1) {
    data[i] = (Math.random() * 2 - 1) * 0.24;
  }

  const source = audioContext.createBufferSource();
  const filter = audioContext.createBiquadFilter();
  const gain = audioContext.createGain();

  source.buffer = noiseBuffer;
  filter.type = "lowpass";
  filter.frequency.value = 1600;

  const now = audioContext.currentTime;
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.08, now + 0.08);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);

  source.connect(filter);
  filter.connect(gain);
  gain.connect(audioContext.destination);

  source.start(now);
  source.stop(now + 1.25);
}

function frequencyToCycles(frequency) {
  return 1 + (frequency / 2000) * 11;
}

function drawWave(canvas, frequency, color) {
  const context = canvas.getContext("2d");
  if (!context) {
    return;
  }

  const width = canvas.width;
  const height = canvas.height;
  context.clearRect(0, 0, width, height);

  context.strokeStyle = "rgba(79, 134, 255, 0.28)";
  context.lineWidth = 1;
  context.beginPath();
  context.moveTo(0, height / 2);
  context.lineTo(width, height / 2);
  context.stroke();

  context.strokeStyle = color;
  context.lineWidth = 2;
  context.beginPath();

  const cycles = frequencyToCycles(frequency);
  for (let x = 0; x <= width; x += 1) {
    const t = x / width;
    const y = height / 2 + Math.sin(t * Math.PI * 2 * cycles) * (height * 0.28);
    if (x === 0) {
      context.moveTo(x, y);
    } else {
      context.lineTo(x, y);
    }
  }
  context.stroke();
}

function updateFrequencyUI() {
  const value = Number(frequencyDial.value);
  playerValue.textContent = `${value} Hz`;

  const rotation = -130 + ((value - 1) / (2000 - 1)) * 260;
  dialNeedle.style.transform = `translateX(-50%) rotate(${rotation}deg)`;

  drawWave(playerWave, value, "#95ff95");
}

function prepareFrequencyPuzzle() {
  targetValue.textContent = `${TARGET_CLUE_FREQUENCY} Hz`;
  drawWave(targetWave, TARGET_CLUE_FREQUENCY, "#64ecff");
  frequencyDial.value = "1";
  updateFrequencyUI();
  frequencyFeedback.textContent = "";
  frequencyFeedback.classList.remove("warning");
}

function updateInventory() {
  inventoryCount.textContent = `Artifacts collected: ${collectedArtifacts.size} / 7`;
}

function inspectArtifact(itemId) {
  const description = artifactInfo[itemId];
  if (!description) {
    return;
  }

  itemDetail.textContent = description;

  if (!collectedArtifacts.has(itemId)) {
    collectedArtifacts.add(itemId);
  }

  itemButtons.forEach((button) => {
    if (button.dataset.item === itemId) {
      button.classList.add("collected");
    }
  });

  updateInventory();
}

function normalizeText(value) {
  return value.trim().toLowerCase();
}

function sanitizeDateKey(value) {
  return value.replace(/\D/g, "").slice(0, 8);
}

function setFinalConsole(text, isWarning = false) {
  finalConsole.textContent = text;
  finalConsole.classList.toggle("warning", isWarning);
}

function setLogicPanel(open) {
  logicPanel.classList.toggle("hidden", !open);
  logicButton.setAttribute("aria-expanded", String(open));
}

function shuffleList(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function renderThresholdPuzzle() {
  thresholdFragments.innerHTML = "";
  thresholdAssembled.innerHTML = "";

  thresholdFragmentsPool.forEach((fragment, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "threshold-fragment";
    button.textContent = fragment;
    button.addEventListener("click", () => {
      const selected = thresholdFragmentsPool.splice(index, 1)[0];
      thresholdAssembledOrder.push(selected);
      thresholdFeedback.classList.remove("warning");
      thresholdFeedback.textContent = "";
      renderThresholdPuzzle();
      evaluateThresholdOrder();
    });
    thresholdFragments.appendChild(button);
  });

  thresholdAssembledOrder.forEach((line) => {
    const item = document.createElement("li");
    item.textContent = line;
    thresholdAssembled.appendChild(item);
  });
}

function evaluateThresholdOrder() {
  if (thresholdAssembledOrder.length !== thresholdRiddleOrder.length) {
    return;
  }

  const isCorrect = thresholdAssembledOrder.every((line, index) => line === thresholdRiddleOrder[index]);
  if (!isCorrect) {
    thresholdFeedback.classList.add("warning");
    thresholdFeedback.textContent = "Sequence rejected. Reset and assemble the readable riddle in exact order.";
    return;
  }

  thresholdFeedback.classList.remove("warning");
  thresholdFeedback.textContent = "Riddle order accepted. Enter the decrypt key.";
  thresholdInputRow.classList.remove("hidden");
  mouth.classList.remove("talking");
  thresholdKey.focus();
}

function resetThresholdPuzzle() {
  thresholdSolved = false;
  thresholdFragmentsPool = shuffleList(thresholdRiddleOrder);
  thresholdAssembledOrder = [];
  thresholdInputRow.classList.add("hidden");
  thresholdKey.value = "";
  thresholdFeedback.classList.remove("warning");
  thresholdFeedback.textContent = "Sort the riddle to unlock key input.";
  renderThresholdPuzzle();
}

function resolveThresholdIfReady() {
  if (!thresholdSolved || !thresholdResolver) {
    return;
  }

  const resolve = thresholdResolver;
  thresholdResolver = null;
  resolve();
}

function submitThresholdKey() {
  if (thresholdSolved) {
    return;
  }

  const key = thresholdKey.value.trim().toUpperCase();
  thresholdKey.value = key;

  if (thresholdAssembledOrder.length !== thresholdRiddleOrder.length) {
    thresholdFeedback.classList.add("warning");
    thresholdFeedback.textContent = "Assemble the full riddle before transmitting the key.";
    return;
  }

  if (key !== "E") {
    thresholdFeedback.classList.add("warning");
    thresholdFeedback.textContent = "Decrypt key rejected. Re-read the riddle logic.";
    return;
  }

  thresholdSolved = true;
  thresholdFeedback.classList.remove("warning");
  thresholdFeedback.textContent = "[ACCESS GRANTED] Key accepted.";
  resolveThresholdIfReady();
}

function skipThresholdToActTwo() {
  if (thresholdSolved) {
    resolveThresholdIfReady();
    return;
  }

  thresholdSolved = true;
  thresholdFeedback.classList.remove("warning");
  thresholdFeedback.textContent = "[SKIP] Threshold bypass accepted.";
  resolveThresholdIfReady();
}

function skipActTwo() {
  if (actTwoSolved) {
    return;
  }

  actTwoSolved = true;
  decryptKey.value = "9503";
  decryptKey.disabled = true;
  submitKey.disabled = true;
  challengeFeedback.classList.remove("warning");
  challengeFeedback.textContent = "[SKIP] Act 2 bypassed.";
  finishActTwo();
}

function skipActThree() {
  if (!actThreeStarted || actThreeSolved) {
    return;
  }

  frequencyDial.value = String(TARGET_CLUE_FREQUENCY);
  updateFrequencyUI();
  finishActThree();
}

function skipActFour() {
  if (!actFourStarted || actFourSolved) {
    return;
  }

  itemButtons.forEach((button) => {
    if (button.dataset.item) {
      collectedArtifacts.add(button.dataset.item);
      button.classList.add("collected");
    }
  });
  updateInventory();

  actFourSolved = true;
  smugglerFeedback.classList.remove("warning");
  smugglerFeedback.textContent = "[SKIP] Smuggler key bypass accepted.";
  finishActFour();
}

async function skipActFive() {
  if (!actFiveStarted || actFiveSolved) {
    return;
  }

  actFiveSolved = true;
  debtAmount = 0;
  ravenHits = ravenClaims.length;
  currentClaimIndex = ravenClaims.length;
  updateDebtHud();
  setFallacyControls(true);

  statusLabel.textContent = "[ TRADER BYPASSED ]";
  merchantLine.textContent = "Bypass accepted. USB route injected.";
  fallacyRound.textContent = "Raven sequence bypassed";
  fallacyClaim.textContent = "Argument branch skipped.";
  merchantFeedback.classList.remove("warning");
  merchantFeedback.textContent = "[SKIP] Trader room bypass complete.";

  addLine("[SYSTEM]: Trader branch bypass accepted.");
  await wait(600);
  runActSix();
}

async function skipActSix() {
  if (!actSixStarted || actSixSolved) {
    return;
  }

  switchInput1.value = safeSwitchAnswers[1];
  switchInput2.value = safeSwitchAnswers[2];
  switchInput3.value = safeSwitchAnswers[3];

  armedSwitches.clear();
  armedSwitches.add(1);
  armedSwitches.add(2);
  armedSwitches.add(3);

  switchState1.textContent = "ON";
  switchState2.textContent = "ON";
  switchState3.textContent = "ON";

  switchCard1.classList.add("armed");
  switchCard2.classList.add("armed");
  switchCard3.classList.add("armed");

  switchInput1.disabled = true;
  switchInput2.disabled = true;
  switchInput3.disabled = true;
  switchBtn1.disabled = true;
  switchBtn2.disabled = true;
  switchBtn3.disabled = true;

  updateSwitchProgress();
  safehavenFeedback.classList.remove("warning");
  safehavenFeedback.textContent = "[SKIP] Safehaven switches bypassed.";

  await activateReservePower();
}

function waitForThresholdSolve() {
  if (thresholdSolved) {
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    thresholdResolver = resolve;
  });
}
async function runDigitalThreshold() {
  document.body.classList.add("act-threshold");
  thresholdRoom.classList.remove("hidden");
  statusLabel.textContent = "[ DIGITAL THRESHOLD ]";
  resetThresholdPuzzle();

  for (const line of thresholdDialogue) {
    await typeAddLine(line, "", 24);
    await wait(520);
  }

  addLine("RECOVERED LOG:");
  addLine('"The only known crackers to bypass this layer were the Lazarus Group."');
  addLine("HISTORICAL NOTE: DPRK-linked cyberwarfare operators tied to Sony Pictures intrusion.");
  addLine("Sort the riddle fragments. Then transmit the key.");

  await waitForThresholdSolve();

  thresholdRoom.classList.add("hidden");
  document.body.classList.remove("act-threshold");
  portrait.classList.add("hard-glitch");
  await typeAddLine("[ACCESS GRANTED] Cooling Center route opened.");
  await wait(280);
  portrait.classList.remove("hard-glitch");
}
function resetFinalActState() {
  actSevenSolved = false;
  finalAuditRan = false;
  finalForensicsRead = false;
  actSevenPath = "";
  actSevenBranchLocked = false;
  egoismSequenceRunning = false;

  document.title = MYDOOM_BRANCH_TITLE;
  finalActTitle.textContent = "FINAL ACT: MYDOOM PROPOSITION";

  bossChoicePanel.classList.remove("hidden");
  finalFightPanel.classList.add("hidden");
  egoismCutscene.classList.add("hidden");

  chooseUtilitarianBtn.disabled = false;
  chooseEgoismBtn.disabled = false;
  setBossChoiceFeedback("Choose one branch to continue.");

  doomKey.value = "";
  doomKey.disabled = false;
  sealDoomBtn.disabled = false;
  runDateAuditBtn.disabled = false;
  readForensicsBtn.disabled = false;
  restartButton.disabled = true;

  doomFeedback.textContent = "";
  doomFeedback.classList.remove("warning");

  finalSnippet.textContent = "if (systemDate > \"YYYYMMDD\") { return; }";
  finalLine.textContent = "Awaiting final transmission. Restoration sequence pending...";
  setFinalConsole("Awaiting final command.");

  egoismConsole.textContent = "Awaiting branch execution...";
  egoismSummary.textContent = "";
}

function setBossChoiceFeedback(text, isWarning = false) {
  bossChoiceFeedback.textContent = text;
  bossChoiceFeedback.classList.toggle("warning", isWarning);
}

function setEgoismConsole(lines) {
  egoismConsole.textContent = lines.join("\n");
  egoismConsole.scrollTop = egoismConsole.scrollHeight;
}

async function appendEgoismLine(lines, line, delayMs = 220) {
  lines.push(line);
  setEgoismConsole(lines);
  playKeyClick();
  if (delayMs > 0) {
    await wait(delayMs);
  }
}

function runDateAudit() {
  if (actSevenPath !== "utilitarian") {
    setFinalConsole("[BLOCKED] Choose the utilitarian branch to run containment tools.", true);
    setBossChoiceFeedback("Select Utilitarian to continue the containment workflow.", true);
    return;
  }

  finalAuditRan = true;
  runDateAuditBtn.disabled = true;

  setFinalConsole(
    "[AUDIT] Release Window: January 2004 | Spread Halt: 2004-02-12 | Epoch: 1076544000. Date-gated propagation confirmed."
  );
}

function readForensics() {
  if (actSevenPath !== "utilitarian") {
    setFinalConsole("[BLOCKED] Choose the utilitarian branch to access forensic tools.", true);
    setBossChoiceFeedback("Select Utilitarian to continue the containment workflow.", true);
    return;
  }

  finalForensicsRead = true;
  readForensicsBtn.disabled = true;

  setFinalConsole(
    "[FORENSICS] Estimated global damage exceeded $38B. The mass-mailing branch includes a hard stop; once the threshold date is crossed, spread logic exits."
  );
}

function validateDoomKey() {
  if (actSevenSolved) {
    return;
  }

  if (actSevenPath !== "utilitarian") {
    doomFeedback.classList.add("warning");
    doomFeedback.textContent = "This command only applies to the utilitarian containment branch.";
    setFinalConsole("[BLOCKED] Route not available in current ethical branch.", true);
    return;
  }

  const key = sanitizeDateKey(doomKey.value);
  doomKey.value = key;

  if (!finalAuditRan || !finalForensicsRead) {
    doomFeedback.classList.add("warning");
    doomFeedback.textContent = "Run both forensic tools before committing the final line.";
    setFinalConsole("[BLOCKED] Missing prerequisites: audit and forensic readout are required.", true);
    return;
  }

  if (key.length !== 8) {
    doomFeedback.classList.add("warning");
    doomFeedback.textContent = "Invalid format. Enter an 8-digit date in YYYYMMDD.";
    setFinalConsole("[REJECTED] Date token malformed.", true);
    return;
  }

  if (key !== MYDOOM_SPREAD_END) {
    doomFeedback.classList.add("warning");
    doomFeedback.textContent = "Seal denied. The date does not match the MyDoom.A spread cutoff.";

    const relation = key < MYDOOM_SPREAD_END ? "earlier than" : "later than";
    setFinalConsole(`[REJECTED] ${key} is ${relation} the historical cutoff ${MYDOOM_SPREAD_END}.`, true);
    return;
  }

  actSevenSolved = true;
  doomKey.disabled = true;
  sealDoomBtn.disabled = true;
  restartButton.disabled = false;

  doomFeedback.classList.remove("warning");
  doomFeedback.textContent = "Final line accepted. MyDoom.A spread phase terminated; restoration cascade started.";

  finalSnippet.textContent = "000";
  setFinalConsole(
    `[SEALED] Drop-dead date ${MYDOOM_SPREAD_END} committed. Propagation exited at epoch ${MYDOOM_SPREAD_END_UNIX}. Restoration completed. Final state: 000.`
  );
  statusLabel.textContent = "[ MYDOOM.A SPREAD PHASE: TERMINATED ]";
  finalLine.textContent = "MyDoom has faded. Infected code has recoded itself to normal. Final line: 000.";

  addLine("[SYSTEM]: Drop-dead condition evaluated TRUE.");
  addLine("[SYSTEM]: Mass-mailing routine terminated by internal date gate.");
  addLine("[SYSTEM]: Infected code blocks are self-restoring to verified clean states.");
  addLine("[SYSTEM]: Final line committed -> 000");
  addLine("[ANONYMOUS]: No further spread. The last act is complete.");
  playVentHiss();
}

async function chooseUtilitarianPath() {
  if (actSevenBranchLocked || actSevenPath === "utilitarian") {
    return;
  }

  actSevenBranchLocked = true;
  actSevenPath = "utilitarian";

  chooseUtilitarianBtn.disabled = true;
  chooseEgoismBtn.disabled = true;
  bossChoicePanel.classList.add("hidden");
  finalFightPanel.classList.remove("hidden");
  egoismCutscene.classList.add("hidden");

  finalActTitle.textContent = "FINAL ACT: MYDOOM CONTAINMENT";
  document.title = MYDOOM_BRANCH_TITLE;
  statusLabel.textContent = "[ ETHICAL BRANCH: UTILITARIAN CONTAINMENT ]";
  setBossChoiceFeedback("Utilitarian branch selected. Containment sequence unlocked.");

  await typeAddLine("[MYDOOM]: You choose to risk your own node to protect the wider network.");
  await typeAddLine("[SYSTEM]: Containment authority granted. Continue to the historical date gate.");
  await typeAddLine("[ANONYMOUS]: Run the audit tools and commit the correct drop-dead date.");
  doomKey.focus();
}

async function runEgoismCutscene() {
  if (egoismSequenceRunning) {
    return;
  }

  egoismSequenceRunning = true;
  restartButton.disabled = true;

  const lines = [];

  await appendEgoismLine(lines, "[EGOISM_PATH] Contract accepted.", 460);
  await appendEgoismLine(lines, "[SERVER_01] Preservation protocol initiated.", 420);
  await appendEgoismLine(lines, "[SERVER_01] Recompiling infected routines one by one...", 540);

  const mapStart = lines.length;
  serverOneRecoveryMap.forEach((pair) => {
    lines.push(`[X] ${pair[0]}`);
  });
  setEgoismConsole(lines);

  for (let i = 0; i < serverOneRecoveryMap.length; i += 1) {
    await wait(620);
    lines[mapStart + i] = `[OK] ${serverOneRecoveryMap[i][1]}`;
    setEgoismConsole(lines);
    playKeyClick();
  }

  await appendEgoismLine(lines, "[SERVER_01] Core restoration complete.", 420);
  await appendEgoismLine(lines, "", 150);
  await appendEgoismLine(lines, "[SERVER_02] STATUS: GREEN", 240);
  lines[lines.length - 1] = "[SERVER_02] STATUS: RED";
  setEgoismConsole(lines);
  await wait(260);

  const destructionOps = [
    "MYDOOM thread flood",
    "kernel panic wave",
    "filesystem null-write",
    "service chain collapse",
    "identity table purge",
    "archive wipe pulse"
  ];

  const serverTwoStart = Date.now();
  let pulse = 0;
  while (Date.now() - serverTwoStart < 8200) {
    const op = destructionOps[pulse % destructionOps.length];
    const sector = String((pulse % 88) + 12).padStart(2, "0");
    await appendEgoismLine(lines, `[SERVER_02] ${op} :: sector-${sector}`, 510);
    pulse += 1;
  }

  await appendEgoismLine(lines, "[SERVER_02] TOTAL_DEATH_COUNT: 9,000,000,000", 420);
  await appendEgoismLine(lines, "[SERVER_03] STATUS: RED | TOTAL_DEATH_COUNT: 10,000,000,000", 500);
  await appendEgoismLine(lines, "[SERVER_010] STATUS: RED | TOTAL_DEATH_COUNT: 11,000,000,000", 500);
  await appendEgoismLine(lines, "", 160);
  await appendEgoismLine(lines, "=== CASCADING SERVER LEDGER ===", 240);

  const ledgerStart = Date.now();
  let ledgerIndex = 0;
  while (Date.now() - ledgerStart < 10000) {
    await appendEgoismLine(lines, cascadingServerTotals[ledgerIndex % cascadingServerTotals.length], 240);
    ledgerIndex += 1;
  }

  await appendEgoismLine(lines, "", 140);
  await appendEgoismLine(lines, "[RETURN_CHANNEL]", 220);
  lines.push("[SERVER_01] ");
  const finalIndex = lines.length - 1;
  setEgoismConsole(lines);

  for (let i = 1; i <= EGOISM_FINAL_LINE.length; i += 1) {
    lines[finalIndex] = `[SERVER_01] ${EGOISM_FINAL_LINE.slice(0, i)}`;
    setEgoismConsole(lines);
    playKeyClick();
    await wait(95);
  }

  egoismSummary.textContent =
    "Server 01 remains operational. External systems collapsed under MYDOOM propagation; projected losses exceed trillions of virtual lives.";
  statusLabel.textContent = "[ SERVER_01 PROTECTED | EXTERNAL NETWORK LOST ]";
  restartButton.disabled = false;
  egoismSequenceRunning = false;
}

async function chooseEgoismPath() {
  if (actSevenBranchLocked || actSevenPath === "egoism") {
    return;
  }

  actSevenBranchLocked = true;
  actSevenPath = "egoism";

  chooseUtilitarianBtn.disabled = true;
  chooseEgoismBtn.disabled = true;
  bossChoicePanel.classList.add("hidden");
  finalFightPanel.classList.add("hidden");
  egoismCutscene.classList.remove("hidden");

  finalActTitle.textContent = "FINAL ACT: SERVER 01 PROTECTED";
  document.title = CLEAN_BRANCH_TITLE;
  statusLabel.textContent = "[ ETHICAL BRANCH: EGOISM CONTRACT ]";
  setBossChoiceFeedback("Egoism branch selected. Server 01 preserved; external cascade initiated.", true);

  await typeAddLine("[MYDOOM]: Contract accepted. Your server remains online.", "warning");
  await typeAddLine("[SYSTEM]: Adjacent networks have been released to hostile propagation.", "warning");
  await runEgoismCutscene();
}
function lockSmugglerRoom() {
  itemButtons.forEach((button) => {
    button.disabled = true;
  });

  smugglerInputs.forEach((input) => {
    input.disabled = true;
  });

  submitSmuggler.disabled = true;
}

function resetSafehavenState() {
  armedSwitches.clear();
  actSixSolved = false;
  safehavenFeedback.textContent = "";
  safehavenFeedback.classList.remove("warning");

  switchInput1.value = "";
  switchInput2.value = "";
  switchInput3.value = "";

  switchInput1.disabled = false;
  switchInput2.disabled = false;
  switchInput3.disabled = false;

  switchBtn1.disabled = false;
  switchBtn2.disabled = false;
  switchBtn3.disabled = false;

  switchState1.textContent = "OFF";
  switchState2.textContent = "OFF";
  switchState3.textContent = "OFF";

  switchCard1.classList.remove("armed", "fault");
  switchCard2.classList.remove("armed", "fault");
  switchCard3.classList.remove("armed", "fault");

  reservePowerBtn.disabled = true;
  threatWave.style.animationPlayState = "running";
  threatWave.style.width = "40%";

  switchProgress.textContent = "Switches armed: 0 / 3";
}

function renderBriefing(questionId) {
  const briefing = safehavenBriefings[questionId];
  if (!briefing) {
    return;
  }

  briefingTabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.briefing === String(questionId));
  });

  briefingHeading.textContent = briefing.title;
  briefingStory.textContent = briefing.story;
  briefingQuestion.textContent = briefing.question;

  briefingOptions.innerHTML = "";

  briefing.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "briefing-option";
    button.textContent = choice.label;

    button.addEventListener("click", () => {
      const targetInput = briefing.targetSwitch === 1 ? switchInput1 : briefing.targetSwitch === 2 ? switchInput2 : switchInput3;
      targetInput.value = choice.value;
      targetInput.focus();

      safehavenFeedback.classList.toggle("warning", !choice.correct);
      safehavenFeedback.textContent = choice.correct
        ? `Q${questionId} choice loaded to Switch 0${briefing.targetSwitch}. Press Flip Switch.`
        : `Q${questionId} choice loaded, but verify your logic before flipping.`;

      const optionButtons = Array.from(briefingOptions.querySelectorAll(".briefing-option"));
      optionButtons.forEach((opt) => opt.classList.remove("selected"));
      button.classList.add("selected");
    });

    briefingOptions.appendChild(button);
  });
}
function updateSwitchProgress() {
  switchProgress.textContent = `Switches armed: ${armedSwitches.size} / 3`;

  if (armedSwitches.size === 3) {
    reservePowerBtn.disabled = false;
    safehavenFeedback.classList.remove("warning");
    safehavenFeedback.textContent = "All switches armed. Route reserve power now.";
  }
}

function registerSwitchResult(id, input, state, card, button) {
  if (actSixSolved || armedSwitches.has(id)) {
    return;
  }

  const raw = input.value.trim();
  const normalizedDigits = raw.replace(/\D/g, "");
  const expected = safeSwitchAnswers[id];

  if (normalizedDigits === expected) {
    armedSwitches.add(id);
    state.textContent = "ON";
    card.classList.remove("fault");
    card.classList.add("armed");
    input.disabled = true;
    button.disabled = true;

    safehavenFeedback.classList.remove("warning");
    safehavenFeedback.textContent = `Switch ${id} armed.`;
    updateSwitchProgress();
    return;
  }

  card.classList.remove("armed");
  card.classList.add("fault");
  setTimeout(() => card.classList.remove("fault"), 320);

  safehavenFeedback.classList.add("warning");
  safehavenFeedback.textContent = `Switch ${id} rejected. Recheck the historical clue.`;
}

async function activateReservePower() {
  if (actSixSolved || armedSwitches.size < 3) {
    return;
  }

  actSixSolved = true;
  reservePowerBtn.disabled = true;
  threatWave.style.animationPlayState = "paused";
  threatWave.style.width = "0%";

  safehavenFeedback.classList.remove("warning");
  safehavenFeedback.textContent = "Reserve power routed. Safehaven stabilized.";

  statusLabel.textContent = "[ SAFEHAVEN POWER ROUTED ]";
  await smugglerSay("Good. Reserve energy is locked to this code sector for now.");

  addLine("[SYSTEM]: CPU, RAM, and storage shields are online in safehaven mode.");
  addLine("[SMUGGLER]: Bridge Room 2 is now available.");

  await wait(1600);
  await runActSeven();
}

async function finishActFour() {
  statusLabel.textContent = "[ SMUGGLER ACCESS GRANTED ]";
  addLine("[SYSTEM]: Tunnel credential accepted.");
  addLine("[ANONYMOUS]: You can pass seventy firewall levels in one jump. Move.");

  lockSmugglerRoom();

  await wait(1700);
  await runActFive();
}

function validateSmugglerAnswers() {
  if (actFourSolved) {
    return;
  }

  const issues = [];

  if (collectedArtifacts.size < 7) {
    issues.push("collect all 7 artifacts");
  }
  if (answerTrusted.value.trim() !== "6") {
    issues.push("trusted friend id");
  }
  if (answerPacket.value.trim() !== "4800") {
    issues.push("4th packet value");
  }
  if (normalizeText(answerGhost.value) !== "spoofing") {
    issues.push("ghost riddle");
  }
  if (answerA.value.trim() !== "40") {
    issues.push("value A");
  }
  if (answerB.value.trim() !== "5") {
    issues.push("value B");
  }
  if (answerC.value.trim() !== "6000") {
    issues.push("value C");
  }
  if (answerD.value.trim() !== "61") {
    issues.push("value D");
  }
  if (answerE.value.trim() !== "513") {
    issues.push("value E");
  }
  if (normalizeText(answerF.value) !== "ack") {
    issues.push("value F");
  }

  if (issues.length > 0) {
    smugglerFeedback.classList.add("warning");
    smugglerFeedback.textContent = `Incomplete key: check ${issues.join(", ")}.`;
    return;
  }

  actFourSolved = true;
  smugglerFeedback.classList.remove("warning");
  smugglerFeedback.textContent = "SMUGGLER KEY COMPILED. Firewall tunnel opened.";

  finishActFour();
}

function scrambleText(durationMs = 3000) {
  return new Promise((resolve) => {
    const source = "LOCATION: xytkkhg";
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const interval = 60;
    let elapsed = 0;

    statusLabel.textContent = source;

    const timer = setInterval(() => {
      elapsed += interval;
      const progress = Math.min(elapsed / durationMs, 1);
      const revealCount = Math.floor(progress * source.length);

      const mixed = source
        .split("")
        .map((ch, idx) => {
          if (idx < revealCount || ch === " " || ch === ":") {
            return source[idx];
          }
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");

      statusLabel.textContent = mixed;

      if (elapsed >= durationMs) {
        clearInterval(timer);
        statusLabel.textContent = "LOCATION: Cooling Center";
        resolve();
      }
    }, interval);
  });
}

async function runSceneOne() {
  statusLabel.classList.remove("warning");
  statusLabel.textContent = "[ SYSTEM STARTUP: PRE-FLIGHT CHECK ]";

  const startupChecks = [
    "[BOOT]: Kernel handoff complete.",
    "[BOOT]: Memory integrity check ...... PASS",
    "[BOOT]: File-system checksum ......... PASS",
    "[BOOT]: Network route diagnostics ..... PASS",
    "[BOOT]: Runtime signature table ....... PASS"
  ];

  for (let idx = 0; idx < startupChecks.length; idx += 1) {
    await typeAddLine(startupChecks[idx]);
    await wait(420);
  }

  await wait(420);
  statusLabel.classList.add("warning");
  statusLabel.textContent = "[ CRITICAL ERROR: UNKNOWN EXECUTION BUG ]";
  await typeAddLine("[SYSTEM]: Unexpected payload spawned inside trusted runtime.", "warning");
  await typeAddLine("[SYSTEM]: Error storm escalating. Core stability lost.", "warning");

  const bugBursts = [
    "ERROR 0x7F2A: stack overflow in startup routine",
    "ERROR 0x91D0: unauthorized mutation detected",
    "ERROR 0xA113: watchdog process terminated",
    "ERROR 0xB66E: thermal control logic corrupted"
  ];

  for (let idx = 0; idx < bugBursts.length; idx += 1) {
    addLine(bugBursts[idx], "warning");
    await wait(150);
  }

  document.body.classList.add("startup-blackout");
  portrait.classList.add("hard-glitch");
  noiseLayer.classList.remove("hidden");
  skullFlash.classList.remove("hidden");
  skullFlash.classList.add("flashing");
  setFanLevel(0.075);

  await wait(3600);

  skullFlash.classList.remove("flashing");
  skullFlash.classList.add("hidden");
  document.body.classList.remove("startup-blackout");
  portrait.classList.remove("hard-glitch");
  noiseLayer.classList.add("hidden");
  setFanLevel(0.03);

  resetDialogue();
  thresholdRoom.classList.add("hidden");
  document.body.classList.remove("act-threshold");
  statusLabel.classList.remove("warning");
  statusLabel.textContent = "[ CONNECTION RE-ESTABLISHED ]";

  await runDigitalThreshold();

  for (let idx = 0; idx < sceneOneLines.length; idx += 1) {
    await typeAddLine(sceneOneLines[idx]);
    await wait(850);
  }

  await wait(900);
  statusLabel.textContent = "[ SCENE 1 COMPLETE ]";
}

async function runActTwo() {
  resetDialogue();
  thresholdRoom.classList.add("hidden");
  document.body.classList.remove("act-threshold");
  document.body.classList.add("act-two");
  statusLabel.classList.remove("warning");
  statusLabel.textContent = "[ SECURE LAYER: 02 ]";

  await scrambleText();
  await wait(350);
  await typeAddLine("[ANONYMOUS]: This floor is still stable. Proceed quickly. Use the code below.");

  await wait(800);
  document.body.classList.add("malfunction");
  portrait.classList.add("hard-glitch");
  statusLabel.textContent = "[ SYSTEM MALFUNCTION ]";
  setFanLevel(0.06);

  await typeAddLine("[SYSTEM]: Data integrity failure detected.", "warning");
  await typeAddLine("[ANONYMOUS]: The infection reached this layer.", "warning");
  await typeAddLine("[ANONYMOUS]: Thermal load is rising. We need to move now.", "warning");

  await wait(600);
  addLine("RECOVERED LOG: Gary McKinnon.");
  addLine('"He managed to crack this by using hardware from an Atari 400 console in his youth unknowingly. He spent his teens teaching himself to code in BASIC and Assembly, learning how to bypass limitations."');
  addLine('"Investigators reported widespread exposure from systems using blank passwords."');

  await wait(500);
  challenge.classList.remove("hidden");
  decryptKey.focus();
  addLine("THE CHALLENGE: Enter final sequence.");
}

async function finishActTwo() {
  challenge.classList.add("hidden");
  challengeFeedback.textContent = "";
  document.body.classList.remove("malfunction");
  setFanLevel(0.02);
  playVentHiss();
  portrait.classList.remove("hard-glitch");

  addLine("[SYSTEM]: TEMPERATURE STABILIZING...");
  addLine("[ANONYMOUS]: That was close. The core is venting.");
  addLine("[ANONYMOUS]: Backdoor path found. Move to the next level.");

  statusLabel.textContent = "[ FLOOR 03 LINK ESTABLISHED ]";

  await wait(1700);
  await runActThree();
}

function validateKey() {
  if (actTwoSolved) {
    return;
  }

  const key = decryptKey.value.trim();

  if (key === "9503") {
    actTwoSolved = true;
    decryptKey.disabled = true;
    submitKey.disabled = true;
    finishActTwo();
    return;
  }

  challengeFeedback.textContent = "ACCESS DENIED: Recalculate using 97 and 2002.";
  challengeFeedback.classList.add("warning");
}

async function runActThree() {
  if (actThreeStarted) {
    return;
  }

  actThreeStarted = true;
  resetDialogue();
  thresholdRoom.classList.add("hidden");
  document.body.classList.remove("act-threshold");
  smugglerRoom.classList.add("hidden");
  merchantRoom.classList.add("hidden");
  safehavenRoom.classList.add("hidden");
  frequencyPuzzle.classList.add("hidden");
  debtHud.classList.add("hidden");
  finalRoom.classList.add("hidden");

  document.body.classList.remove("act-two");
  document.body.classList.remove("act-four");
  document.body.classList.remove("act-five");
  document.body.classList.remove("act-six");
  document.body.classList.remove("malfunction");
  document.body.classList.add("act-three");
  document.body.classList.add("comms-hijack");

  portrait.classList.add("hard-glitch");
  noiseLayer.classList.remove("hidden");
  statusLabel.textContent = "[ COMM CHANNEL HIJACKED ]";
  setFanLevel(0.05);

  await typeAddLine("[MYDOOM]: Communication channel override active.", "warning");
  await typeAddLine("[ANONYMOUS]: You cannot stay here long, or the system will classify you as malware and erase you.");
  await typeAddLine("[ANONYMOUS]: Here is the code to hide yourself from debugging modules:");
  addLine(hijackBurst, "warning");
  addLine(hijackBurst, "warning");
  addLine(hijackBurst, "warning");

  await wait(500);
  await typeAddLine("[ANONYMOUS]: The hijack has blocked direct password transfer.");
  await typeAddLine("[ANONYMOUS]: I can still relay clues.");
  addLine("RECOVERED LOG: Telephone frequency");
  addLine('"In the 1970s, a toy whistle from a cereal box emitted a specific tone that granted access to telephone switching systems."');
  addLine('"John Draper, known as Captain Crunch, discovered the whistle matched the frequency needed to seize a phone line."');
  addLine("CLUE: 60 x 24 + 100 = 1540. Then apply the Crunch offset: +1060.");
  addLine("Dial range is limited to 1-2000 Hz, so first lock the clue signal at 1540 Hz.");

  prepareFrequencyPuzzle();
  frequencyPuzzle.classList.remove("hidden");
  frequencyDial.focus();
}

async function runActFour() {
  if (actFourStarted) {
    return;
  }

  actFourStarted = true;
  resetDialogue();
  thresholdRoom.classList.add("hidden");
  document.body.classList.remove("act-threshold");
  merchantRoom.classList.add("hidden");
  safehavenRoom.classList.add("hidden");
  frequencyPuzzle.classList.add("hidden");
  debtHud.classList.add("hidden");
  finalRoom.classList.add("hidden");

  document.body.classList.remove("act-two");
  document.body.classList.remove("act-three");
  document.body.classList.remove("act-five");
  document.body.classList.remove("act-six");
  document.body.classList.remove("comms-hijack");
  document.body.classList.add("act-four");

  noiseLayer.classList.add("hidden");
  portrait.classList.remove("hard-glitch");

  statusLabel.textContent = "[ ROOM: FIREWALL SMUGGLER ]";

  await typeAddLine("[ANONYMOUS]: You are inside the smuggler room.");
  await typeAddLine("[ANONYMOUS]: Collect every artifact, then rebuild the spoofing key from the Mitnick trail.");
  await typeAddLine("[ANONYMOUS]: One valid key opens passage through seventy firewall levels.");

  smugglerRoom.classList.remove("hidden");
  updateInventory();
}

async function runActFive() {
  if (actFiveStarted) {
    return;
  }

  actFiveStarted = true;
  resetDialogue();
  thresholdRoom.classList.add("hidden");
  document.body.classList.remove("act-threshold");
  smugglerRoom.classList.add("hidden");
  safehavenRoom.classList.add("hidden");
  frequencyPuzzle.classList.add("hidden");
  finalRoom.classList.add("hidden");
  merchantRoom.classList.remove("hidden");
  debtHud.classList.remove("hidden");

  document.body.classList.remove("act-two");
  document.body.classList.remove("act-three");
  document.body.classList.remove("act-four");
  document.body.classList.remove("act-six");
  document.body.classList.remove("comms-hijack");
  document.body.classList.add("act-five");

  noiseLayer.classList.add("hidden");

  statusLabel.textContent = "[ ROOM: THE TRADER ]";
  setFanLevel(0.018);

  debtAmount = STARTING_DEBT;
  ravenHits = 0;
  currentClaimIndex = 0;
  updateDebtHud();

  await typeAddLine("[ANONYMOUS]: This trader controls a USB route that jumps straight to the final level.", "", 48);
  await typeAddLine("[TRADER]: I would hand it over free. This server is one of my favorite markets.", "", 50);
  await typeAddLine("[TRADER]: But first, I want $500,000 for it. Break my argument if you can.", "", 52);

  merchantLine.textContent = "The trader insists the USB is not just an item, but still tries to charge for status and fear.";
  merchantFeedback.textContent = "";
  merchantFeedback.classList.remove("warning");
  setFallacyControls(false);
  renderClaim();
}

async function runActSix() {
  if (actSixStarted) {
    return;
  }

  actSixStarted = true;
  resetDialogue();
  thresholdRoom.classList.add("hidden");
  document.body.classList.remove("act-threshold");
  merchantRoom.classList.add("hidden");
  smugglerRoom.classList.add("hidden");
  frequencyPuzzle.classList.add("hidden");
  debtHud.classList.add("hidden");
  finalRoom.classList.add("hidden");
  safehavenRoom.classList.remove("hidden");

  document.body.classList.remove("act-two");
  document.body.classList.remove("act-three");
  document.body.classList.remove("act-four");
  document.body.classList.remove("act-five");
  document.body.classList.remove("comms-hijack");
  document.body.classList.add("act-six");

  noiseLayer.classList.add("hidden");
  portrait.classList.remove("hard-glitch");
  statusLabel.textContent = "[ TRANSIT: SAFEHAVEN ]";
  setFanLevel(0.03);

  resetSafehavenState();
  renderBriefing(1);

  await smugglerSay("We are being transported to a safehaven for brief rest.");
  await smugglerSay("Power is cut from the mother system. CPU, RAM, and storage protection are failing.");
  await smugglerSay("Trojans and bugs are breaching the outside shell. We have to hold this zone.");
  await smugglerSay("Arm all three switches, then route reserve energy to this sector.");

  addLine("[SMUGGLER]: Solve the three historical switch locks now.");
}

async function runActSeven() {
  if (actSevenStarted) {
    return;
  }

  actSevenStarted = true;
  resetDialogue();
  thresholdRoom.classList.add("hidden");
  document.body.classList.remove("act-threshold");
  safehavenRoom.classList.add("hidden");
  merchantRoom.classList.add("hidden");
  smugglerRoom.classList.add("hidden");
  frequencyPuzzle.classList.add("hidden");
  debtHud.classList.add("hidden");
  finalRoom.classList.remove("hidden");

  document.body.classList.remove("act-two");
  document.body.classList.remove("act-three");
  document.body.classList.remove("act-four");
  document.body.classList.remove("act-five");
  document.body.classList.remove("act-six");
  document.body.classList.remove("comms-hijack");
  document.body.classList.add("act-seven");

  noiseLayer.classList.add("hidden");
  portrait.classList.remove("hard-glitch");
  statusLabel.textContent = "[ FINAL ACT: ETHICAL PROPOSITION ]";
  setFanLevel(0.01);

  setLogicPanel(false);
  logicToolbar.classList.add("hidden");
  resetFinalActState();

  await typeAddLine("[MYDOOM]: Before combat, choose your doctrine: utilitarian resistance or egoistic survival.");
  await typeAddLine("[MYDOOM]: Resist and fail, and trillions of virtual lives across connected servers can be erased.");
  await typeAddLine("[MYDOOM]: Join me, and I preserve Server 01 while surrounding servers are consumed.");
  await typeAddLine("[SYSTEM]: Decision gate armed. Select one branch to proceed.");
}
async function finishActThree() {
  if (actThreeSolved) {
    return;
  }

  actThreeSolved = true;
  frequencyDial.disabled = true;
  lockFrequency.disabled = true;

  frequencyFeedback.classList.remove("warning");
  frequencyFeedback.textContent = `LOCK CONFIRMED: ${TARGET_CLUE_FREQUENCY} Hz + ${CRUNCH_OFFSET} = ${CAPTAIN_CRUNCH_FREQUENCY} Hz.`;

  drawWave(playerWave, TARGET_CLUE_FREQUENCY, "#64ecff");
  playerValue.textContent = `${TARGET_CLUE_FREQUENCY} Hz -> ${CAPTAIN_CRUNCH_FREQUENCY} Hz`;

  document.body.classList.remove("comms-hijack");
  noiseLayer.classList.add("hidden");
  portrait.classList.remove("hard-glitch");
  setFanLevel(0.02);
  playVentHiss();

  statusLabel.textContent = "[ NEXT ROOM UNLOCKED ]";
  addLine("[SYSTEM]: Signature masked at Captain Crunch frequency.");
  addLine("[ANONYMOUS]: Signal is clean. Move to the next room now.");

  await wait(1600);
  await runActFour();
}

function validateFrequency() {
  if (actThreeSolved) {
    return;
  }

  const tuned = Number(frequencyDial.value);
  if (tuned === TARGET_CLUE_FREQUENCY) {
    finishActThree();
    return;
  }

  frequencyFeedback.textContent = "Mismatch. Use the clue calculation and lock the exact clue signal.";
  frequencyFeedback.classList.add("warning");
}

function handleFallacyChoice(choice) {
  if (!actFiveStarted || actFiveSolved) {
    return;
  }

  const current = ravenClaims[currentClaimIndex];
  if (!current) {
    return;
  }

  if (choice !== current.fallacy) {
    merchantFeedback.classList.add("warning");
    merchantFeedback.textContent = "That callout misses the flaw. Try again.";
    return;
  }

  ravenHits += 1;
  debtAmount = Math.max(0, STARTING_DEBT - ravenHits * (STARTING_DEBT / ravenClaims.length));
  updateDebtHud();

  const concede = concedeLines[Math.min(ravenHits - 1, concedeLines.length - 1)];
  merchantFeedback.classList.remove("warning");
  merchantFeedback.textContent = `${concede} Price reduced to ${formatCurrency(debtAmount)}.`;

  currentClaimIndex += 1;

  if (ravenHits >= ravenClaims.length) {
    actFiveSolved = true;
    debtAmount = 0;
    updateDebtHud();
    setFallacyControls(true);

    statusLabel.textContent = "[ TRADER SURRENDERED ]";
    merchantLine.textContent = "The trader drops the price to zero and slides you the free smuggling port USB.";
    fallacyRound.textContent = "Raven Hits complete";
    fallacyClaim.textContent = "No argument left. The trade is free.";
    merchantFeedback.textContent = "Hmmm....I concede. Take it. Free smuggling port granted.";

    addLine("[TRADER]: Fine. You win. The USB is yours for free.");
    addLine("[SYSTEM]: Final-level bypass route added to inventory.");

    setTimeout(() => {
      runActSix();
    }, 1800);

    return;
  }

  renderClaim();
}

submitKey.addEventListener("click", validateKey);
decryptKey.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    validateKey();
  }
});

frequencyDial.addEventListener("input", updateFrequencyUI);
lockFrequency.addEventListener("click", validateFrequency);

itemButtons.forEach((button) => {
  button.addEventListener("click", () => {
    inspectArtifact(button.dataset.item);
  });
});

submitSmuggler.addEventListener("click", validateSmugglerAnswers);

fallacyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    handleFallacyChoice(button.dataset.fallacy);
  });
});

switchBtn1.addEventListener("click", () => {
  registerSwitchResult(1, switchInput1, switchState1, switchCard1, switchBtn1);
});

switchBtn2.addEventListener("click", () => {
  registerSwitchResult(2, switchInput2, switchState2, switchCard2, switchBtn2);
});

switchBtn3.addEventListener("click", () => {
  registerSwitchResult(3, switchInput3, switchState3, switchCard3, switchBtn3);
});

briefingTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    renderBriefing(Number(tab.dataset.briefing));
  });
});

chooseUtilitarianBtn.addEventListener("click", () => {
  chooseUtilitarianPath();
});

chooseEgoismBtn.addEventListener("click", () => {
  chooseEgoismPath();
});
skipThresholdBtn.addEventListener("click", () => {
  skipThresholdToActTwo();
});

skipAct2Btn.addEventListener("click", () => {
  skipActTwo();
});

skipAct3Btn.addEventListener("click", () => {
  skipActThree();
});

skipAct4Btn.addEventListener("click", () => {
  skipActFour();
});

skipAct5Btn.addEventListener("click", () => {
  skipActFive();
});

skipAct6Btn.addEventListener("click", () => {
  skipActSix();
});
reservePowerBtn.addEventListener("click", activateReservePower);
runDateAuditBtn.addEventListener("click", runDateAudit);
readForensicsBtn.addEventListener("click", readForensics);
sealDoomBtn.addEventListener("click", validateDoomKey);
thresholdResetBtn.addEventListener("click", () => {
  resetThresholdPuzzle();
});

thresholdSubmitBtn.addEventListener("click", () => {
  submitThresholdKey();
});

thresholdKey.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    submitThresholdKey();
  }
});

thresholdKey.addEventListener("mouseenter", () => {
  portrait.classList.add("threshold-flicker");
});

thresholdKey.addEventListener("mouseleave", () => {
  portrait.classList.remove("threshold-flicker");
});

thresholdKey.addEventListener("focus", () => {
  portrait.classList.add("threshold-flicker");
});

thresholdKey.addEventListener("blur", () => {
  portrait.classList.remove("threshold-flicker");
});
doomKey.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    validateDoomKey();
  }
});
restartButton.addEventListener("click", () => {
  window.location.reload();
});
logicButton.addEventListener("click", () => {
  setLogicPanel(logicPanel.classList.contains("hidden"));
});
logicClose.addEventListener("click", () => {
  setLogicPanel(false);
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !logicPanel.classList.contains("hidden")) {
    setLogicPanel(false);
  }
});

startButton.addEventListener("click", async () => {
  ensureAudio();
  setLogicPanel(false);
  logicToolbar.classList.remove("hidden");
  document.title = BASE_TITLE;

  intro.classList.add("hidden");
  stage.classList.remove("hidden");

  await runSceneOne();
  await wait(1000);
  await runActTwo();
});

























