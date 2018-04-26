var words = [
    "al dente dentist", 
    "bed bath and beyond", 
    "bingo bronson", 
    "kirk steele", 
    "natures pocket", 
    "worldwide bloodstream",
    "soulstice",
    "val"
];

var wordSelect;
var underscores = [];
var answer;

var wins = 0;
var points = 10;
var lettersGuessed = [];


// Function to start game and randomly select word 
function gameStart() {
    wordSelect = words[Math.floor(Math.random() * words.length)];
    var wordLength = wordSelect.length;

    for (var i = 0; i < wordLength; i++) {
        underscores.push("__ ");
    }
}

document.onkeyup = function(event) {
    var userGuess = event.key.toLowerCase();

    lettersGuessed.push(userGuess);

    answer = false;

    for (var i = 0; i < wordLength; i++) {
        if  (userGuess === wordSelect.charAt(i)) {
            underscores[i] = userGuess;
            answer = true;
        }
    }
    
    if (answer != true) {
        points--;
    }

    if (underscores = 0 && points > 0) {
        wins++;
        document.querySelector("#win").innerHTML = "YAS KWEEN!";
    } else ((underscores > 0) && (points = 0)); {
        document.querySelector("#lose").innerHTML = "BAD TRIP!";
    }

}
