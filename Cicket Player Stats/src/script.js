// Variable

let clickSound = new Audio("../Resources/click.mp3");
let otherClickSound = new Audio("../Resources/other-click.mp3");
let keySound = new Audio("../Resources/keySound.mp3");

let battingBallsPlayed = document.querySelector(".balls").value;
let battingRuns = document.querySelector(".runs").value;
let battingFours = document.querySelector(".fours").value;
let battingSixes = document.querySelector(".sixes").value;
let strikeRate = document.querySelector(".sr");

let result = document.querySelector(".result").innerHTML;
let save = document.querySelector(".save");

let ballSave = document.querySelector(".ballSave");
battingBallsPlayed = Number(battingBallsPlayed, 10);
battingRuns = Number(battingRuns, 10);
strikeRate.value = Number(strikeRate, 1000);
battingFours = Number(battingFours, 10);
battingSixes = Number(battingSixes, 10);

let ballOne = document.querySelector(".ballOne");
let fourTextBox = document.querySelector(".fours");
let sixTextBox = document.querySelector(".sixes");
let BallTextBox = document.querySelector(".balls");
let BattingPlayerText = document.querySelector(".name");

let clear = document.querySelector(".clear");
let calc = document.querySelector(".calc");

let RunTextBox = document.querySelector(".runs");
let ballOneTwo = document.querySelector(".ballOneTwo");
let ballOneThree = document.querySelector(".ballOneThree");
let ballOneFour = document.querySelector(".ballOneFour");
let ballTwo = document.querySelector(".ballTwo");
let ballFour = document.querySelector(".ballFour");
let ballSix = document.querySelector(".ballSix");

ballOne.addEventListener("click", () => {
  battingBallsPlayed = battingBallsPlayed + 1;
  BallTextBox.value = battingBallsPlayed;
  clickSound.play();
});

ballOneTwo.addEventListener("click", () => {
  battingRuns = battingRuns + 1;
  RunTextBox.value = battingRuns;
  clickSound.play();
});

ballTwo.addEventListener("click", () => {
  battingRuns = battingRuns + 2;
  RunTextBox.value = battingRuns;
  clickSound.play();
});

ballFour.addEventListener("click", () => {
  RunTextBox.value = battingRuns;
  battingFours = battingFours + 1;
  fourTextBox.value = battingFours;
  clickSound.play();
});

BattingPlayerText.addEventListener("keypress", () => {
  keySound.play();
});

ballSix.addEventListener("click", () => {
  battingRuns = battingRuns + 6;
  RunTextBox.value = battingRuns;
  battingSixes = battingSixes + 1;
  sixTextBox.value = battingSixes;
  clickSound.play();
});

clear.addEventListener("click", () => {
  otherClickSound.play();
  BattingPlayerText.value = "";
  BallTextBox.value = "";
  battingBallsPlayed = 0;
  RunTextBox.value = "";
  battingRuns = 0;
  fourTextBox.value = "";
  battingFours = 0;
  sixTextBox.value = "";
  battingSixes = 0;
  strikeRate.value = "";
  result = "";
  document.querySelector(".heading").getElementsByTagName("p")[0].style.width =
    "0";
  document.querySelector(".heading").getElementsByTagName("p")[0].style.height =
    "0";
  document
    .querySelector(".heading")
    .getElementsByTagName("p")[0].style.background = "0)";
  document
    .querySelector(".heading")
    .getElementsByTagName("p")[0].style.fontSize = "0";
  document.querySelector(".heading").getElementsByTagName("p")[0].innerHTML =
    result;
});

