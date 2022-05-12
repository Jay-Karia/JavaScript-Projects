// Variable
let battingPlayerName = document.querySelector('.playerName').value;
let battingBallsPlayed = document.querySelector('.balls').value;
let battingRuns = document.querySelector('.runs').value;
let battingFours = document.querySelector('.fours').value;
let battingSixes = document.querySelector('.sixes').value;
let strikeRate = document.querySelector('.sr');

let result = document.querySelector('.result').innerHTML;
let save = document.querySelector('.save');

battingBallsPlayed =  Number(battingBallsPlayed, 10);
battingRuns =  Number(battingRuns, 10);
strikeRate.value =  Number(strikeRate, 1000);
battingFours = Number(battingFours, 10)
battingSixes = Number(battingSixes, 10)

let ballOne = document.querySelector('.ballOne');
let fourTextBox = document.querySelector('.fours');
let sixTextBox = document.querySelector('.sixes');
let BallTextBox = document.querySelector('.balls');

let clear = document.querySelector('.clear');
let calc = document.querySelector('.calc');

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
    result = "";
    document.querySelector('.heading').getElementsByTagName('p')[0].style.width = '0';
    document.querySelector('.heading').getElementsByTagName('p')[0].style.height = '0';
    document.querySelector('.heading').getElementsByTagName('p')[0].style.background = '0)';
    document.querySelector('.heading').getElementsByTagName('p')[0].style.fontSize = "0";
    document.querySelector('.heading').getElementsByTagName('p')[0].innerHTML = result;
});

calc.addEventListener('click', ()=> {
    strikeRate.value = battingRuns/battingBallsPlayed*100;
    if (strikeRate.value >= 200 || battingFours >= 5 || battingSixes >= 4) {
        result = "Excellent";
        document.querySelector('.heading').getElementsByTagName('p')[0].style.width = '190px';
        document.querySelector('.heading').getElementsByTagName('p')[0].style.height = '50px';
        document.querySelector('.heading').getElementsByTagName('p')[0].style.background = 'rgb(118, 255, 118)';
        document.querySelector('.heading').getElementsByTagName('p')[0].style.fontSize = "30px";
        document.querySelector('.heading').getElementsByTagName('p')[0].innerHTML = result;
    } else if (strikeRate.value >= 150 || battingFours >= 3 || battingSixes >= 3) {
        result = "Very Good";
        document.querySelector('.heading').getElementsByTagName('p')[0].style.width = '190px';
        document.querySelector('.heading').getElementsByTagName('p')[0].style.height = '50px';
        document.querySelector('.heading').getElementsByTagName('p')[0].style.background = 'rgb(255, 255, 2)';
        document.querySelector('.heading').getElementsByTagName('p')[0].style.fontSize = "30px";
        document.querySelector('.heading').getElementsByTagName('p')[0].innerHTML = result;
    } else if (strikeRate.value >= 100 || battingFours >= 2 || battingSixes >= 2) {
        result = "Good";
        document.querySelector('.heading').getElementsByTagName('p')[0].style.width = '190px';
        document.querySelector('.heading').getElementsByTagName('p')[0].style.height = '50px';
        document.querySelector('.heading').getElementsByTagName('p')[0].style.background = 'rgb(255, 255, 118)';
        document.querySelector('.heading').getElementsByTagName('p')[0].style.fontSize = "30px";
        document.querySelector('.heading').getElementsByTagName('p')[0].innerHTML = result;
    }  else if (strikeRate.value < 100 || strikeRate.value >=60 || battingFours >= 1 || battingSixes >= 0) {
        result = "Poor";
        document.querySelector('.heading').getElementsByTagName('p')[0].style.width = '190px';
        document.querySelector('.heading').getElementsByTagName('p')[0].style.height = '50px';
        document.querySelector('.heading').getElementsByTagName('p')[0].style.background = 'rgb(252, 127, 3)';
        document.querySelector('.heading').getElementsByTagName('p')[0].style.fontSize = "30px";
        document.querySelector('.heading').getElementsByTagName('p')[0].innerHTML = result;
    }   else if (strikeRate.value < 60 || battingFours >= 1 || battingSixes >= 0) {
        result = "Bad";
        document.querySelector('.heading').getElementsByTagName('p')[0].style.width = '190px';
        document.querySelector('.heading').getElementsByTagName('p')[0].style.height = '50px';
        document.querySelector('.heading').getElementsByTagName('p')[0].style.background = 'rgb(166, 47, 0)';
        document.querySelector('.heading').getElementsByTagName('p')[0].style.fontSize = "30px";
        document.querySelector('.heading').getElementsByTagName('p')[0].innerHTML = result;
    }    else if (strikeRate.value < 30 || battingFours >= 0 || battingSixes >= 0) {
        result = "Very Bad";
        document.querySelector('.heading').getElementsByTagName('p')[0].style.width = '190px';
        document.querySelector('.heading').getElementsByTagName('p')[0].style.height = '50px';
        document.querySelector('.heading').getElementsByTagName('p')[0].style.background = 'rgb(166, 0, 0)';
        document.querySelector('.heading').getElementsByTagName('p')[0].style.fontSize = "30px";
        document.querySelector('.heading').getElementsByTagName('p')[0].innerHTML = result;
    }
});

