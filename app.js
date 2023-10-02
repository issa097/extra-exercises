//Evaluate each of the following Javascript expressions and show the value
console.log(-9 * 3);
console.log("“value is “" + 50);
console.log(17 % 5);
console.log(5 % 17);
console.log(5 / 10);
console.log(4 == 4);
console.log(4 != 5);
console.log(7 <= 8);
console.log(Math.ceil(8.5), Math.floor(8.5));

// Read a number (using prompt) and display it using alert
let num = prompt("push the number");
alert("num=" + num);

// Q3 : Read in two numbers and display them in ascending order
let x1 = prompt("num1");
let x2 = prompt("num2");
if (x1 < x2) {
  alert(x1 + "<" + x2);
} else {
  alert(x2 + "<" + x1);
}

// Q4: Read in two numbers and display the larger
let c1 = prompt("push the number");
let c2 = prompt("push another number");

if (c1 > c2) {
  alert(c1 + " " + "is larger");
} else {
  alert(c2 + " " + "is larger");
}

// Q5: Read two numbers and display their sum.  What problem did you encounter?
let sum1 = prompt("push the number");
let sum2 = prompt("push another number");

alert("sum=" + (+sum1 + +sum2));

// Q6: If you have a “num” variable,  Your task is to print:
let numbers = prompt("push the number 1-9");
switch (+numbers) {
  case 1:
    alert("ONE");
    break;

  case 2:
    alert("TWO");
    break;

  case 3:
    alert("THREE");
    break;

  case 4:
    alert("FOUR");
    break;

  case 5:
    alert("FIVE");
    break;

  case 6:
    alert("SIX");
    break;

  case 7:
    alert("SEVEN");
    break;

  case 8:
    alert("EIGHT");
    break;

  case 9:
    alert("NINE");
    break;

  default:
    alert("PLEASE TRY AGAIN");
}

// Q7: Use a loop to display the numbers 0 through 5, each in a separate alert window.

for (let i = 0; i < 6; i++) {
  alert(i);
}

// Q8: Use a loop to display the numbers 0 through 5 in a single alert window
let through = " ";
for (let i = 0; i < 6; i++) {
  through += i;
  alert(through);
}
// Q9: Use a loop to display the numbers in the range 0…20 that are multiples of 3.
let range = " ";
for (let i = 0; i < 20; i++) {
  if (i % 3 == 0) {
    range += i;
  }
  alert(range);
}
// Q10: Prompt the user for a number in the range 0…100.  If the number is out of range, display an error message and prompt again until a valid number is entered.  Assume the user enters a number each time
let range2 = prompt("put the number range 0-100");

while (range2 < 0 || range2 > 100) {
  range2 = prompt("erorr");
}

//Q11: Repeat previous exercise, but this time allow for the possibility that the user enters something that is not a number.  Hint: the built in function isNaN(x) returns true if x is not a number.  It returns false if x is a number.  Sort of backwards, but that's what's available.

let nan = window.prompt("Push Something ");
let str1 = "";
let str2 = "";
if (isNaN(nan)) {
  for (let i = nan.length - 1; i >= 0; i--) {
    str1 += nan.charAt(i);
  }
  console.log(true);
} else if (!isNaN(nan)) {
  for (i = nan.length - 1; i >= 0; i--) {
    str2 += nan.charAt(i);
  }
  console.log(false);
}

// Q12: Prompt for an integer, then display the sum of the integers from 0 through the number entered.  For example, if you enter 10, then display 55 which is the sum of   0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10

let number = prompt("put the number range 0-100");

let numbersum = 0;
for (let i = 0; i <= number; i++) {
  numbersum += i;
}
alert(numbersum);

// Q13: Prompt for an integer, then display the average of the integers from 0 through the number entered.  For example, if you enter 10, then display 5 which is the average of   (0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)/11
let prop = prompt("put the number range 0-100");

let ssum = 0;

for (let i = 0; i <= prop; i++) {
  ssum += i;
  console.log(i);
}

let average = ssum / prop;
average = Math.floor(average);
alert(average);
