const words = [
    "H",
    "v",
    "c",
    "x",
    "l",
    "q",
    "z",
    "e",
    "b",
    "p",
    "r",
    "G",
    "w",
    "Y",
    "z",
    "d",
    "f",
    "i",
    "j",
    "k",
    "m",
    "n",
    "o",
    "r",
    "s",

    // "Programming",
    // "Code",
    // "Javascript",
    // "Town",
    // "Country",
    // "Testing",
    // "Youtube",
    // "Linkedin",
    // "Twitter",
    // "Github",
    // "Leetcode",
    // "Internet",
    // "Python",
    // "Scala",
    // "Destructuring",
    // "Paradigm",
    // "Styling",
    // "Cascade",
    // "Documentation",
    // "Coding",
    // "Funny",
    // "Working",
    // "Dependencies",
    // "Task",
    // "Runner",
    // "Roles",
    // "Test",
    // "Rust",
    // "Playing"
  ];
  
  // Setting Levels
  const lvls = {
    "Easy": 5,
    "Normal": 3,
    "Hard": 2
  };
  
  // Default Level
  let defaultLevelName = "Normal"; // Change Level From Here
  let defaultLevelSeconds = lvls[defaultLevelName];
  
  // Catch Selectors
  let startButton = document.querySelector(".start");
  let lvlNameSpan = document.querySelector(".message .lvl");
  let secondsSpan = document.querySelector(".message .seconds");
  let theWord = document.querySelector(".the-word");
  let upcomingWords = document.querySelector(".upcoming-words");
  let input = document.querySelector(".input");
  let timeLeftSpan = document.querySelector(".time span");
  let scoreGot = document.querySelector(".score .got");
  let scoreTotal = document.querySelector(".score .total");
  let finishMessage = document.querySelector(".finish");
  
  // set up controls
  lvlNameSpan.innerHTML = defaultLevelName;
  secondsSpan.innerHTML = defaultLevelSeconds;
  scoreTotal.innerHTML = words.length;
  timeLeftSpan.innerHTML = defaultLevelSeconds;
  // start game
startButton.onclick = function () {
  this.remove();
  input.focus();
  genWords();
}
function genWords() {
  upcomingWords.innerHTML = "";
  let randomWord = words[Math.floor(Math.random() * words.length)];
  let indexOfRandomWord = words.indexOf(randomWord);
  words.splice(indexOfRandomWord,1);
  theWord.innerHTML = randomWord;
  for (let i = 0; i < words.length; i++) {
    let div = document.createElement("div");
    let txt = document.createTextNode(words[i]);
    div.appendChild(txt);
    upcomingWords.appendChild(div);
  }
  startPlay();
}
function startPlay() {
  timeLeftSpan.innerHTML = defaultLevelSeconds;
  let start = setInterval(() => {
    timeLeftSpan.innerHTML--;
    if (timeLeftSpan.innerHTML === "0") {
      clearInterval(start);
      if (theWord.innerHTML.toLowerCase() === input.value.toLowerCase()) {
        input.value = "";
        scoreGot.innerHTML++;
        if (words.length > 0) {
          genWords();
        } else {
          let good = document.createElement("div");
          good.classList.add("good")
          let txt = document.createTextNode("you WON");
          good.appendChild(txt);
          finishMessage.appendChild(good)
        }
      } else {
        let div = document.createElement("div");
        let txt = document.createTextNode("you lost")
        div.appendChild(txt);
        div.classList.add("bad")
        finishMessage.appendChild(div)
      }
    }
  },1000)
}