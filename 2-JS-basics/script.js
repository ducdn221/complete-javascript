console.log("Hello world!");
/******************************
 * Variable mutation and tyope coercion
 */
var firstName = 'John';
var age = 28;

//Type coercion
// console.log(firstName + ' ' + age);

//Variable mutation
age = 'twenty eight';

/******************************
 * Operator
 */
// var now, ageJohn, ageMark;
// now = 2020;
// ageJohn = 28;
// ageMark = 33;
//Math operator
//Logical operator
var johnOlder = ageJohn < ageMark;

//typeof operator
// console.log(typeof johnOlder);

/******************************
* Operator precedence
*/

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Mutiple operators
var isFullAge = now - yearJohn >= fullAge; //true
// console.log(isFullAge);
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var agerage = (ageJohn + ageMark) / 2;

//Mutiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6 // see Associavity of above link (right-to-left)

// More operators
x *= 2
x++;
x += 10;



/******************************
* CODING CHALLENGE 1
*/

// var massJohn, heightJohn, massMark, heightMark;
// massJohn = 70;
// heightJohn = 1.75;
// massMark = 85;
// heightMark = 1.80;
// //2.
// var bmiJohn = 70/(1.75*2);
// var bmiMark = 85/(1.85*2);
// console.log(bmiJohn,bmiMark);
// //3.
// var isMarkHigher = bmiMark > bmiJohn;
// //4.
// console.log("Is Mark's BMI higher than John's? ", isMarkHigher);

/******************************
* The Ternary Operator and Switch Statements
*/
var firstName = 'John';
var age = 16;

age >=18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.')

/******************************
* Truthy and Falsy values and equality operators
*/

// falsy values: undefined, null , 0 , '', NaN
// truthy values: NOT falsy value
var height;
if(height) {
    console.log('Variable is defined');
}else{console.log('Variable is not defined')}

// Equality operators
// == and ===

/******************************
* CODING CHALLENGE 2
*/
var averageJohn = (89 + 120 +103) / 3;
var averageMike = (116 + 94 + 123) / 3;
var averageMary = (97+134+105) / 3;
// averageJohn > averageMike ? console.log('John\'s team is winner', averageJohn)
//  : console.log('Mike\'s team is winner', averageMike)
// if(averageJohn > averageMike && averageJohn > averageMary) {
//     console.log('John\'s team is winner', averageJohn)
// }else if(averageMike  > averageJohn && averageMike > averageMary)
// {
//     console.log('Mike\'s team is winner', averageMike)
// }else {
//     console.log('Mary\'s team is winner', averageMary)
// }

/******************************
* FUNCTION
*/

function example(argument) {
    reuturn;
}

/******************************
* FUNCTION Statements and Expressions
*/
// function statement
function example() {
    reuturn;
}
// function expression
var whatDoYouDo = function(job, firstName) {

}