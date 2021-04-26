"use strict";
console.log("============Завдання 1===========");

const hello1 = function () {
  return "Привіт JavaScript";
};

hello1();

console.log("============Завдання 2============");

function hello2(name) {
  console.log("Привіт:", name);
}

hello2(" John");

console.log("============Завдання 3===========");

function mul(n = +prompt("Введіть число."), m = +prompt("Введіть число.")) {
  return `n * m  ${n * m} n + m  ${n + m} n - m  ${n - m}`;
}

console.log(mul());

console.log("============Завдання 4===========");

const myNewArrowFunction = (...rest) => {
  console.log(rest);
};

myNewArrowFunction(1, 2, 3);
myNewArrowFunction(100, 200, 300, 400, 500);
myNewArrowFunction("JS", "Python", "Java", "PHP", "C++");

console.log("============Завдання 5===========");

/// console.log(myAverageScore([100, 75, 81, 96]));
// console.log(myAverageScore([45, 63, 85, 70]));
// console.log(myAverageScore([77, 82, 60, 58]));
// console.log(myAverageScore([93, 99, 93, 96]));

const marks = [0, 100, 100, 100];

//Збір аргументів
const myAverageScore = function (marks) {
  let totalMarks = 0;
  let lastMark;
  for (const total of marks) {
    totalMarks += total;
  }

  lastMark = totalMarks / marks.length;
  console.log(lastMark);
  if (lastMark <= 100 && lastMark >= 91) {
    console.log("My average score: A");
  } else if (lastMark <= 90 && lastMark >= 81) {
    console.log("My average score: B");
  } else if (lastMark <= 80 && lastMark >= 71) {
    console.log("My average score: C");
  } else if (lastMark <= 70) {
    console.log("My average score: D");
  }
};

myAverageScore(marks);
