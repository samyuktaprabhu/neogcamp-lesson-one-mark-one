//importing required libraries
var readlineSync = require('readline-sync');
const chalk = require('chalk');
var userName = readlineSync.question("Hello there! What is your beautiful name? ");
console.log("Hello " + chalk.bold.yellowBright(userName));

console.log("");
console.log(chalk.blackBright.bgWhiteBright.bold("Welcome to 'Do you know Samyuktha?'"));
console.log("");

var score = 0;

// storing scores
var scores = [
  {
    name: "Samyuktha",
    highScore: "5"
  },
  {
    name: "Gautham",
    highScore: "2"
  }
]

// array of objects with questions and answers
var questions = [
  { question: "What is Samyuktha's astrological sign?", answer: "Leo" },
  { question: "Which is Samyuktha's favourite pet?", answer: "Cat" },
  { question: "On what day was Samyuktha born?", answer: "Thursday" },
  { question: "What is Samyuktha's favourite colour?", answer: "Black" },
  { question: "Which is Samyuktha's favourite hair salon?", answer: "Lakme" },
  { question: "On what date was Samyuktha born?", answer: "13" }];

// Ask questions and check for answers
for (i = 0; i < questions.length; i++) {
  var userAns = readlineSync.question(questions[i].question);
  if (userAns.toLowerCase() === questions[i].answer.toLowerCase()) {
    console.log(chalk.green("Correct!!"));
    score = score + 1;
    console.log("Score :" + score);
    console.log("");
  }
  else {
    console.log(chalk.red("Incorrect :( "));
    score = score - 1;
    console.log("Score :" + score);
    console.log("");
  }
}
console.log("");

// display highscore
console.log("High Scores are:");

// function to get highest score
function getHighestScore() {
  var highestScore = 0;
  for (i = 0; i < scores.length; i++) {
    console.log(scores[i].name + " : " + scores[i].highScore);
    highestScore = (scores[i].highScore > highestScore) ? scores[i].highScore : highestScore;
  }
  return highestScore;
}

// display player's score
var highestScore = getHighestScore();
console.log("");
console.log("Your Score :" + score + "");
console.log("");

// display result
if (score > highestScore) {
  console.log(chalk.green("Congratulations! You are on top of the leaderboard!! Kindly send a screenshot of the scores to the admin and they can update the leaderboard!"));

}
else if (score > 0) {
  console.log(chalk.green("Congratulations! You did a great job!"));
}
else {
  console.log(chalk.blue("Better luck next time!"));
}

