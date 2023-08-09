/*
 * File           : twopointer.js
 * Project        : ds_and_algorithm
 * Created Date   : We 09 Aug 2023 11:02:14
 * Description    : <<description>>
 *
 *
 * Author         : Tanzim Ahmed
 * Email          : tanzim.ahmed1@g.bracu.ac.bd
 * ----------------------
 * Last Modified  : Wed Aug 09 2023
 * Modified By    : Tanzim Ahmed
 * ------------------------
 */

const numbers = [1, 12, 2, 7, 5, 3, 9];
const expectedNumbers = [9, 3, 5, 7, 2, 12, 1];
// const newNumbers = [...numbers]; // Copy the original array
const newNumbers = []; // Copy the original array

for (let i = 0; i < numbers.length / 2; i++) {
  const temp = newNumbers[i];
  newNumbers[i] = newNumbers[numbers.length - 1 - i];
  newNumbers[numbers.length - 1 - i] = temp;
}

for (
  let i = 0, j = numbers.length - 1;
  i < numbers.length - 1 && j >= 0;
  i++, j--
) {
  newNumbers[i] = numbers[j];
  newNumbers[j] = numbers[i];
}

// swap two number

let a = 10;
let b = 20;

a = a + b; //30
b = a - b; //10
a = a - b; //20

// [a, b] = [b, a];

console.log(a, b);

console.log(newNumbers);
