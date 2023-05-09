// data for quiz
const quizData = [];

// assessing the elements
const questionContainer = document.getElementById("question-container");
const startButton = document.getElementById("start-btn");
const quizContainer = document.getElementById("quiz");
const submitButton = document.getElementById("submit-btn");

// some functions
const addQuestionUI = (question, index) => {
};

const questionUIArray = quizData.map((question, index) => {
  return `
    <div class="question">
      <h2>Question ${index + 1}</h2>
      <p>${question.question}</p>
      <ul>
        <li><input type="radio" name="q${index + 1}" />${question.choices[0].text}</li>
        <li><input type="radio" name="q${index + 1}" />${question.choices[1].text}</li>
        <li><input type="radio" name="q${index + 1}" />${question.choices[2].text}</li>
        <li><input type="radio" name="q${index + 1}" />${question.choices[3].text}</li>
      </ul>
    </div>
  `;
});

for (const question of questionUIArray) {
  questionContainer.innerHTML += question;
}

startButton.addEventListener("click", () => {
  quizContainer.style.display = "block";
  submitButton.style.display = "block";
  startButton.style.display = "none"; 
});


