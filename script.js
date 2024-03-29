const questions = [
    {
        question: "What is the capital of France?",
        options: ["Bangladesh", "London", "Paris", "Madrid"],
        correctAnswer: "Paris"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Jupiter"
    },
    // Add more questions as needed
];

const question = document.getElementById("question");
const optionsDiv = document.getElementById("options");
const quizeContainer = document.getElementById("quiz-container");
// add result container and paragraph
const resultContainer = document.getElementById("result-container");
const resultParagraph = document.getElementById("result");


let score = 0;
let currentQuestionIndex = 0;


const checkAnswer = (selectedOption) => {
    const currentQuestion = questions[currentQuestionIndex];
    const correctOption = currentQuestion.correctAnswer;

    if (correctOption === selectedOption) {
        alert("correct answer!");
        score++;
    } else {
        alert(`incorrect. correct answer is ${currentQuestion.correctAnswer}`)
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        alert("quize complete");

        // hide quize container
        quizeContainer.style.display = "none";

        // display result container
        resultContainer.style.display = "block";
        
        // display score
        resultParagraph.innerText = `Your Score is: ${score}!`;

        // style score paragraph
        resultParagraph.style.backgroundColor = "#8a2be2";
        resultContainer.style.padding = "20px";


    }

}

const loadQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];

    const options = currentQuestion.options;
    question.innerText = currentQuestion.question;
    optionsDiv.innerHTML = '';

    options.forEach((option, index) => {
        // create a button
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", (event) => {
            checkAnswer(event.target.innerText);


        })
        optionsDiv.appendChild(button);
    })
}


loadQuestion();
