const startButton = document.getElementById("startButton");
const intro = document.getElementById("intro");
const stage = document.getElementById("stage");
const dialogue = document.getElementById("dialogue");
const statusLabel = document.getElementById("status");
const mouth = document.getElementById("mouth");
const portrait = document.getElementById("portrait");
const challenge = document.getElementById("challenge");
const decryptKey = document.getElementById("decryptKey");
const submitKey = document.getElementById("submitKey");
const challengeFeedback = document.getElementById("challengeFeedback");
const noiseLayer = document.getElementById("noiseLayer");

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

const concedeLines = ["Hmmm....I concede", "Darn", "You're right", "Fine. Fair point.", "Alright. I surrender."];

const safeSwitchAnswers = {
  1: "11",
  2: "125000",
  3: "15101214"
};

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
let debtAmount = STARTING_DEBT;
let ravenHits = 0;
let currentClaimIndex = 0;

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

function typeLine(text, target) {
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
    }, 30);
  });
}

async function typeAddLine(text, cssClass = "") {
  const p = document.createElement("p");
  if (cssClass) {
    p.className = cssClass;
  }
  dialogue.appendChild(p);
  await typeLine(text, p);
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
  statusLabel.textContent = "[ CONNECTION ESTABLISHED ]";

  for (let idx = 0; idx < sceneOneLines.length; idx += 1) {
    await typeAddLine(sceneOneLines[idx]);
    await wait(850);
  }

  await wait(900);
  statusLabel.textContent = "[ SCENE 1 COMPLETE ]";
}

async function runActTwo() {
  resetDialogue();
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
  smugglerRoom.classList.add("hidden");
  merchantRoom.classList.add("hidden");
  safehavenRoom.classList.add("hidden");
  frequencyPuzzle.classList.add("hidden");
  debtHud.classList.add("hidden");

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
  merchantRoom.classList.add("hidden");
  safehavenRoom.classList.add("hidden");
  frequencyPuzzle.classList.add("hidden");
  debtHud.classList.add("hidden");

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
  smugglerRoom.classList.add("hidden");
  safehavenRoom.classList.add("hidden");
  frequencyPuzzle.classList.add("hidden");
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

  await typeAddLine("[ANONYMOUS]: This trader controls a USB route that jumps straight to the final level.");
  await typeAddLine("[TRADER]: I would hand it over free. This server is one of my favorite markets.");
  await typeAddLine("[TRADER]: But first, I want $500,000 for it. Break my argument if you can.");

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
  merchantRoom.classList.add("hidden");
  smugglerRoom.classList.add("hidden");
  frequencyPuzzle.classList.add("hidden");
  debtHud.classList.add("hidden");
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

  await smugglerSay("We are being transported to a safehaven for brief rest.");
  await smugglerSay("Power is cut from the mother system. CPU, RAM, and storage protection are failing.");
  await smugglerSay("Trojans and bugs are breaching the outside shell. We have to hold this zone.");
  await smugglerSay("Arm all three switches, then route reserve energy to this sector.");

  addLine("[SMUGGLER]: Solve the three historical switch locks now.");
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

reservePowerBtn.addEventListener("click", activateReservePower);

startButton.addEventListener("click", async () => {
  ensureAudio();

  intro.classList.add("hidden");
  stage.classList.remove("hidden");

  await runSceneOne();
  await wait(1000);
  await runActTwo();
});