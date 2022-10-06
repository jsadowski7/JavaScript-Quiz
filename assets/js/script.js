// Global Variables
var viewHighScoreEl = document.getElementById("view-highscores");
var questionOneEl = document.getElementById("first-question");
var questionTwoEl = document.getElementById("second-question");
var questionThreeEl = document.getElementById("third-question");
var questionFourEl = document.getElementById("fourth-question");
var questionFiveEl = document.getElementById("fifth-question");


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