calc.addEventListener("click", () => {
  otherClickSound.play();
  strikeRate.value = ((battingRuns / battingBallsPlayed) * 100).toFixed(2);
  if (strikeRate.value >= 200 || battingFours >= 5 || battingSixes >= 4) {
    result = "Excellent";
    document
      .querySelector(".heading")
      .getElementsByTagName("p")[0].style.width = "190px";
    document
      .querySelector(".heading")
      .getElementsByTagName("p")[0].style.height = "50px";
    document
      .querySelector(".heading")
      .getElementsByTagName("p")[0].style.background = "rgb(118, 255, 118)";
    document
      .querySelector(".heading")
      .getElementsByTagName("p")[0].style.fontSize = "30px";
    document.querySelector(".heading").getElementsByTagName("p")[0].innerHTML =
      result;
  } else if (
    strikeRate.value >= 150 ||
    battingFours >= 3 ||
    battingSixes >= 3
  ) {
    result = "Very Good";
    document
      .querySelector(".heading")
      .getElementsByTagName("p")[0].style.width = "190px";
    document
      .querySelector(".heading")
      .getElementsByTagName("p")[0].style.height = "50px";
    document
      .querySelector(".heading")
      .getElementsByTagName("p")[0].style.background = "rgb(255, 255, 2)";
    document
      .querySelector(".heading")
      .getElementsByTagName("p")[0].style.fontSize = "30px";
    document.querySelector(".heading").getElementsByTagName("p")[0].innerHTML =
      result;
  } else if (
    strikeRate.value >= 100 ||
    battingFours >= 2 ||
    battingSixes >= 2
  ) {
    result = "Good";
    document
      .querySelector(".heading")
      .getElementsByTagName("p")[0].style.width = "190px";
    document
      .querySelector(".heading")
      .getElementsByTagName("p")[0].style.height = "50px";
    document
      .querySelector(".heading")
      .getElementsByTagName("p")[0].style.background = "rgb(255, 255, 118)";
    document
      .querySelector(".heading")
      .getElementsByTagName("p")[0].style.fontSize = "30px";
    document.querySelector(".heading").getElementsByTagName("p")[0].innerHTML =
      result;
  } else if (
    strikeRate.value < 100 &&
    strikeRate.value >= 60 &&
    battingFours <= 1 &&
    battingSixes == 0
  ) {
    result = "Poor";
    document
      .querySelector(".heading")
      .getElementsByTagName("p")[0].style.width = "190px";
    document
      .querySelector(".heading")
      .getElementsByTagName("p")[0].style.height = "50px";
    document
      .querySelector(".heading")
      .getElementsByTagName("p")[0].style.background = "rgb(252, 127, 3)";
    document
      .querySelector(".heading")
      .getElementsByTagName("p")[0].style.fontSize = "30px";
    document.querySelector(".heading").getElementsByTagName("p")[0].innerHTML =
      result;
  } else if (strikeRate.value < 60 && battingFours == 1 && battingSixes == 0) {
    result = "Bad";
    document
      .querySelector(".heading")
      .getElementsByTagName("p")[0].style.width = "190px";
    document
      .querySelector(".heading")
      .getElementsByTagName("p")[0].style.height = "50px";
    document
      .querySelector(".heading")
      .getElementsByTagName("p")[0].style.background = "rgb(166, 47, 0)";
    document
      .querySelector(".heading")
      .getElementsByTagName("p")[0].style.fontSize = "30px";
    document.querySelector(".heading").getElementsByTagName("p")[0].innerHTML =
      result;
  } else {
    result = "Very Bad";
    document
      .querySelector(".heading")
      .getElementsByTagName("p")[0].style.width = "190px";
    document
      .querySelector(".heading")
      .getElementsByTagName("p")[0].style.height = "50px";
    document
      .querySelector(".heading")
      .getElementsByTagName("p")[0].style.background = "rgb(166, 0, 0)";
    document
      .querySelector(".heading")
      .getElementsByTagName("p")[0].style.fontSize = "30px";
    document.querySelector(".heading").getElementsByTagName("p")[0].innerHTML =
      result;
  }
});

// Bowling Stats
let bowlingBalls = document.querySelector(".bowlBalls").value;
let bowlingRunsGiven = document.querySelector(".bowlRuns").value;
let bowlingEconomy = document.querySelector(".economy");
let bowlingWickets = document.querySelector(".wickets").value;
let bowlingHatrick = document.querySelector(".hatrick").value;

bowlingBalls = Number(bowlingBalls, 100);
bowlingRunsGiven = Number(bowlingRunsGiven, 100);
bowlingWickets = Number(bowlingWickets, 100);
bowlingHatrick = Number(bowlingHatrick, 100);
bowlingRunsGiven = Number(bowlingRunsGiven, 100);
bowlingEconomy.value = Number(bowlingBalls, 1000);

let PlayerTextBox = document.querySelector(".bolwPlayerName");
let BallsTextBox = document.querySelector(".bowlBalls");
let BowlingRunsTextBox = document.querySelector(".bowlRuns");
let BowlingEconomyText = document.querySelector(".economy");
let WicketsText = document.querySelector(".wickets");
let hatrickText = document.querySelector(".hatrick");

