// Lecture: let and const

// ES5

/*function driversLicence5(passedTest) {
    if (passedTest) {
        var firstName = 'john';
        var yearOfBirth = 1990;

    }
    console.log(firstName + '. born in' + yearOfBirth + ', is now officially allowed to drive a car.');

}

driversLicence5(true);

// ES5
function driversLicence5(passedTest) {
    if (passedTest) {
        let firstName = 'john';
        const yearOfBirth = 1990;

    }
    // console.log(firstName + '. born in' + yearOfBirth + ', is now officially allowed to drive a car.');

}

driversLicence5(true);

let i = 23;
for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i);

var i = 23;
for (var i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i);*/

////////////////////////////////////////////
// Lecture: Blocks and IIFEs

//ES6

/*{
    const a =1;
    let b = 2;
    var c = 3;
}
console.log(c);
console.log(a+b);*/

// ES 5

/*(function(){
    var c = 5;
})();

console.log(c);*/

////////////////////////////////////////////
// Lecture: String

/*let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
    return 2016 - year;
}*/

// ES5
// console.log('this is ' + firstName + ' ' + lastName);

//ES6
// console.log(`this is ${firstName} ${lastName}`);

// const n = `${firstName} ${lastName}`;
// console.log(n.startsWith('j'));
// console.log(n.endsWith('Sm'));
// console.log(n.includes('j'));
// console.log(`${firstName} `.repeat(5));

////////////////////////////////////////////
// Lecture: Arrow Function

// ES5

// var box5 = {
//     color: 'green',
//     position: 1,
//     clickMe: function() {
//         var self = this;
//         document.querySelector('.green').addEventListener('click', function() {
//             var str = 'This is box number ' + self.position + ' and it is' + self.color;
//             alert(str);
//         })
//     }
// }

// box5.clickMe();

// ES 6

// var box6 = {
//     color: 'green',
//     position: 1,
//     clickMe: function () {
//         document.querySelector('.green').addEventListener('click', function () {
//             var str = 'This is box number ' + this.position + ' and it is' + this.color;
//             // alert(str);
//         })
//     }
// }

// box6.clickMe();

// var box66 = {
//     color: 'green',
//     position: 1,
//     clickMe: () => {
//         document.querySelector('.green').addEventListener('click', function() {
//             var str = 'This is box number ' + this.position + ' and it is' + this.color;
//             // alert(str);
//         })
//     }
// }

// box66.clickMe();

// function Person(name) {
//     this.name = name;
// }

// ES 5
// Person.prototype.myFriends5 = function (friends) {

//     var arr = friends.map(function(el) {
//         return this.name + ' is friends with ' + el;
//     }.bind(this))
//     console.log(arr);
// }

// var friends = ['Bob', 'Jane', 'Mark'];
// new Person('John').myFriends5(friends);

//ES 6

// Person.prototype.myFriends6 = function (friends) {

//     var arr = friends.map(el =>
//          `${this.name} is friends with  ${el}`
//     )
//     console.log(arr);
// }

// var friends = ['Bob', 'Jane', 'Mark'];
// new Person('John').myFriends6(friends);

////////////////////////////////////////////
// Lecture: Destructuring

// ES5
// var john = ["John", 26];
// var name = john[0];
// var age = john[1];

// ES6
// const [name, age] = ["John", 26];
// console.log(name);
// console.log(age);

// const obj = {
//   firstName: "John",
//   lastName: "Smith"
// };

// const { firstName, lastName } = obj;
// console.log(firstName);
// console.log(lastName);

// const { firstName: a, lastName: b } = obj;
// console.log(a);
// console.log(b);

// function calcAgeRetirement(year) {
//   const age = new Date().getFullYear() - year;
//   return [age, 65 - age];
// }

// const [age2, retirement] = calcAgeRetirement(1990);
// console.log(age, retirement);

////////////////////////////////////////////
// Lecture: Arrays
const boxes = document.querySelectorAll(".box");

//ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur) {
  cur.style.backgroundColor = "dodgerblue";
});

//ES6
const boxesArr6 = Array.from(boxes);
// Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');

//ES5
// for (var i = 0; i < boxesArr5.length; i++) {
//     if(boxesArr5[i].className === 'box') {
//         //continue
//         break;
//     }

//     boxesArr5[i].textContent = 'I changed to blue!';
// }

// ES6
// for(const cur of boxesArr6) {
//     if( cur.className.includes('blue')) {
//         continue;
//     }

//     cur.textContent = 'I Changed to blue!';
// }

// ES5

var ages = [22, 17, 8, 21, 14, 23];

var full = ages.map(function(cur) {
  return cur >= 18;
});
console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

// ES6
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));
