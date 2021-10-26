"use strict";
// DOM elements
const checkBtn = document.querySelector(".check");
const againBtn = document.querySelector(".again");
const messeage = document.querySelector(".message");
const number = document.querySelector(".number");
const scoreEl = document.querySelector(".score");
const guess = document.querySelector(".guess");
const highScore = document.querySelector(".highscore");

// style elements
const body = document.querySelector("body");

// Variables
let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = Number(scoreEl.innerText);

// Amend the score function
const AmendScore = (message) => {
  if (score > 1) {
    messeage.innerText = message;
    score--;
    scoreEl.innerText = score;
  } else {
    messeage.innerText = "You Lost";
    scoreEl.textContent = "0";
    body.style.backgroundColor = "red";
    return;
  }
};

checkBtn.addEventListener("click", (e) => {
  if (!guess.value) {
    messeage.innerText = "⛔ No Number!";
    return;
  } else if (Number(guess.value) === secretNumber) {
    messeage.innerText = "🎉 Correct Number!";
    body.style.backgroundColor = "#60b347";
    number.style.width = "30rem";
    number.innerText = secretNumber;
    if (score > +highScore.innerText) {
      highScore.innerText = score;
    }
  } else if (Number(guess.value) > secretNumber) {
    AmendScore("Too High!");
  } else {
    AmendScore("Too Low!");
  }
});

againBtn.addEventListener("click", () => {
  body.style.backgroundColor = "#222";
  secretNumber = Math.floor(Math.random() * 20) + 1;
  score = 20;
  scoreEl.innerText = score;
  guess.value = "";
});
