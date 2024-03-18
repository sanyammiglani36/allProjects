const questions = [
    {
        question : "Which is the largest animal in the world?",
        answer : [
            { text : "Shark", correct : false},
            { text :  "Blue Whale", correct : true},
            { text : "Elephant", correct : false},
            { text : "Giraffe" , correct : false},
        ]
    },
    {
       question : "Which is the smallest continent in the world?",
       answer :  [
            { text : "Asia" , correct : false},
            { text : "Australia" , correct : true},
            { text : "Arctic" , correct : false},
            { text : "Africa" , correct : false},
       ] 
    },
    {
        question : "Who is known as  God of cricket?",
        answer : [
            { text : "Virat Kohli" , correct : false},
            { text : "Mahendra Singh Dhoni", correct : false},
            { text : "Sachin Tendulkar", correct : true},
            { text : "Rohit Sharma" , correct : false}, 
        ]
    },
    {
        question : "W  hich is the smalllest state in india?",
        answer : [
            { text : "Mizoram", correct : false},
            { text : "Manipur", correct : false},
            { text : "Tripura" , corrrct : false},
            { text : "Goa" , correct : true},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
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
    questionElement.innerHTML = questionNo+ + " " + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct; 
        }
        button.addEventListener("click",selectAnswer);
    })
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
    }   
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("Correct"); 
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
startQuiz();