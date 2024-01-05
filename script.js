let weaponArray = ["Rock", "Paper", "Scissors"];

let userChoice = "";
let computerChoice = "";

function getComputerChoice() {
  let random = Math.floor(Math.random() * weaponArray.length);

  computerChoice = weaponArray[random];

  console.log(computerChoice);
}

function showChoices() {
  const playerDiv = document.getElementById("player");
  const computerDiv = document.getElementById("computer");

  playerDiv.innerText = `You: ${userChoice}`;
  computerDiv.innerText = `Computer: ${computerChoice}`;
}

function showResult() {
  const resultText = document.getElementById("resultText");

  if (userChoice === computerChoice) {
    resultText.innerText = `Draw`;
    resultText.style.color = "orange";
  } else if (
    (userChoice == "Rock" && computerChoice == "Scissors") ||
    (userChoice == "Paper" && computerChoice == "Rock") ||
    (userChoice == "Scissors" && computerChoice == "Paper")
  ) {
    resultText.innerText = `You Won! `;
    resultText.style.color = "Green";
  } else {
    resultText.innerText = "You Lose!";
    resultText.style.color = "red";
  }
}

document.addEventListener("click", (e) => {
  if (e.target.className == "option") {
    userChoice = e.target.id;
    getComputerChoice();
    showChoices();
    showResult();
  }
});
