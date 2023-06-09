/*
 * File           : findTargetIndecies.js
 * Project        : ds_and_algorithm
 * Created Date   : Fr 09 Jun 2023 03:07:06
 * Description    : <<description>>
 *
 *
 * Author         : Tanzim Ahmed
 * Email          : tanzim.ahmed1@g.bracu.ac.bd
 * ----------------------
 * Last Modified  : Fri Jun 09 2023
 * Modified By    : Tanzim Ahmed
 * ------------------------
 */
/**
 * 2089. Find Target Indices After Sorting Array

You are given a 0-indexed integer array nums and a target element target.

A target index is an index i such that nums[i] == target.

Return a list of the target indices of nums after sorting nums in non-decreasing order. If there are no target indices, return an empty list. The returned list must be sorted in increasing order.

 

Example 1:

Input: nums = [1,2,5,2,3], target = 2
Output: [1,2]
Explanation: After sorting, nums is [1,2,2,3,5].
The indices where nums[i] == 2 are 1 and 2.
Example 2:

Input: nums = [1,2,5,2,3], target = 3
Output: [3]
Explanation: After sorting, nums is [1,2,2,3,5].
The index where nums[i] == 3 is 3.
Example 3:

Input: nums = [1,2,5,2,3], target = 5
Output: [4]
Explanation: After sorting, nums is [1,2,2,3,5].
The index where nums[i] == 5 is 4.

 * 
 */
const nums = [1, 2, 5, 2, 3];
const target = 2;

function binarySearch(lists, sorted, start, end, target) {
  if (start > end) return;

  const mid = start + Math.floor((end - start) / 2);

  if (sorted[mid] === target) {
    lists.push(mid);
  }

  binarySearch(lists, sorted, start, mid - 1, target);
  binarySearch(lists, sorted, mid + 1, end, target);
}

var targetIndices = function (nums, target) {
  let index = [];
  nums.sort((a, b) => a - b);
  if (!nums.includes(target)) return [];

  binarySearch(index, nums, 0, nums.length - 1, target);
  return index.sort((a, b) => a - b);
};


var targetIndices = function (nums, target) {
  let lownums = (repeat = 0);
  for (i = 0; i < nums.length; i++) {
    if (nums[i] < target) {
      lownums++;
    }
    if (nums[i] == target) {
      repeat++;
    }
  }
  let arr = [];

  if (repeat < 1) {
    return arr;
  } else {
    for (i = 0; i < repeat; i++) {
      arr.push(lownums + i);
    }
    return arr;
  }
};


console.log(targetIndices(nums, target));
