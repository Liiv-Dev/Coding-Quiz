let quizDisplay = document.querySelector(".quiz-container")
let questionElement = document.getElementById("question");
let answerButton = document.querySelector(".answer-links");
let nextButton = document.getElementById("next-btn");
let startButton = document.querySelector("#start-btn")
let questionBtn = document.getElementsByClassName(".btn")
let timeElement = document.querySelector(".timer")

//Varible set to hold questions and answers for game
let questions = [

{
    //question1
    question: "Who plays Jack Dawson in Titanic (1997)?",

    //Holds answers for question
    answers: [
        {text: "Tom Cruise", correct: false},
        {text: "Leonardo DiCaprio", correct: true},
        {text: "Tom Hanks", correct: false},
        {text: "George Clooney", correct: false}
    ]
 }, {
    //qustion2
    question: "Who plays Jack Dawson in Titanic (1998)?",

    //Holds answers for question
    answers: [
        {text: "Tom Cruise", correct: false},
        {text: "Leonardo DiCaprio", correct: true},
        {text: "Tom Hanks", correct: false},
        {text: "George Clooney", correct: false}
    ]
 }, {
    //qustion2
    question: "Who plays Jack Dawson in Titanic (1999)?",

    //Holds answers for question
    answers: [
        {text: "Tom Cruise", correct: false},
        {text: "Leonardo DiCaprio", correct: true},
        {text: "Tom Hanks", correct: false},
        {text: "George Clooney", correct: false}
    ]
 }, {
    //qustion2
    question: "Who plays Jack Dawson in Titanic (2000)?",

    //Holds answers for question
    answers: [
        {text: "Tom Cruise", correct: false},
        {text: "Leonardo DiCaprio", correct: true},
        {text: "Tom Hanks", correct: false},
        {text: "George Clooney", correct: false}
    ]
 }
]

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 60;

  startButton.addEventListener('click', startGame);


//Starting point for questions after clicking start button
function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    timer = setInterval(quizTimer, 1000)
    startButton.style.display = 'none';
    quizDisplay.style.display = 'block';
    displayQuestion()
}

function displayQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = currentQuestion.question; 

    currentQuestion.answers.forEach(answer => {
        let button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });
}

function quizTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        timeElement.textContent = "Time: " + timeLeft + "s";
    } else {
        endGame()
    }
}