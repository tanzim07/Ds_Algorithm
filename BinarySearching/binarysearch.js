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

/*
704. Binary Search

Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
*/

// const testArr = [  2, 3, 5, 7, 8, 10, 13, 15, 18, 29, 30, 34, 38, 39, 41, 43, 45, 49, 56, 58, 58];
const testArr = [2, 3, 3, 3, 3, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 9, 9, 9, 9, 10];

// 8

// ascending order of array
function binarySearch(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (target > nums[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

console.log(binarySearch(testArr, 5));

// unknown order of array
const dscArr = [12, 11, 9, 7, 3, 1];
function binarySearch2(arr, search) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === search) {
      console.log("found at index", mid);
      return mid;
    } else {
      if (arr[start] <= arr[end]) {
        // 2,4,  6,   8,12,15,19,24,30
        if (search < arr[mid]) {
          end = arr[mid] - 1;
        } else {
          start = mid + 1;
        }
      } else {
        if (search < arr[mid]) {
          start = mid + 1;
        } else {
          end = mid - 1;
        }
      }
    }
  }
  return -1;
}
// return binarySearch(arr, search);
console.log(binarySearch2(dscArr, 7));

// Floor
function floor(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
      while (nums[mid] === target) {
        console.log(mid);
        mid--;
      }
      return nums[mid];
    } else if (target > nums[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

console.log(floor(testArr, 3));

// Ceiling
function ceil(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
      while (nums[mid] === target) {
        console.log(mid);
        mid++;
      }
      return nums[mid];
    } else if (target > nums[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

console.log(ceil(testArr, 3));