// Buttons
let onePlusOne = document.querySelector(".onePlusOne");
let onePlusTwo = document.querySelector(".onePlusTwo");
let onePlusThree = document.querySelector(".onePlusThree");
let onePlusFour = document.querySelector(".onePlusFour");
let twoPlus = document.querySelector(".twoPlus");
let sixPlus = document.querySelector(".sixPlus");
let fourPlus = document.querySelector(".fourPlus");

onePlusOne.addEventListener("click", () => {
  bowlingBalls = bowlingBalls + 1;
  BallsTextBox.value = bowlingBalls;
  clickSound.play();
});

onePlusTwo.addEventListener("click", () => {
  bowlingRunsGiven = bowlingRunsGiven + 1;
  BowlingRunsTextBox.value = bowlingRunsGiven;
  clickSound.play();
});

onePlusThree.addEventListener("click", () => {
  bowlingWickets = bowlingWickets + 1;
  WicketsText.value = bowlingWickets;
  clickSound.play();
});

onePlusFour.addEventListener("click", () => {
  bowlingHatrick = bowlingHatrick + 1;
  hatrickText.value = bowlingHatrick;
  clickSound.play();
});

twoPlus.addEventListener("click", () => {
  bowlingRunsGiven = bowlingRunsGiven + 2;
  BowlingRunsTextBox.value = bowlingRunsGiven;
  clickSound.play();
});

fourPlus.addEventListener("click", () => {
  bowlingRunsGiven = bowlingRunsGiven + 4;
  BowlingRunsTextBox.value = bowlingRunsGiven;
  clickSound.play();
});

sixPlus.addEventListener("click", () => {
  bowlingRunsGiven = bowlingRunsGiven + 6;
  BowlingRunsTextBox.value = bowlingRunsGiven;
  clickSound.play();
});

PlayerTextBox.addEventListener("keypress", () => {
  keySound.play();
});

let ballClear = document.querySelector(".bowlClear");
ballClear.addEventListener("click", () => {
  otherClickSound.play();
  PlayerTextBox.value = "";
  BallsTextBox.value = "";
  bowlingBalls = 0;
  BowlingRunsTextBox.value = "";
  bowlingRunsGiven = 0;
  WicketsText.value = "";
  bowlingWickets = 0;
  hatrickText.value = "";
  bowlingHatrick = 0;
  bowlingEconomy.value = "";
  result = "";
  document
    .querySelector(".BallHeading")
    .getElementsByTagName("p")[0].style.width = "0";
  document
    .querySelector(".BallHeading")
    .getElementsByTagName("p")[0].style.height = "0";
  document
    .querySelector(".BallHeading")
    .getElementsByTagName("p")[0].style.background = "0";
  document
    .querySelector(".BallHeading")
    .getElementsByTagName("p")[0].style.fontSize = "0";
  document
    .querySelector(".BallHeading")
    .getElementsByTagName("p")[0].innerHTML = result;
});

