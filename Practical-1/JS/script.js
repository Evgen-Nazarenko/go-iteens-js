"use strict";

console.log("-----------------  1  ----------------------");

//1
const Arr1 = [1, 5, "4", "hello"];
console.log(Arr1[1]);

const Arr2 = [true, 2, {}, ["a"], 222];
console.log(Arr2[1]);

console.log(Arr1[1] + Arr2[1]);
//2
console.log("-------------------  2  --------------------");

Arr1[4] = 22;

console.log(Arr1);

//3
console.log("-------------------  3  --------------------");

for (const arr of Arr2) {
  console.log(arr);
}

//4
console.log("--------------------  4  --------------------");

const message = "Welcome to Ukraine!";

console.log(message.split(""));

console.log(message.indexOf("l"));

//5
console.log("------------------------  5  -----------------------");

const styles = ["Джаз", "Блюз"];

styles.push("Рок-н-ролл");
console.log(styles);

const splice = styles.splice(1, 1, "Класика");
console.log(styles);

styles.shift("Джаз");
console.log(styles);

styles.unshift("Реп", "Реггі");
console.log(styles);
