const quizContainer = document.getElementById('quiz-container');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options');
const submitButton = document.getElementById('submit');

let currentQuestionIndex = 0;
const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        correctAnswer: "Paris"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Jupiter"
    },
    // Add more questions as needed
];

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const optionElement = document.createElement('button');
        optionElement.textContent = option;
        optionElement.addEventListener('click', () => checkAnswer(option));
        optionsContainer.appendChild(optionElement);
    });
}

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
        alert('Correct!');
    } else {
        alert('Incorrect. The correct answer is ' + currentQuestion.correctAnswer);
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        alert('Quiz completed!');
        quizContainer.style.display = 'none';
    }
}

loadQuestion();