let ballCalc = document.querySelector(".bowlCalc");
ballCalc.addEventListener("click", () => {
  otherClickSound.play();
  bowlingEconomy.value = (bowlingRunsGiven / (bowlingBalls / 6)).toFixed(2);
  if (bowlingEconomy.value < 5 || bowlingWickets >= 3 || bowlingHatrick >= 1) {
    result = "Excellent";
    document
      .querySelector(".BallHeading")
      .getElementsByTagName("p")[0].style.width = "190px";
    document
      .querySelector(".BallHeading")
      .getElementsByTagName("p")[0].style.height = "50px";
    document
      .querySelector(".BallHeading")
      .getElementsByTagName("p")[0].style.background = "rgb(118, 255, 118)";
    document
      .querySelector(".BallHeading")
      .getElementsByTagName("p")[0].style.fontSize = "30px";
    document
      .querySelector(".BallHeading")
      .getElementsByTagName("p")[0].innerHTML = result;
  } else if (
    (bowlingEconomy.value <= 6 && bowlingEconomy >= 5) ||
    (bowlingWickets >= 2 && bowlingWickets <= 3)
  ) {
    result = "Very Good";
    document
      .querySelector(".BallHeading")
      .getElementsByTagName("p")[0].style.width = "190px";
    document
      .querySelector(".BallHeading")
      .getElementsByTagName("p")[0].style.height = "50px";
    document
      .querySelector(".BallHeading")
      .getElementsByTagName("p")[0].style.background = "rgb(255, 255, 2)";
    document
      .querySelector(".BallHeading")
      .getElementsByTagName("p")[0].style.fontSize = "30px";
    document
      .querySelector(".BallHeading")
      .getElementsByTagName("p")[0].innerHTML = result;
  } else if (
    bowlingEconomy.value <= 8 ||
    (bowlingWickets >= 1 && bowlingWickets < 2)
  ) {
    result = "Good";
    document
      .querySelector(".BallHeading")
      .getElementsByTagName("p")[0].style.width = "190px";
    document
      .querySelector(".BallHeading")
      .getElementsByTagName("p")[0].style.height = "50px";
    document
      .querySelector(".BallHeading")
      .getElementsByTagName("p")[0].style.background = "rgb(255, 255, 118)";
    document
      .querySelector(".BallHeading")
      .getElementsByTagName("p")[0].style.fontSize = "30px";
    document
      .querySelector(".BallHeading")
      .getElementsByTagName("p")[0].innerHTML = result;
  } else if (bowlingEconomy.value > 8 && bowlingWickets == 1) {
    result = "Poor";
    document
      .querySelector(".BallHeading")
      .getElementsByTagName("p")[0].style.width = "190px";
    document
      .querySelector(".BallHeading")
      .getElementsByTagName("p")[0].style.height = "50px";
    document
      .querySelector(".BallHeading")
      .getElementsByTagName("p")[0].style.background = "rgb(252, 127, 3)";
    document
      .querySelector(".BallHeading")
      .getElementsByTagName("p")[0].style.fontSize = "30px";
    document
      .querySelector(".BallHeading")
      .getElementsByTagName("p")[0].innerHTML = result;
  } else if (
    bowlingEconomy.value <= 10 ||
    (bowlingWickets == 1 && bowlingEconomy > 8)
  ) {
    result = "Bad";
    document
      .querySelector(".BallHeading")
      .getElementsByTagName("p")[0].style.width = "190px";
    document
      .querySelector(".BallHeading")
      .getElementsByTagName("p")[0].style.height = "50px";
    document
      .querySelector(".BallHeading")
      .getElementsByTagName("p")[0].style.background = "rgb(166, 47, 0)";
    document
      .querySelector(".BallHeading")
      .getElementsByTagName("p")[0].style.fontSize = "30px";
    document
      .querySelector(".BallHeading")
      .getElementsByTagName("p")[0].innerHTML = result;
  } else if (bowlingEconomy.value > 10 || bowlingWickets == 0) {
    result = "Very Bad";
    document
      .querySelector(".BallHeading")
      .getElementsByTagName("p")[0].style.width = "190px";
    document
      .querySelector(".BallHeading")
      .getElementsByTagName("p")[0].style.height = "50px";
    document
      .querySelector(".BallHeading")
      .getElementsByTagName("p")[0].style.background = "rgb(166, 0, 0)";
    document
      .querySelector(".BallHeading")
      .getElementsByTagName("p")[0].style.fontSize = "30px";
    document
      .querySelector(".BallHeading")
      .getElementsByTagName("p")[0].innerHTML = result;
  }
});

let SavedData = document.getElementById("savedData");
save.addEventListener("click", () => {
  otherClickSound.play();
  let battingPlayerName = document.getElementsByClassName("textbox")[0].value;
  let playerBattingData = {
    "Player Name": battingPlayerName,
    "Balls Played": battingBallsPlayed,
    Runs: battingRuns,
    "Strike Rate": strikeRate.value,
    "4s": battingFours,
    "6s": battingSixes,
    Performance: result,
  };
  window.localStorage.setItem(
    battingPlayerName + "-batting",
    JSON.stringify(playerBattingData)
  );
  SavedData.value += JSON.stringify(playerBattingData);
});

ballSave.addEventListener("click", () => {
  otherClickSound.play();
  let bowlingPlayerName = document.querySelector(".bolwPlayerName").value;
  let playerBowlingData = {
    "Player Name": bowlingPlayerName,
    Balls: bowlingBalls,
    "Runs Given": bowlingRunsGiven,
    Economy: bowlingEconomy.value,
    Wickets: bowlingWickets,
    "Hat-Trick": bowlingHatrick,
    Performance: result,
  };
  window.localStorage.setItem(
    bowlingPlayerName + "-bowling",
    JSON.stringify(playerBowlingData)
  );
  SavedData.value += JSON.stringify(playerBowlingData);
});

let clearData = document.querySelector(".clearData");
clearData.addEventListener("click", () => {
  otherClickSound.play();
  savedData.value = "";
});
