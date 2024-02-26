// store questions and answers inside an array
const questions = [
    {
       question: "Which of the following values will decrease as you move left to right in a period of the periodic table?",
       answers: [
        {text: "Atomic radius", correct: true},
        {text: "Electorn affinity ", correct: false},
        {text: "Electornegativity ", correct: false},
        {text: "Atomic number ", correct: false},

       ] 
    },
    {
        question: "Which of these elements has the smallest atomic radius?",
       answers: [
        {text: "Antimony", correct: false},
        {text: "Bismuth ", correct: false},
        {text: "Nitrogen", correct: true},
        {text: "Phosphorus", correct: false},
       ]

    },
    {
        question: "Which of these elements is the most electronegative?",
        answers: [
        {text: "Carbon", correct: false},
        {text: "Boron ", correct: false},
        {text: "Oxygen", correct: false},
        {text: "Fluorine", correct: true},
       ]
    },
    {
        question: "Which of these elements is the most electronegative?",
        answers: [
            {text: "Carbon", correct: false},
            {text: "Boron ", correct: false},
            {text: "Oxygen", correct: false},
            {text: "Fluorine", correct: true},
        ]
    },
    {
        question: "Which of these elements is the least electronegative?",
        answers: [
            {text: "Rubidium", correct: false},
            {text: "Cesium", correct: false},
            {text: "Francium", correct: true},
            {text: "Potassium", correct: false},
        ]
    },
    {
        question: "How many valence electrons does the element oxygen have?",
        answers: [
            {text: "4", correct: false},
            {text: "1", correct: false},
            {text: "3", correct: false},
            {text: "6", correct: true},
        ]
    }
];
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-btn");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn-qs");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;

        }
        button.addEventListener("click", selectAnswer);
    });

}
//after each qst we reset the quiz to get the next one
function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block"
}
function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else {
        showScore();
    }
}
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    } else{
        startQuiz();
    }

});
startQuiz();




