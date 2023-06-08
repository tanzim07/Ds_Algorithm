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
var targetIndices = function (nums, target) {
    const sortedNums = nums.sort((a, b) => a - b);
                // 1,2,2,3,5  s - 1 e - 5 m - 2
  const targetIndices = [];
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (sortedNums[mid] === target) {
            targetIndices.push(mid);
            break;
      }
      
  }
};

console.log(targetIndices(nums, target));
