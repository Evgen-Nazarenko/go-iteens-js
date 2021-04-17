"use strict";
//1
const Arr1 = [1, 5, "4", "hello"];
console.log(Arr1[2]);

const Arr2 = [true, 2, {}, ["a"], 222];
console.log(Arr2[2]);

//2

Arr1[4] = 22;

console.log(Arr1);

//3

for (const length of Arr2) {
  console.log(length);
}

//4

const message = "Welcome to Ukraine!";

for (const character of message) {
  console.log(character);
}

console.log(message.indexOf("l"));
//5

const styles = ["Джаз", "Блюз"];

styles.push("Рок-н-ролл");

console.log(styles);

styles.shift("Джаз");
styles.unshift("Реп", "Реггі");

console.log(styles);
