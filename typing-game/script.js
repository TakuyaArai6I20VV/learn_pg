const RANDOM_SENTENCE_URL_API = "https://api.quotable.io/random";
const typeDisplay = document.getElementById('type-display');
const typeInput = document.getElementById("type-input");
const timer = document.getElementById("timer");

const typeSound = new Audio("./audio/typing-sound.mp3");
const correctSound = new Audio("./audio/correct.mp3");
const wrongSound = new Audio("./audio/wrong.mp3");
typeSound.volume, wrongSound.volume = 0.2;

function getRandomSentence () {
  return fetch(RANDOM_SENTENCE_URL_API)
  .then((res) => res.json())
  .then((data) => data.content);
}

typeInput.addEventListener("input", () => {
  typeSound.play();
  typeSound.currentTime = 0;

  const sentenceArray = typeDisplay.querySelectorAll("span");
  console.log(sentenceArray);
  const arrayValue = typeInput.value.split("");

  let allCorrect = true;
  sentenceArray.forEach((letterSpan, index) => {
    if ((arrayValue[index] == null)) {
      letterSpan.classList.remove("correct");
      letterSpan.classList.remove("incorrect");

      allCorrect = false;
    } else if (letterSpan.innerText == arrayValue[index]) {
      letterSpan.classList.add("correct");
      letterSpan.classList.remove("incorrect");
    } else {
      letterSpan.classList.add("incorrect");
      letterSpan.classList.remove("correct");

      wrongSound.play();
      wrongSound.currentTime = 0;
      allCorrect = false;
    }
  });

  if (allCorrect == true) {
    correctSound.play();

    renderNextSentence();
  }
});

async function renderNextSentence() {
  const sentence = await getRandomSentence();
  typeDisplay.innerText = "";

  let letters = sentence.split("");
  letters.forEach((letter) => {
    const letterSpan = document.createElement("span");
    letterSpan.innerText = letter;
    typeDisplay.appendChild(letterSpan);
  });

  typeInput.value = "";

  startTimer();
}

let startTime;
let originTime = 30;
function startTimer() {
  timer.innerText = originTime;
  startTime = new Date();
  setInterval(() => {
    timer.innerText = originTime - getTimerTime();
    if (timer.innerText <= 0) {
      timeUp();
    }
  }, 1000);
}

function getTimerTime() {
  return Math.floor((new Date() - startTime) / 1000);
}

function timeUp() {
  renderNextSentence();
}

// getRandomSentence();
renderNextSentence();
