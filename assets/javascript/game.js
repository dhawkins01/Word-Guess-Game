// Global Variables..............

// Array that will hold all the possible words

var produce = [ "banana", "apple", "avocado", "orange", "grape", "strawbery", "peach", "potato", "celery", "carrot", "onion" ];

// set my counters
var wins = 0;
var guesses = 20;

// pick a random word from the produce array
var word = produce[Math.floor(Math.random() * produce.length)];
console.log(word);

// this array will show how many letters are in the word using underscores
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}





