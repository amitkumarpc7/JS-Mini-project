const questionContainer = document.getElementById("question");
const answersContainer = document.getElementById("answers");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
const timerElement = document.getElementById("time");

let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let timer;

// Fetch questions from the API
fetch("https://opentdb.com/api.php?amount=10&type=multiple")
  .then((response) => response.json())
  .then((data) => {
    questions = data.results;
    displayQuestion(currentQuestionIndex);
    startTimer();
  });

// Display a question
function displayQuestion(index) {
  const question = questions[index];
  questionContainer.textContent = question.question;
  answersContainer.innerHTML = "";
  const answers = [...question.incorrect_answers, question.correct_answer];
  answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer;
    button.onclick = () => selectAnswer(answer, question.correct_answer);
    answersContainer.appendChild(button);
  });
}

// Handle answer selection
function selectAnswer(answer, correctAnswer) {
  if (answer === correctAnswer) score++;
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    displayQuestion(currentQuestionIndex);
  } else {
    endQuiz();
  }
}

// Navigate to the next question
nextButton.onclick = () => {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    displayQuestion(currentQuestionIndex);
  }
};

// Navigate to the previous question
prevButton.onclick = () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    displayQuestion(currentQuestionIndex);
  }
};

// End the quiz
function endQuiz() {
  clearInterval(timer);
  alert(`Quiz ended! Your score is ${score}`);
}

function startTimer(){
    let timeL=60;
    timer=setInterval(()=>{
        timeL--;
        timerElement.textContent=timeL;

        if(timeL<=0){
            endQuiz();
        }

    },1000)
}

// Additional features like local storage, error handling, and styling can be added as needed.
