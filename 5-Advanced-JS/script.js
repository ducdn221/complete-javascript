// Function Constructor

// var Person = function(name, yearOfBirth, job){
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//     // this.calcAge = function() {
//     //     console.log(2016 - this.yearOfBirth);
//     // }
// }

// Person.prototype.calcAge = function() {
//     console.log(2016 - this.yearOfBirth);
// }
// var john = new Person('John',1990,'teacher');

// john.calcAge();
// var jane = new Person('Jane',1969,'designer')
// jane.calcAge();
// var mark = new Person('Mark',1980,'retired');
// mark.calcAge();
// console.log(john);
// console.log(mark);
// console.log(jane);
// console.log(Person.prototype);

//Object.create 
// var personProto = {
//     calAge: function() {
//         console.log(this.yearOfBirth);
//     }
// }

// var john = Object.create(personProto);
// john.name = 'John';
// john.yearOfBirth = '1990';
// john.job = 'teacher';

// -----------Primitives vs Object
//------------------Primitives

// var a = 23;
// var b = a;
// a = 33;
// console.log(a);
// console.log(b);

// ---------------Object

// var obj1 = {
//     city: 'Hanoi'
// }

// var obj2 = obj;
// obj1.city = 'HCM';
// console.log(obj1);
// console.log(obj2);

//----------------Function

// var age = 27;
// var obj = {
//     name: 'Jonas',
//     city: 'Lisbon'
// };

// function change(a,b) {
//     a = 30;
//     b.city = 'San fransisco'
// }

// change(age,obj);
// console.log(age);
// console.log(obj)



// ----------------------------- Lecture: Passing function as arguments
// var years = [1994,2002,1999,1995,1993,1992,1969];

// function arrayCalc(arr,fn) {
//     var arrRes = [];
//     for (let i = 0; i < arr.length; i++) {
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// }

// function calcAge(el) {
//     return 2020 - el;
// }

// function isFullAge(el) {
//     return el >= 18;
// }

// function maxHeartRate(el) {
//     if(el >=18 && el <= 81) {
//         return Math.round(206.9 -(0.67*el));
//     }else {
//         return -1;
//     }
// }

// console.log(arrayCalc(years,calcAge));
// var age = arrayCalc(years,calcAge)
// console.log(arrayCalc(age,isFullAge));
// console.log(arrayCalc(age,maxHeartRate));

// ----------------------------- Lecture: IIFE(Immediately Invoked Function Expression)


(function () {
    var score = Math.random() * 10;
    console.log(score > 5);
})();

// ----------------------------- Lecture: Closure

// function retirement(retirementAge) {
//     var a  =' years left until retirement';
//     return function(yearOfBirth) {
//         var age = 2016 - yearOfBirth;
//         console.log((retirementAge - age) + a);
//     }
// }

// var retirementUS = retirement(66);
// retirementUS(1990);

// function interviewQuestion(job) {
//     return function(name) {
//         if(job === 'designer') {
//             console.log(name + ', can you please explain what UX design is?');
//         }else if(job === 'teacher') {
//             console.log('What subject do you teach, ' + name+ '?');
//         }else {
//             console.log('Hello ' + name +', What do you do?' );
//         }
//     }
// }

// var teacherQuestion = interviewQuestion('teacher');
// teacherQuestion('Duc');
// var designerQuestion = interviewQuestion('designer');
// designerQuestion('John');

// ----------------------------- Lecture: Bind,Call,Apply

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function (style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlement! I\'m '
                + this.name + ', I\'m a' + this.job + 'and I\'m ' + this.age + ' years old.')
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up I\'m ' + this.name
                + ', I\'m a' + this.job + 'and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay)
        }
    }
}

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
}

// john.presentation('formal', 'morning');

// john.presentation.call(this,'friendly', 'afternoon');

// john.presentation.apply(emily, ['friendly', 'afternoon']);

// var johnFriendly = john.presentation.bind(john, 'friendly');

// johnFriendly('morning');
// johnFriendly('night');

// var emilyFormal = john.presentation.bind(emily, 'formal');

var years = [1994, 2002, 1999, 1995, 1993, 1992, 1969];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (let i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calcAge(el) {
    return 2020 - el;
}

function isFullAge(limit,el) {
    debugger;
    return el >= limit;
}

var age = arrayCalc(years,calcAge);
console.log(age);
var japanFull = arrayCalc(age, isFullAge.bind(this,20));
console.dir(japanFull);