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

var box6 = {
    color: 'green',
    position: 1,
    clickMe: function () {
        document.querySelector('.green').addEventListener('click', function () {
            var str = 'This is box number ' + this.position + ' and it is' + this.color;
            // alert(str);
        })
    }
}

box6.clickMe();

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

function Person(name) {
    this.name = name;
}

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

Person.prototype.myFriends6 = function (friends) {

    var arr = friends.map(el => 
         `${this.name} is friends with  ${el}`
    )
    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends6(friends);