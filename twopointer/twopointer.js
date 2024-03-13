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

// const numbers = [1, 12, 2, 7, 5, 3, 9];
// const expectedNumbers = [9, 3, 5, 7, 2, 12, 1];
// // const newNumbers = [...numbers]; // Copy the original array
// const newNumbers = []; // Copy the original array

// for (let i = 0; i < numbers.length / 2; i++) {
//   const temp = newNumbers[i];
//   newNumbers[i] = newNumbers[numbers.length - 1 - i];
//   newNumbers[numbers.length - 1 - i] = temp;
// }

// for (
//   let i = 0, j = numbers.length - 1;
//   i < numbers.length - 1 && j >= 0;
//   i++, j--
// ) {
//   newNumbers[i] = numbers[j];
//   newNumbers[j] = numbers[i];
// }

// // swap two number

// let a = 10;
// let b = 20;

// a = a + b; //30
// b = a - b; //10
// a = a - b; //20

// // [a, b] = [b, a];

// console.log(a, b);

// console.log(newNumbers);

class palindrom {
  static isPalindrome = function (x) {
    const y = x.toString().split("");
    for (let i = 0; i < y.length / 2; i++) {
      console.log(i);
      if (y[i] !== y[y.length - 1 - i]) {
        return false;
      }
    }
    return true;
  };

  static jsMap = (arr, fn) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      const x = fn(arr[i], i);
      newArr.push(x);
    }
    return newArr;
  };
}

// console.log(palindrom.isPalindrome(11211));
const x = function plusone(n) {
  return n + 1;
};
const y = [1, 2, 3];
// console.log(palindrom.jsMap(y, x));

class targetIndex {
  // static targetIndices = function (nums, target) {
  //   // 1. sort the array
  //   // 2. Check the target is matched if matched return index in an array
  //   const sortNums = nums.sort();
  //   const targetIndex = [];
  //   let start = 0;
  //   let end = sortNums.length - 1;
  //   while (start <= end) {
  //     let mid = Math.floor((start + end) / 2);
  //     if (sortNums[mid] === target) {
  //       while (sortNums[mid] === target) {
  //         targetIndex.push(mid);
  //         console.log("🚀 ~ targetIndex ~ sortNums[mid]:", sortNums[mid]);
  //         console.log("🚀 ~ targetIndex ~ sortNums[mid]:", sortNums[mid+1]);
  //         // if (sortNums[mid] === target) {
  //         //   targetIndex.push(mid);
  //         // } else {
  //         mid--;
  //         // }
  //       }
  //       return targetIndex.sort();
  //     } else if (target > sortNums[mid]) {
  //       start = mid + 1;
  //     } else {
  //       end = mid - 1;
  //     }
  //   }
  //   return [];
  // };
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  static targetIndices = function (nums, target) {
    let resultArr = [];
    if (!nums.includes(target)) return resultArr;

    let sortedArray = nums;
    sortedArray.sort((a, b) => a - b);
    let left = 0;
    let right = sortedArray.length - 1;
    let start = -1;
    let end = -1;

    while (left <= right) {
      let mid = Math.round((right + left) / 2);
      if (sortedArray[mid] === target) {
        start = mid - 1;
        end = mid + 1;
        resultArr.push(mid);
        while (sortedArray[start] === target) {
          resultArr.push(start);
          start -= 1;
        }
        while (sortedArray[end] === target) {
          resultArr.push(end);
          end += 1;
        }
        break;
      } else if (sortedArray[mid] < target) {
        left = mid + 1;
      } else if (sortedArray[mid] > target) {
        right = mid - 1;
      }
    }
    return resultArr.sort((a, b) => a - b);
  };
}
// const nums = [1, 2, 5, 2, 3];
const nums = [100, 1, 100];
const target = 100;

console.log(targetIndex.targetIndices(nums, target));
