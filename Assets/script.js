let quizDisplay = document.querySelector(".quiz-container")
let questionElement = document.getElementById("question");
let answerButton = document.querySelector(".answer-links");
let nextButton = document.getElementById("next-btn");
let startButton = document.querySelector("#start-btn")
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
    question: "Who is Ghostface in the first Scream Movie?",

    //Holds answers for question
    answers: [
        {text: "Tom Cruise", correct: false},
        {text: "Stu Mache", correct: false},
        {text: "Gale Weathers", correct: false},
        {text: "Billy Loomis", correct: true}
    ]
 }, {
    //qustion3
    question: "What movie is premiering in the theaters during the opening scene of Scream 2?",

    //Holds answers for question
    answers: [
        {text: "Ring", correct: false},
        {text: "Texas Chainsaw", correct: false},
        {text: "Stab", correct: true},
        {text: "Halloween", correct: false}
    ]
 }, {
    //qustion4
    question: "Which one of the Legacy Characters dies in the Scream 5?",

    //Holds answers for question
    answers: [
        {text: "Dewey", correct: true},
        {text: "Sydney", correct: false},
        {text: "Gale", correct: false},
        {text: "Neither", correct: false}
    ]
 }
]

let currentQuestionIndex = 0;
let score;
let timer;
let timeLeft = 60;


//event listeners. startButton starts game, nextButton moves to next question
  startButton.addEventListener('click', startGame);
  nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        nextQuestion();
    } else {
        startGame();
    }
  });


//Starting point for questions after clicking start button
function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    timer = setInterval(quizTimer, 1000)
    startButton.style.display = 'none';
    quizDisplay.style.display = 'block';
    displayQuestion()
}

//Sets timer at start of start
function quizTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        timeElement.textContent = `Time: ${timeLeft}s`;
    } else {
        reset()
        startGame()
    }
}

//Displays questions and answers from array 
function displayQuestion() {
    reset();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = currentQuestion.question; 

    currentQuestion.answers.forEach(answer => {
        let button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answer.correct){
            button.dataset.correct = answer.correct;
        }

        //event listener checks if clicked answers are correct or false
        button.addEventListener("click", checkAnswer)
    });
}

//function checks if answers are correct or false, increases score if correct answer is correct, highlights answers
function checkAnswer(selectedAnswer) {
    let selectedBtn = selectedAnswer.target;
    let isCorrect = selectedBtn.dataset.correct === "true";if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++
    } else {
        selectedBtn.classList.add("wrong");
    }
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled = true;
    })
    nextButton.style.display = "block"
}   

//displays next question in array of questions
function nextQuestion() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        displayQuestion()
    } else {
        showScore()
    }
}

//function keeps score
function showScore() {
    reset();
    questionElement.innerHTML = `You scored ${score}/4`;
    nextButton.style.display = 'block'
    nextButton.innerHTML = "Play Again"
}

function reset() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild)
    }
}


