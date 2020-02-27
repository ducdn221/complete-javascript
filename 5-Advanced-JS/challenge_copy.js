(function() {
    var Question = function (question, answers, correctAnswer) {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }
    
    Question.prototype.displayQuestion=  function() {
        console.log(this.question);
        for(var i = 0; i< this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }
    
    Question.prototype.checkAnswer = function(answer, callback) {
        var sc;
        if(answer === this.correctAnswer) {
            console.log('Correct answer!');
            sc = callback(true);
        }else {
            console.log('Wrong Answer');
            sc = callback(false);
        }
        this.displayScore(sc);
    }
    
    Question.prototype.displayScore =  function(score) {
        console.log('Your current score is: ' + score);
        console.log('==================================');
    }
    var questionOne = new Question('Is JavaScript the coolest programing language in the world', ['Yes', 'No'], 0);
    var questionTwo = new Question('What is the name of this course\'s teacher?', ['Mark', 'John', 'Heri'], 1);
    
    var arrQuestion = [questionOne, questionTwo];
    var random;

    function score() {
        var sc = 0;
        return function(correct) {
            if(correct) {
                sc++;
            }
            return sc;
        }
    }

    var keepScore = score();

    function nextQuestion() {
        random = Math.floor(Math.random() * 2);
        arrQuestion[random].displayQuestion();
        
        var answer = window.prompt('Please select the correct answer');
        

        if(answer !== 'exit'){
            arrQuestion[random].checkAnswer(parseInt(answer), keepScore);
            nextQuestion();
        }
    }
    nextQuestion();
    
})();











// function randomQuestion() {
    
//     console.log(arrQuestion[random].question + '\n');
//     for (var i = 0; i < arrQuestion[random].answers.length; i++) {
//         console.log(i + ': ' + arrQuestion[random].answers[i] + '\n');
//     }
// }
// randomQuestion();
// (function openPrompt() {
//     var correctAnswer = window.prompt('Please enter your answer');
//     const myTimeout = setTimeout(openPrompt);
//     if (correctAnswer !== 'exit') {
//         if (parseInt(correctAnswer) === arrQuestion[random].correctAnswer) {
//             score += 1
//             console.log('Answer is correct!' + '\n');
//             console.log('Your current score is : ' + score + '\n');
//             console.log('==========================');
//         } else {
//             console.log('Answer is wrong!');
//             console.log('Your current score is : ' + score + '\n');
//             console.log('==========================');
//         }
//         randomQuestion()

//     } else if (correctAnswer === 'exit') {
//         score = 0;
//         clearTimeout(myTimeout);
//     }
// })()
