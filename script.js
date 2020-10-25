const entrance = document.getElementById('entrance');
const mainQuiz = document.getElementById('main-quiz');
const questionDisplay = document.getElementById('question');
const answersDisplay = document.getElementById('answers');
const resultsDisplay = document.getElementById('results');
const scoreDisplay = document.getElementById('score-div');
const timerDisplay = document.getElementById('timer-div');

const startButton = document.getElementById('start-btn');

let gameState = 'waiting';
let currentQuestion = 0;
let score = 0;
let timeRemaining = 45;
let initials;

function handleCorrect (index) {
  score += 1;
  scoreDisplay.innerHTML = score.toString();
  console.log('hooray');
  displayQuestion(index);
}

function handleIncorrect (index) {
  timeRemaining -= 5;
  console.log('nope');
  displayQuestion(index);
}

function displayResult () {
  initials = prompt('Please enter your ititials.')
  mainQuiz.style.visibility = 'hidden';
  resultsDisplay.style.visibility = 'visible';
  resultsDisplay.innerHTML = `
    <h1>GAME OVER</h1>
    <h3>${initials} Score: ${score}</h3>
  `;
  localStorage.setItem(initials, score);
}

function displayQuestion (index) {
  if (index === questions.length) {
    return displayResult();
  }
  question.innerHTML = questions[index].question;
  answersHTML = '';
  for (let answerText of questions[index].answers) {
    answersHTML += `
      <li><button class="answer-button padded-button">${answerText}</button></li>
    `;
  }
  answersDisplay.innerHTML = answersHTML;
  document.querySelectorAll('.answer-button').forEach((button, i) => {
    if (i === questions[index].correctAnswer) {
      button.addEventListener('click', () => {
        handleCorrect(index + 1);
      })
    } else {
      button.addEventListener('click', () => {
        handleIncorrect(index + 1);
      })
    }
  });
}

startButton.addEventListener('click', () => {
  gameState = 'active';
  entrance.style.visibility = 'hidden';
  mainQuiz.style.visibility = 'visible';
  scoreDisplay.innerHTML = score.toString();
  timerDisplay.innerHTML = timeRemaining.toString();
  displayQuestion(0);
  var x =0;
  let refreshId = setInterval(function() {
    timeRemaining -= 1;
    timerDisplay.innerHTML = timeRemaining.toString();
    if (timeRemaining === 0 && x===0) {
      displayResult();
      clearInterval(refreshId);
    }

  }, 1000);
  x++;
});

correctAnswers = 0;
var questions = [
  { 
    question: 'JSON stands for JavaScript Object Notation.',
    answers: ['True', 'False'],
    correctAnswer: 0 
  },
  { 
    question: 'Local variables are variables declared in a function that cannot be directly accessed outside of that function.',
    answers: ['True', 'False'],
    correctAnswer: 0
  },
  { 
    question: 'An if statement must always have an else statement.',
    answers: ['True', 'False'],
    correctAnswer: 1
  }
];
