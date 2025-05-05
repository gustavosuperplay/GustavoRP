const questions = [
    {
        question: "Qual é a capital do Brasil?",
        options: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
        correct: 2
    },
    {
        question: "Qual é o maior planeta do Sistema Solar?",
        options: ["Terra", "Marte", "Júpiter", "Saturno"],
        correct: 2
    },
    {
        question: "Quem pintou a Mona Lisa?",
        options: ["Van Gogh", "Leonardo da Vinci", "Michelangelo", "Pablo Picasso"],
        correct: 1
    },
    {
        question: "Qual é o maior oceano do mundo?",
        options: ["Atlântico", "Índico", "Pacífico", "Ártico"],
        correct: 2
    },
    {
        question: "Em que ano o Brasil foi descoberto?",
        options: ["1500", "1492", "1502", "1498"],
        correct: 0
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");
const totalQuestionsElement = document.getElementById("total-questions");
const restartButton = document.getElementById("restart-btn");
const questionBox = document.getElementById("question-box");

function showQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;
    
    optionsElement.innerHTML = "";
    question.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        button.addEventListener("click", () => selectOption(index));
        optionsElement.appendChild(button);
    });
}

function selectOption(index) {
    const options = optionsElement.children;
    const question = questions[currentQuestion];
    
    for (let option of options) {
        option.disabled = true;
    }
    
    if (index === question.correct) {
        options[index].classList.add("correct");
        score++;
    } else {
        options[index].classList.add("wrong");
        options[question.correct].classList.add("correct");
    }
    
    nextButton.style.display = "block";
}

function showResult() {
    questionBox.style.display = "none";
    nextButton.style.display = "none";
    resultElement.classList.remove("hide");
    scoreElement.textContent = score;
    totalQuestionsElement.textContent = questions.length;
}

nextButton.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
        nextButton.style.display = "none";
    } else {
        showResult();
    }
});

restartButton.addEventListener("click", () => {
    currentQuestion = 0;
    score = 0;
    questionBox.style.display = "block";
    resultElement.classList.add("hide");
    showQuestion();
});

nextButton.style.display = "none";
showQuestion(); 