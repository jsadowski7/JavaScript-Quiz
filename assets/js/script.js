var containerQuestionEl = document.getElementById("question-container");
var containerStartEl = document.getElementById("starter-container");
var containerEndEl = document.getElementById("end-container")
var containerScoreEl = document.getElementById("score-banner")
var formInitials = document.getElementById("initials-form")
var containerHighScoresEl = document.getElementById("high-score-container")
var ViewHighScoreEl = document.getElementById("view-high-scores")
var listHighScoreEl = document.getElementById("high-score-list")
var correctEl = document.getElementById("correct")
var wrongEl = document.getElementById("wrong")
//buttons
var btnStartEl = document.querySelector("#start-game");
var btnGoBackEl = document.querySelector("#go-back")
var btnClearScoresEl = document.querySelector("#clear-high-scores")
//questions/answers element
var questionEl = document.getElementById("question")
var answerButtonsEl = document.getElementById("answer-buttons")
var timerEl = document.querySelector("#timer");
var score = 0;
var timeLeft;
var gameOver
timerEl.innerText = 0;

//High Score Array
var HighScores = [];

 //assign array details for questions 
var arrayShuffledQuestions
var QuestionIndex = 0


// The array of questions for our quiz game.
var questions = [
  { q: 'Which syntax is used for creating an array?', 
    a: '4. []', 
    choices: [{choice: '1. ()'}, {choice: '2. {}'}, {choice: '3. <>'}, {choice: '4. []'}]
  },
  { q: 'Inside which HTML element do we put the javascript?', 
    a: '3. <script>', 
    choices: [{choice: '1. <h1>'}, {choice: '2. <js>'}, {choice: '3. <script>'}, {choice: '4. <head>'}]
  },
  { q: 'What will console.log() return?', 
    a: '1. A message in the Console', 
    choices: [{choice: '1. A message in the Console'}, {choice: '2. Nothing'}, {choice: '3. A message on the webpage'}, {choice: '4. An array'}]
  },
  { q: 'What syntax would call a function?', 
    a: '4. function()', 
    choices: [{choice: '1. var function'}, {choice: '2. function'}, {choice: '3. call function'}, {choice: '4. function()'}]
  },
  { q: '', 
    a: '1. 1995', 
    choices: [{choice: '1. 1995'}, {choice: '2. Roaring twenties'}, {choice: '3. 2005'}, {choice: '4. 2000'}]
  },
  { q: 'What does DOM stand for?', 
    a: '2. Document Object Model', 
    choices: [{choice: '1. Do Overnight Modules'}, {choice: '2. Document Object Model'}, {choice: '3. Divas Obviously Model'}, {choice: '4. Do Oo Mo'}]
  },
  { q: 'What is getItem commonly used for?', 
    a: '2. local storage', 
    choices: [{choice: '1. adding drama'}, {choice: '2. local storage'}, {choice: '3. online shopping'}, {choice: '4. naming a variable'}]
  },
];

  //if go back button is hit on high score page
var renderStartPage = function () {
  containerHighScoresEl.classList.add("hide")
  containerHighScoresEl.classList.remove("show")
  containerStartEl.classList.remove("hide")
  containerStartEl.classList.add("show")
  containerScoreEl.removeChild(containerScoreEl.lastChild)
  QuestionIndex = 0
  gameOver = ""
  timerEl.textContent = 0 
  score = 0

  if (correctEl.className = "show") {
      correctEl.classList.remove("show");
      correctEl.classList.add("hide")
  }
  if (wrongEl.className = "show") {
      wrongEl.classList.remove("show");
      wrongEl.classList.add("hide");
  }
}

var setTime = function () {
  timeLeft = 30;

var timerCheck = setInterval(function() {
  timerEl.innerText = timeLeft;
  timeLeft--

  if (gameOver) {
      clearInterval(timerCheck)
  }
 
  if (timeLeft < 0) {
      showScore()
      timerEl.innerText = 0
      clearInterval(timerCheck)
  }

  }, 1000)
}

var startGame = function() {
  //add classes to show/hide start and quiz screen
  containerStartEl.classList.add('hide');
  containerStartEl.classList.remove('show');
  containerQuestionEl.classList.remove('hide');
  containerQuestionEl.classList.add('show');
  //Shuffle the questions so they show in random order
  arrayShuffledQuestions = questions.sort(() => Math.random() - 0.5)
  setTime()
  setQuestion()
}

var setQuestion = function() {
  resetAnswers()
  displayQuestion(arrayShuffledQuestions[QuestionIndex])
}

var resetAnswers = function() {
  while (answerButtonsEl.firstChild) {
      answerButtonsEl.removeChild(answerButtonsEl.firstChild)
  }
}

//display question information
var displayQuestion = function(index) {
  questionEl.innerText = index.q
  for (var i = 0; i < index.choices.length; i++) {
      var answerButton = document.createElement('button')
      answerButton.innerText = index.choices[i].choice
      answerButton.classList.add('btn')
      answerButton.classList.add('answerbtn')
      answerButton.addEventListener("click", answerCheck)
      answerButtonsEl.appendChild(answerButton)
      }
  };
//display correct on screen
var answerCorrect = function() {
  if (correctEl.className = "hide") {
      correctEl.classList.remove("hide")
      correctEl.classList.add("banner")
      wrongEl.classList.remove("banner")
      wrongEl.classList.add("hide")
      }
  }  
//display wrong on screen
var answerWrong = function() {
  if (wrongEl.className = "hide") {
      wrongEl.classList.remove("hide")
      wrongEl.classList.add("banner")
      correctEl.classList.remove("banner")
      correctEl.classList.add("hide")
  }
}

//check if answer is correct    
var answerCheck = function(event) {
  var selectedAnswer = event.target
      if (arrayShuffledQuestions[QuestionIndex].a === selectedAnswer.innerText){
          answerCorrect()
          score = score + 7
      }

      else {
        answerWrong()
        score = score - 1;
        timeLeft = timeLeft - 3;
    };

  //go to next question, check if there is more questions
    QuestionIndex++
      if  (arrayShuffledQuestions.length > QuestionIndex + 1) {
          setQuestion()
      }   
      else {
         gameOver = "true";
         showScore();
          }
}

  //Display total score screen at end of game
var showScore = function () {
  containerQuestionEl.classList.add("hide");
  containerEndEl.classList.remove("hide");
  containerEndEl.classList.add("show");

  var scoreDisplay = document.createElement("p");
  scoreDisplay.innerText = ("Your final score is " + score + "!");
  containerScoreEl.appendChild(scoreDisplay);
}       

//create high score values
var createHighScore = function(event) { 
  event.preventDefault() 
  var initials = document.querySelector("#initials").value;
  if (!initials) {
    alert("Enter your initials!");
    return;
  }

formInitials.reset();

var HighScore = {
initials: initials,
score: score
} 

//push and sort scores
HighScores.push(HighScore);
HighScores.sort((a, b) => {return b.score-a.score});

while (listHighScoreEl.firstChild) {
 listHighScoreEl.removeChild(listHighScoreEl.firstChild)
}
//create elements in order of high scores
for (var i = 0; i < HighScores.length; i++) {
var highScoreEl = document.createElement("li");
highScoreEl.ClassName = "high-score";
highScoreEl.innerHTML = HighScores[i].initials + " - " + HighScores[i].score;
listHighScoreEl.appendChild(highScoreEl);
}

saveHighScore();
displayHighScores();

}
//save high score
var saveHighScore = function () {
  localStorage.setItem("HighScores", JSON.stringify(HighScores))
      
}

//load values/ called on page load
var loadHighScore = function () {
  var LoadedHighScores = localStorage.getItem("HighScores")
      if (!LoadedHighScores) {
      return false;
  }

  LoadedHighScores = JSON.parse(LoadedHighScores);
  LoadedHighScores.sort((a, b) => {return b.score-a.score})


  for (var i = 0; i < LoadedHighScores.length; i++) {
      var highScoreEl = document.createElement("li");
      highScoreEl.ClassName = "high-score";
      highScoreEl.innerText = LoadedHighScores[i].initials + " - " + LoadedHighScores[i].score;
      listHighScoreEl.appendChild(highScoreEl);

      HighScores.push(LoadedHighScores[i]);
      
  }
}  

var displayHighScores = function() {

  containerHighScoresEl.classList.remove("hide");
  containerHighScoresEl.classList.add("show");
  gameOver = "true"

  if (containerEndEl.className = "show") {
      containerEndEl.classList.remove("show");
      containerEndEl.classList.add("hide");
      }
  if (containerStartEl.className = "show") {
      containerStartEl.classList.remove("show");
      containerStartEl.classList.add("hide");
      }
      
  if (containerQuestionEl.className = "show") {
      containerQuestionEl.classList.remove("show");
      containerQuestionEl.classList.add("hide");
      }

  if (correctEl.className = "show") {
      correctEl.classList.remove("show");
      correctEl.classList.add("hide");
  }

  if (wrongEl.className = "show") {
      wrongEl.classList.remove("show");
      wrongEl.classList.add("hide");
      }
  
}
//clears high scores
var clearScores = function () {
  HighScores = [];

  while (listHighScoreEl.firstChild) {
      listHighScoreEl.removeChild(listHighScoreEl.firstChild);
  }

  localStorage.clear(HighScores);

} 

loadHighScore()
  
//on start click, start game
btnStartEl.addEventListener("click", startGame)
//on submit button -- enter or click
formInitials.addEventListener("submit", createHighScore)
//when view high-scores is clicked
ViewHighScoreEl.addEventListener("click", displayHighScores)
//Go back button
btnGoBackEl.addEventListener("click", renderStartPage)
//clear scores button
btnClearScoresEl.addEventListener("click", clearScores)