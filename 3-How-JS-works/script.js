///////////////////////////////////////
// Lecture: Hoisting
console.log(calculateAge(1990));
function calculateAge(year) {
    console.log(2016 - year);
}

// console.log(retirement(1958));
var retirement = function(year) {
    console.log(65-(2016-year));
}

//variables

console.log(age);
var age= 23;

function foo() {
    var age = 65;
    console.log(age);
}

foo();
console.log(age);

console.log(window);













///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword









