/*
 * File           : binarysearch.js
 * Project        : searching
 * Created Date   : Sa 19 Nov 2022 09:03:37
 * Description    : <<description>>
 *
 *
 * Author         : Tanzim Ahmed
 * Email          : tanzim.ahmed1@g.bracu.ac.bd
 * ----------------------
 * Last Modified  : Sat Nov 19 2022
 * Modified By    : Tanzim Ahmed
 * ------------------------
 */

// const testArr = [  2, 3, 5, 7, 8, 10, 13, 15, 18, 29, 30, 34, 38, 39, 41, 43, 45, 49, 56, 58, 58];
const testArr = [2, 3, 5, 6, 7, 8, 10];
// 8

// const search = 58;

const x = new Array()
x.push(1)
x.length

function binarySearch(arr, search) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === search) {
      console.log("found at index", mid);
      return mid;
    } else if (search > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  console.log("not found");
  return -1;
}

console.log(binarySearch(testArr, 21));
