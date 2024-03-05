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
let score = 0;

const checkAnswer = (selectedOption) => {
    const correctOption = questions[0].correctAnswer;
    return correctOption === selectedOption;
}

const loadQuestion = () => {
    const currentQuestion = questions[0];
    const options = currentQuestion.options;
    question.innerText = currentQuestion.question;

    options.forEach((option, index) => {
        // create a button
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", (event) => {
            const isCorrect = checkAnswer(event.target.innerText);

            if (isCorrect === true) {
                alert("correct answer!");
                score++;
                console.log(score)
            } else {
                alert(`incorrect. correct answer is ${currentQuestion.correctAnswer}`)
            }

        })
        optionsDiv.appendChild(button);
    })
}


loadQuestion();


// const event = {
//     prop1 : "value",
//     prop2 : null,
//     target : {
//         name: "button",
//         innerText: "paris"
//     }
// }

// console.log(event.target.innerText)