// Task 1: if statement- check number if its positive
function checkIfPositive() {
let number = prompt("Enter a number:");
number = Number(number);
if (number > 0) {
    console.log("The number is positive.");
}
}

// Task 2: if else statement- check if a number is even or odd
function checkEvenOrOdd() {
let num = prompt("Enter a number:");
num = Number(num);  // Corrected the variable name
if (num % 2 === 0){
    console.log("This number is even.");
}
else{
    console.log("This number is odd.");
}
}

// Task 3: else if statement-grade students based on marks
function gradeStudent() {
let marks = prompt("Enter your marks (0-100):");
marks = Number(marks);
if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 80) {
    console.log("Grade B");
} else if (marks >= 70) {
    console.log("Grade C");
} else if (marks >= 60) {
    console.log("Grade D");
} else {
    console.log("Grade F");
}
}

// Task 4: switch statement-print the name of the day based on the day number
function printDayOfWeek() {
let dayNumber = prompt("Enter a number between 1 and 7:");
dayNumber = Number(dayNumber);
switch (dayNumber) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid number");
        break;
}
}

// Task 5: for loop-print the first 10 natural numbers
function printFirst10NaturalNumbers() {
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
}

// Task 6: do loop-prompt until number is greater than 100
function promptUntilGreaterThan100() {
let numb;
do {
    numb = prompt("Enter a number greater than 100:");  // Corrected the variable name
    numb = Number(numb);
} while (numb <= 100);
}

// Task 7: do while loop-print numbers from 1 to 5
function printNumbersFrom1To5() {
let i = 1;  // Initialized the variable to 1
do {
    console.log("x is: " + i);  // Corrected to use the variable 'i'
    i++;  // Corrected to increment the variable 'i'
} while (i <= 5);
}

// Task 8: break and continue statement
function printNumbersWithConditions() {
for (let z = 1; z <= 10; z++) {
    if (z % 3 === 0) {
        continue;
    }
    if (z === 7) {
        break;
    }
    console.log(z);
}
}
