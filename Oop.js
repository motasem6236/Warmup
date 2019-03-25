// We have this code from Adding Methods With Closures lecture: 
// Refactor the code as an MakeGame class that shares its methods across different instances.


function randInt(n) {
    return Math.floor(Math.random() * (n + 1));
}

function makeGame(){

  var game = {}
   upper = upperbound;
  rand = randInt(upper);
  counter = 0;
  game.guessMyNumber = guessMyNumber;
  game.giveUp = giveUp;
  game.numOfGuesses = numOfGuesses;
  return game;
}

 var guessMyNumber = function (n){
  counter++;
      if (n > this.upper) {
        return "Out of bounds! Please try a number between 0 and " + this.upperbound + ".";
      } else if (n === this.rand) {
        return "You guessed my number!";
      }
 };

var giveUp = function(){
  return this.rand;
};

var numOfGuesses = function (){
  return this.counter;
}


var oldGame = makeGame()