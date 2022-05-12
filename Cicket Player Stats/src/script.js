// Variable
let battingPlayerName = document.querySelector('.playerName').value;
let battingBallsPlayed = document.querySelector('.balls').value;
let battingRuns = document.querySelector('.runs').value;
let battingFours = document.querySelector('.fours').value;
let battingSixes = document.querySelector('.sixes').value;
let strikeRate = document.querySelector('.sr').value;

battingBallsPlayed =  Number(battingBallsPlayed, 10);
battingRuns =  Number(battingRuns, 10);
strikeRate =  Number(strikeRate, 10);
battingFours = Number(battingFours, 10)
battingSixes = Number(battingSixes, 10)

let ballOne = document.querySelector('.ballOne');
let fourTextBox = document.querySelector('.fours');
let sixTextBox = document.querySelector('.sixes');
let BallTextBox = document.querySelector('.balls');

let clear = document.querySelector('.clear');

let RunTextBox = document.querySelector('.runs');
let ballOneTwo = document.querySelector('.ballOneTwo');
let ballOneThree = document.querySelector('.ballOneThree');
let ballOneFour = document.querySelector('.ballOneFour');
let ballTwo = document.querySelector('.ballTwo');
let ballFour = document.querySelector('.ballFour');
let ballSix = document.querySelector('.ballSix');


ballOne.addEventListener('click', ()=> {
    // battingBallsPlayed = parseInt(battingBallsPlayed);
    battingBallsPlayed = battingBallsPlayed+1;
    BallTextBox.value = battingBallsPlayed;
});

ballOneTwo.addEventListener('click', ()=> {
    // battingBallsPlayed = parseInt(battingBallsPlayed);
    battingRuns = battingRuns+1;
    RunTextBox.value = battingRuns;
});

ballOneThree.addEventListener('click', ()=> {
    // battingBallsPlayed = parseInt(battingBallsPlayed);
    battingFours = battingFours+1;
    fourTextBox.value = battingFours;
});

ballOneFour.addEventListener('click', ()=> {
    // battingBallsPlayed = parseInt(battingBallsPlayed);
    battingSixes = battingSixes+1;
    sixTextBox.value = battingSixes;
});

ballTwo.addEventListener('click', ()=> {
    // battingBallsPlayed = parseInt(battingBallsPlayed);
    battingRuns = battingRuns+2;
    RunTextBox.value = battingRuns;
});

ballFour.addEventListener('click', ()=> {
    // battingBallsPlayed = parseInt(battingBallsPlayed);
    battingRuns = battingRuns+4;
    RunTextBox.value = battingRuns;
});

ballSix.addEventListener('click', ()=> {
    // battingBallsPlayed = parseInt(battingBallsPlayed);
    battingRuns = battingRuns+6;
    RunTextBox.value = battingRuns;
});

clear.addEventListener('click', ()=> {
    BallTextBox.value = "";
    battingBallsPlayed = 0;
    RunTextBox.value = "";
    battingRuns = 0;
    fourTextBox.value = "";
    battingFours = 0;
    sixTextBox.value = "";
    battingSixes = 0;
    strikeRate.value = "";
});