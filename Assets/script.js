let questionElement = document.getElementById("question");
let answerBtnElement = document.querySelector(".answer-links");
let nextBtnElement = document.getElementById("next-btn");
let startBtn = document.querySelector("#start-btn")

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

/*
function hideButton() {
    document.getElementById('start-btn').style.display = 'block'; 
    this.style.display = 'none'
}

startBtn.addEventListener("click", () => {
    hideButton();
    beginQuiz();
  });
  */

//Starting point for questions after clicking start button
function beginQuiz() {
    currentQuestionIndex = 0;
    score = 0;

    displayQuestion()
}

function displayQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = currentQuestion.question; 

    currentQuestion.answers.forEach(answer => {
        let button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerBtnElement.appendChild(button);
    });
}

beginQuiz();