console.log ("broad city guessing game");

var words = [
    "abbi", 
    "ilana",
    "jaime",
    "jeremy",
    "lincoln", 
    "bevers", 
    "bedbugs", 
    "witches", 
    "friendiversary",
    "soulstice",
    "val"
];

var wordSelect;
var wordLength;
var underscores = [];
var answer = false;

var wins = 0;
var points;
var lettersGuessed = [];
var UNDERSCORE = " _ ";

var startAudio = new Audio("assets/images/BroadCityOpening.mp3");
// var loseAudio = new Audio("../images/cat meow - sound effect.mp3");
// var winAudio = new Audio("../images/Broad City YAS Supercut.mp3");

function wordDisplay() {
    var display = "";
    for (var i = 0; i < underscores.length; i++) {
        display = display + " " + underscores[i];
    }

    document.querySelector("#word").innerHTML = display;
}

// Function to start game and randomly select word 
function gameStart() {
    startAudio.play();
    wordSelect = words[Math.floor(Math.random() * words.length)];
    wordLength = wordSelect.length;
    underscores = [];
    lettersGuessed = [];
    points = 10;
    document.querySelector("#points").innerHTML = points;
    document.querySelector("#emptyInside").innerHTML = "";
    document.querySelector("#lettersGuessed").innerHTML = lettersGuessed;

    for (var i = 0; i < wordLength; i++) {
        underscores.push(UNDERSCORE);
    }

    wordDisplay();
}

document.onkeyup = function(event) {
    var userGuess = event.key.toLowerCase();

    answer = false;

    if(lettersGuessed.indexOf(userGuess) == -1) {
        lettersGuessed.push(userGuess);
        for (var i = 0; i < wordLength; i++) {
            if  (userGuess === wordSelect.charAt(i)) {
                underscores[i] = userGuess;
                answer = true;
            }
        }
    }

    document.querySelector("#lettersGuessed").innerHTML = lettersGuessed;
    
    if (answer != true) {
        points--;
        console.log(points);
        document.querySelector("#points").innerHTML = points;
    }


    if (underscores.indexOf(UNDERSCORE) == -1 && points > 0) {
        wins++;
        document.querySelector("#wins").innerHTML = wins;
        document.querySelector("#emptyInside").innerHTML = "YAS KWEEN!";
        setTimeout(gameStart, 3000);
        // snd.play(winAudio);
    } else if ((underscores.indexOf(UNDERSCORE) > -1) && (points == 0)) {
        document.querySelector("#emptyInside").innerHTML = "BAD TRIP!";
        setTimeout(gameStart, 3000);
        // snd.play(loseAudio);
    }

    wordDisplay();
}

gameStart();