// Bowling Stats
let bowlingPlayerName = document.querySelector('.bolwPlayerName').value;
let bowlingBalls = document.querySelector('.bowlBalls').value;
let bowlingRunsGiven = document.querySelector('.bowlRuns').value;
let bowlingEconomy = document.querySelector('.economy');
let bowlingWickets = document.querySelector('.wickets').value;
let bowlingHatrick = document.querySelector('.hatrick').value;

bowlingBalls = Number(bowlingBalls, 10);
bowlingRunsGiven = Number(bowlingRunsGiven, 10);
bowlingWickets = Number(bowlingWickets, 10);
bowlingHatrick = Number(bowlingHatrick, 10);
bowlingRunsGiven = Number(bowlingRunsGiven, 10);
bowlingEconomy = Number(bowlingBalls, 100);

let PlayerTextBox = document.querySelector('.bolwPlayerName')
let BallsTextBox = document.querySelector('.bowlBalls');
let BowlingRunsTextBox = document.querySelector('.bowlRuns');
let BowlingEconomyText = document.querySelector('.economy');
let WicketsText = document.querySelector('.wickets');
let hatrickText = document.querySelector('.hatrick');


// Buttons
let onePlusOne = document.querySelector('.onePlusOne');
let onePlusTwo = document.querySelector('.onePlusTwo');
let onePlusThree = document.querySelector('.onePlusThree');
let onePlusFour = document.querySelector('.onePlusFour');
let twoPlus = document.querySelector('.twoPlus');
let sixPlus = document.querySelector('.sixPlus');
let fourPlus = document.querySelector('.fourPlus');

onePlusOne.addEventListener('click', ()=> {
    bowlingBalls = bowlingBalls+1;
    BallsTextBox.value = bowlingBalls;
});

onePlusTwo.addEventListener('click', ()=> {
    bowlingRunsGiven = bowlingRunsGiven+1;
    BowlingRunsTextBox.value = bowlingRunsGiven;
});

onePlusThree.addEventListener('click', ()=> {
    bowlingWickets = bowlingWickets+1;
    WicketsText.value = bowlingWickets;
});

onePlusFour.addEventListener('click', ()=> {
    bowlingHatrick = bowlingHatrick+1;
    hatrickText.value = bowlingHatrick;
});

twoPlus.addEventListener('click', ()=> {
    bowlingRunsGiven = bowlingRunsGiven+2;
    BowlingRunsTextBox.value = bowlingRunsGiven;
});

fourPlus.addEventListener('click', ()=> {
    bowlingRunsGiven = bowlingRunsGiven+4;
    BowlingRunsTextBox.value = bowlingRunsGiven;
});

sixPlus.addEventListener('click', ()=> {
    bowlingRunsGiven = bowlingRunsGiven+6;
    BowlingRunsTextBox.value = bowlingRunsGiven;
});

let ballClear = document.querySelector('.bowlClear');
ballClear.addEventListener('click', ()=> {
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
    // document.querySelector('.heading').getElementsByTagName('p')[0].style.width = '0';
    // document.querySelector('.heading').getElementsByTagName('p')[0].style.height = '0';
    // document.querySelector('.heading').getElementsByTagName('p')[0].style.background = '0';
    // document.querySelector('.heading').getElementsByTagName('p')[0].style.fontSize = "0";
    // document.querySelector('.heading').getElementsByTagName('p')[0].innerHTML = result;
});
