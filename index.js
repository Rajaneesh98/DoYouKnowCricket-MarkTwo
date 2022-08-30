let readLineSync = require('readline-sync');

let userName = readLineSync.question("What is you're Name? ")

console.log("Welcome ", userName)
console.log("Let's See How well you know Cricket! ")
console.log("-------------")

let score = 0;

let one = {
  question: "How many players are there in a cricket team? ",
  answer: "11",
}
let two = {
  question: "India has won the last world cup in which Year? ",
  answer: "2011",
}
let three = {
  question: "What is the length of a cricket pitch in yards? ",
  answer: "24",
}
let four = {
  question: "Which fast bowler has taken the most test wickets?",
  answer: "Anderson",
}
let five = {
  question: "how many ways a batsmen can get out in cricket? ",
  answer: "11",
}

let quiz = [one, two, three, four, five]

function play(question, answer) {
  let userAnswer = readLineSync.question(question)
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("You are Right! ")
    score++
  } else {
    console.log("Wrong Answer! ")
    score--
  }
}

for (let i = 0; i < quiz.length; i++) {
  que = quiz[i].question
  ans = quiz[i].answer
  play(que, ans)
}

console.log("The Final Score is ", score)