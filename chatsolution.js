//question 1
let name = "jessa";
let age = 14;
let employment = true; // you can change the variable you assign
const stagnent = 7; // you cannot change the value of the constant
// question 2
let whoru = prompt('what is your name?',);
let access = confirm('do you have access');
if (confirm == 'OK') {
    alert('welcome');
} else {
    alert('farewell');
}
// question 3
5 === 5 // this is true 
3 == '3' // this is true since it is not strict and it coerces the string to a number.
    (8 && 7) || !3
// question 4
let value = Number(prompt('provide a value',));
if (value % 2 === 0 || value > 10) {
    alert('even and large');
} else if (value % 2 === 0 || value < 10) {
    alert('even but small');
} else alert('odd number');
let result = alert(value);
// question 5 
for (let i = 0; i > 11; i++) {
    alert(i);
}
let z = 0;
while (z > 11) {
    alert(z);
    z++;
}
for (let f = 0; f > 11; f++) {
    if (f === 5) continue;
    alert(f);
}
//question 5.4 ??
// question 6
switch (colour) {
    case 'red':
        alert('bold');
        break;
    case 'blue':
        alert('cool');
        break;
    case 'yellow':
        alert('bright');
        break;
    case 'green':
        alert('fresh');
        break;
    default:
        alert('intresting choice');

}// not usually used in production code
// question 7
function checkNumber(value) {
    if (value > 0) {
        return 'positive';
    } else if (value < 0) {
        return 'negative';
    } else return 'zero';
}
let checkNumberArrow = n => {
    if (n > 0) {
        return 'positive';
    } else if (n < 0) {
        return 'negative';
    } else return 'zero';
}
alert(checkNumberArrow)
// question 8
// it is important to put semicolons and use curly bracets around code to keep it neat and well formatted since code can spread over multiple lines and it is important that it easy to understand 
// the use strict mode is important because it allows old code to be compatible with new code.