// Game Variables
let clickSound = new Audio("/Resources/click.mp3");
let winSound = new Audio("/Resources/win.mp3");
let turn = "X";
let isWin = false;

// Game Functions
function changeTurn() {
  if (turn === "X") {
    return (turn = "O");
  } else {
    return (turn = "X");
  }
}

function checkWin() {
  let boxtext = document.getElementsByClassName("boxtext");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wins.forEach((e) => {
    if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ) {
        document.querySelector('.info').innerHTML = boxtext[e[0]].innerHTML + " Won";
        isWin = true;
        document.querySelector('.image').getElementsByTagName('img')[0].style.width = '10vw';
        winSound.play();
    }
  });
}

// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    // clickSound.play();
    if (boxtext.innerHTML === "") {
      boxtext.innerHTML = turn;
      turn = changeTurn();
      clickSound.play();
      checkWin();
      if (!isWin) {
          document.getElementsByClassName("info")[0].innerHTML = "Turn for " + turn;
      }
    }
  });
});

let reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
  let boxtext = document.querySelectorAll(".boxtext");
  Array.from(boxtext).forEach((element) => {
    element.innerHTML = "";
    turn = "X";
    isWin = false;
    document.getElementsByClassName("info")[0].innerHTML = "Turn for " + turn;
    document.querySelector('.image').getElementsByTagName('img')[0].style.width = '0vw';
  });
});
