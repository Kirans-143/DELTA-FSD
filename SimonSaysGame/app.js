let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];
let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game is started");
    started = true;
    levelUp();
  }
});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}
function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(function () {
    btn.classList.remove("userFlash");
  }, 250);
}
function levelUp() {
  level++;
  h2.innerText = `Level ${level}`;

  let randomIdx = Math.floor(Math.random() * 3);
  let randomClr = btns[randomIdx];
  let randomBtn = document.querySelector(`.${randomClr}`);
  // console.log(randomIdx);
  // console.log(randomClr);
  // console.log(randomBtn);
  gameSeq.push(randomClr);
  console.log(gameSeq);
  gameFlash(randomBtn);
}
function checkAns() {
  //console.log("curr level: ", level);
  let idx = level - 1;
  if (userSeq[idx] === gameSeq[idx]) {
    console.log("same value");
  } else {
    h2.innerText = `Game Over ! Press any key to start`;
  }
}

function btnPress() {
  //console.log("btn was pressed");
  let btn = this;
  userFlash(btn);

  userColor = btn.getAttribute("id");
  //console.log(userColor);
  userSeq.push(userColor);

  checkAns();
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}
