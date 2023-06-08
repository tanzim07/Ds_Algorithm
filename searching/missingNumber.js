/*
 * File           : missingNumber.js
 * Project        : tanzim
 * Created Date   : Th 08 Jun 2023 11:13:58
 * Description    : <<description>>
 *
 *
 * Author         : Tanzim Ahmed
 * Email          : tanzim.ahmed1@g.bracu.ac.bd
 * ----------------------
 * Last Modified  : Thu Jun 08 2023
 * Modified By    : Tanzim Ahmed
 * ------------------------
 */
// Input: nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];
// Output: 8;

const nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];

const missingNumber = function (nums) {
  const n = nums.length;
  const expectedSummation = (n * (n + 1)) / 2; // the rules of summation of n numbers is n(n+1)/2
  let currentSummation = 0;
  for (let i = 0; i < nums.length; i++) {
    currentSummation = currentSummation + nums[i];
  }
  // the missing number is the difference between the expected sum and the actual sum
  return expectedSummation - currentSummation;
};

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
