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
}else {
    alert('farewell');
}
// question 3
5 === 5 // this is true 
3 == '3' // this is true since it is not strict and it coerces the string to a number.
(8 && 7 ) || !3   
// question 4
let value = Number(prompt('provide a value',));
if (value % 2 === 0 || value > 10 ) {
    alert('even and large');
} else if (value % 2 === 0 || value < 10) {
    alert('even but small');
} else alert('odd number');
let result = alert(value)