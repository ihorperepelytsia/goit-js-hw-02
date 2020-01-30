"use strict";

let input;
const numbers = [];
let total = 0;

do {
  input = prompt(`Введите число.`);
  if (input !== null) {
    numbers.push(+input);
  }
} while (input !== null);

if (numbers.length) {
  for (let number of numbers) {
    total += number;
  }
} else {
  console.log(`Вы не ввели, ни одного числа`);
}

console.log(`Общая сумма чисел равна ${total}`);
