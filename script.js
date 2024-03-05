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

const loadQuestion = () => {
    const currentQuestion = questions[0];
    const options = currentQuestion.options;
    question.innerText = currentQuestion.question;

    options.forEach((option, index) => {
        // create a button
        const button = document.createElement("button");
        button.textContent = option;
        optionsDiv.appendChild(button);
    })
}

loadQuestion();