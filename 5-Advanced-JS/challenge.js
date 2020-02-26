var Question = function (question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
}

var questionOne = new Question('Do you like javascript is collest', ['Yes', 'No'], 0);
var questionTwo = new Question('Who is teacher?', ['Mark', 'John', 'Heri'], 1);

var arrQuestion = [questionOne, questionTwo];
var random, score = 0;
// Question.prototype.randomQuestion = function() {
//     var random = Math.random() * 10;
//     if(random > 5) {
//         console.log(arrQuestion[1].question + '\n' + '0: Yes' + '\n' +'1: No');
//     }
// }

// (function () {
//     random = Math.floor(Math.random() * 2) ;
//     console.log(arrQuestion[random].question + '\n' );
//     for(var i =0 ; i < arrQuestion[random].answers.length; i++) {
//         console.log(i + ': ' + arrQuestion[random].answers[i] + '\n');
//     }
// })();

function randomQuestion() {
    random = Math.floor(Math.random() * 2);
    console.log(arrQuestion[random].question + '\n');
    for (var i = 0; i < arrQuestion[random].answers.length; i++) {
        console.log(i + ': ' + arrQuestion[random].answers[i] + '\n');
    }
}
randomQuestion();
(function openPrompt() {
    var correctAnswer = window.prompt('Please enter your answer');
    const myTimeout = setTimeout(openPrompt);
    if (correctAnswer !== 'exit') {
        if (parseInt(correctAnswer) === arrQuestion[random].correctAnswer) {
            score += 1
            console.log('Answer is correct!' + '\n');
            console.log('Your current score is : ' + score + '\n');
            console.log('==========================');
        } else {
            console.log('Answer is wrong!');
            console.log('Your current score is : ' + score + '\n');
            console.log('==========================');
        }
        randomQuestion()

    } else if (correctAnswer === 'exit') {
        score = 0;
        clearTimeout(myTimeout);
    }
})()
