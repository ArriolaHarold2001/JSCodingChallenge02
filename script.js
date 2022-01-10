"use strict";

// VERY EASY: Write a function named min that takes two arguments and returns their minimum.
//VERY EASY CHALLENGE

function min(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}

// EASY: Create an array of students holding their last name, first name, and age with 3 students.
// To validate, please log a greeting with the first name, last name and age of the 2nd student.
// The output should look like "Hello, my name is John Doe and I'm 19 years old."
//EASY CHALLENGE

const studentArray = [
  ["Harold", "Arriola", 20],
  ["Maria", "Sanchez", 30],
  ["Reggie", "ReggiesLastName", 12],
];

console.log(
  `Hello my name is ${studentArray[1][0]} ${studentArray[1][1]} and I'm ${studentArray[1][2]} years old.`
);

// MEDIUM: Create a program that accepts a number (1-12) as input and logs to the console that
// number and its corresponding month. For example: if the user enters the number 3, then it should
// return the month “March.” Alert the user if they enter an invalid number (e.g. less than 1 or greater than 12).
//MEDIUM CHALLENGE

// let month = 12;
let month = Number(prompt("Enter a number from 1-12"));
let monthArray = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

if (month < 1 || month > 12) {
  alert("input a number from 1-12");
}

let result;
let month1;
let i;
for (i = 0; i <= 12; i++) {
  switch (month) {
    case i:
      month = monthArray[i - 1];
      break;
  }
}
alert(month);
// console.log(month);

// HARD: Given the information below for Tom and Jerry.
// Tom - height:  9in   mass: 8 g
// Jerry - height: 10in mass: 45 g
// Compare the BMI (Body Mass Index) of Tom & Jerry using the formula below:
//     BMI = mass / height ^2 = mass / (height * height)
// Store Tom & Jerry’s mass and height as variables.
// Calculate both their BMI’s. Create a Boolean variable containing information about whether Tom has a higher
// BMI than Jerry. Print a string to the console with the variable from step 3
//( e.g. Is Tom’s BMI higher than Jerry’s? false).
//HARD CHALLENGE

const tomHeight = 9;
const tomWeight = 8;
const jerryHeight = 10;
const jerryWeight = 45;
let higherBMI;
// let bmi;

function calcBMI(height, weight) {
  return weight / (height * height);
}

if (calcBMI(tomHeight, tomWeight) > calcBMI(jerryHeight, jerryWeight)) {
  higherBMI = true;
  console.log(`Is Tom’s BMI higher than Jerry’s? ${higherBMI}`);
} else {
  higherBMI = false;
  console.log(`Is Tom’s BMI higher than Jerry’s? ${higherBMI}`);
}
