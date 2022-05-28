// Variables
let coin = document.getElementsByClassName("coinToss")[0];
let tokens = document.getElementById("tokens");
let tokens2 = document.getElementById("tokens2");
let image1 = undefined;
let image2 = undefined;

let spinningCoinSound = new Audio("Resources/spinning-coin.mp3");

coin.addEventListener("click", () => {
    let header = document.getElementsByClassName("header")[0];
    header = header.style.boxShadow = "0 0 white";
    let select = document.getElementById('tokens');
    select = select.style.boxShadow = "0 0 white";
    let areaWon = document.getElementsByClassName('areaWon')[0];
    areaWon = areaWon.style.display = "none";
    
    let header2 = document.getElementsByClassName("header")[1];
    header2 = header2.style.boxShadow = "0 0 white";
    let select2 = document.getElementById('tokens2');
    select2 = select2.style.boxShadow = "0 0 white";
    let areaWon2 = document.getElementsByClassName('areaWon')[1];
    areaWon2 = areaWon2.style.display = "none";
    
    let selects = [];
    let player1 = tokens.value;
    let player2 = tokens2.value;

    let index = Math.round(Math.random());
    
    if (player1 === "one") image1 = "cross";
    else if (player1 === "two") image1 = "cancer";
    else if (player1 === "three") image1 = "hashtag";
    else if (player1 === "four") image1 = "moon";
    else if (player1 === "five") image1 = "football";
    else if (player1 === "six") image1 = "bread";
    else if (player1 === "seven") image1 = "tree";
    
    if (player2 === "one") image2 = "circle";
    else if (player2 === "two") image2 = "taurus";
    else if (player2 === "three") image2 = "cinema";
    else if (player2 === "four") image2 = "cheese";
    else if (player2 === "five") image2 = "egg";
    else if (player2 === "six") image2 = "orange";
    else if (player2 === "seven") image2 = "burger";
    
    selects.push(image1);
    selects.push(image2);
    
    spinningCoinSound.play();
    let image = document.getElementsByClassName("coinToss")[0];
    image = image.src = "Resources/spinning.gif";
    
    let coin1 = document.getElementsByClassName('player1coin')[0];
    let coin2 = document.getElementsByClassName('player2coin')[0];
    coin1.style.display = "inline-block";
    coin1.src = `Images/${selects[0]}.png`;
    coin2.src = `Images/${selects[1]}.png`;
    coin2.style.display = "inline-block";
    coin1.style.boxShadow = "0 0 gray";
    coin2.style.boxShadow = "0 0 gray";

    setTimeout(() => {
        // document.getElementsByClassName("coin")[1].src = `Images/${selects[1]}.png`;
        document.getElementsByClassName("coin")[1].src = `Images/toss.png`;
        if (selects[index] == image1) {
            header = document.getElementsByClassName("header")[0].style.boxShadow = "0 0 10px 10px white";
            select = document.getElementById('tokens').style.boxShadow = "0 0 10px 10px white";
            areaWon = document.getElementsByClassName('areaWon')[0].style.display = "inline-block";
            areaWon = document.getElementsByClassName('areaWon')[0].style.boxShadow = "0 0 10px 10px white";
            coin1 = coin1.style.boxShadow = "0 0 10px 10px gray";
        } else {
            header = document.getElementsByClassName("header")[1].style.boxShadow = "0 0 10px 10px white";
            select = document.getElementById('tokens2').style.boxShadow = "0 0 10px 10px white";
            areaWon = document.getElementsByClassName('areaWon')[1].style.display = "inline-block";
            areaWon = document.getElementsByClassName('areaWon')[1].style.boxShadow = "0 0 10px 10px white";
            coin2 = coin2.style.boxShadow = "0 0 10px 10px gray";
        }
    }, 6000);
});
