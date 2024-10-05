"use strict";

//Variables
let userAnswer;
let correctAnswer;
let score = 0;
let questionsAnswered = 0;
let gameComplete = false;

//Questions
//The answer is always the first one
const question1 = ["How many colors are in the rainbow?", "Seven","Five","Eight","Six"];
const question2 = ["Which planet is the hottest in the solar system?", "Venus","Mercury","Saturn","Mars"];
const question3 = ["A dog sweats through which part of it's body?", "Paws","Fur","Ears","Tails"];
const question4 = ["The Olypics are held everyhow many years?", "4 Years","3 Years","2 Years","5 Years"];
const question5 = ["Which Asian country invented fireworks?", "China","Myanmar","Thailand","Indonesia"];

let listOfQuestions = [question1,question2,question3,question4,question5];

function setQuestion(questionProperties)
{
    reArrangeAnswers();
    document.getElementById("question").innerHTML = questionProperties[0];
    document.getElementById("answer1").innerHTML = questionProperties[1];
    document.getElementById("answer2").innerHTML = questionProperties[2];
    document.getElementById("answer3").innerHTML = questionProperties[3];
    document.getElementById("answer4").innerHTML = questionProperties[4];
    document.getElementById("submitButton").classList.add("disableButton");
}

function selectAnswer(event, input)
{
    unSelectAnswers();
    event.style.filter = "brightness(50%)";
    userAnswer = input;
    document.getElementById("submitButton").classList.remove("disableButton");
}

function unSelectAnswers()
{
    let answerButton = document.getElementsByClassName("answer");
    for(let i=0; i< answerButton.length; i++)
    {
        answerButton[i].style.filter = "brightness(100%)";
    }
}

function submitAnswer()
{
    questionsAnswered+=1;
    if(userAnswer === correctAnswer)
    {
        score+=1;

    }
    document.getElementById("scoreText").innerHTML = "Score: "+score.toString()+"/"+questionsAnswered.toString();
    if(gameComplete)
    {
        window.location.reload();

    }
    if(questionsAnswered === 5)
    {
        unSelectAnswers();
        endGame();
    }
    else{
        nextQuestion();
    }
}

function nextQuestion()
{
    unSelectAnswers();
    setQuestion(listOfQuestions[questionsAnswered]);
}

function endGame()
{
    document.getElementById("question").innerHTML = "Game Complete!";
    document.getElementById("answer1").innerHTML = "‎";
    document.getElementById("answer2").innerHTML = "‎";
    document.getElementById("answer3").innerHTML = "‎";
    document.getElementById("answer4").innerHTML = "‎";
    document.getElementById("answer1").classList.remove("hoverable");
    document.getElementById("answer2").classList.remove("hoverable");
    document.getElementById("answer3").classList.remove("hoverable");
    document.getElementById("answer4").classList.remove("hoverable");
    document.getElementById("submitButton").innerHTML = "Restart";
    gameComplete = true;

}
function reArrangeAnswers(){
    let questionPositions = [1,2,3,4];
    let newPositions = [];
    let question = listOfQuestions[questionsAnswered];
    let answer1 = question[1];
    let answer2 = question[2];
    let answer3 = question[3];
    let answer4 = question[4];
    let randomPosition;

    for(let i = 0; i<4; i++)
    {
        randomPosition = questionPositions[Math.floor(Math.random()*questionPositions.length)];
        newPositions[i] = randomPosition;
        questionPositions.splice(questionPositions.indexOf(randomPosition),1);
    }

    question[newPositions[0]] = answer1;
    question[newPositions[1]] = answer2;
    question[newPositions[2]] = answer3;
    question[newPositions[3]] = answer4;

    switch(newPositions[0])
    {
        case 1:
            correctAnswer = "A";
            break;
        case 2:
            correctAnswer = "B";
            break;
        case 3:
            correctAnswer = "C";
            break;
        case 4:
            correctAnswer = "D";
            break;
    }
}
