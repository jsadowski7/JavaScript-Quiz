// Global Variables
var viewHighScoreEl = document.getElementById("view-highscores");
var btnStart = document.getElementById("start-game");


var questionOneEl = document.getElementById("first-question");
var questionTwoEl = document.getElementById("second-question");
var questionThreeEl = document.getElementById("third-question");
var questionFourEl = document.getElementById("fourth-question");
var questionFiveEl = document.getElementById("fifth-question");

var timer;
var timerCount;
var timeEl = document.querySelector(".timer-count");


// Function to start Quiz
function startQuiz() {
    timerCount = 30;
    btnStart.disabled = true;
    startTimer()
}

// Function for Timer
function startTimer() {
  timer = setInterval(function() {
    timerCount--;
    timeEl.textContent = timerCount;
    if (timerCount >= 0) {
        clearInterval(timer);
    }
  }, 1000);
}

// Array of questions for the quiz
var questions = [
    {
        question: "Question 1",
        answers: {
            A: '1',
            B: '2',
            C: '3',
            D: '4'
        },
        correctAnswer: 'A'
    },
    {
        question: "Question 2",
        answers: {
            A: '1',
            B: '2',
            C: '3',
            D: '4'
        },
        correctAnswer: 'B'
    },
    {
        question: "Question 3",
        answers: {
            A: '1',
            B: '2',
            C: '3',
            D: '4'
        },
        correctAnswer: 'C'
    },
    {
        question: "Question 4",
        answers: {
            A: '1',
            B: '2',
            C: '3',
            D: '4'
        },
        correctAnswer: 'D'
    },
    {
        question: "Question 5",
        answers: {
            A: '1',
            B: '2',
            C: '3',
            D: '4'
        },
        correctAnswer: 'D'
    }
];


console.log(questions);