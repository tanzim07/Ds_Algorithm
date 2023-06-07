/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let val = nums.length; // Default answer when target is greater than all elements

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      val = mid; // Update the answer to the current index
      end = mid - 1;
    }
  }

  return val;
};
const numsArr = [1, 3, 6, 8, 12];
// const numsArr = [1];
const targetVal = 9;

console.log(searchInsert(numsArr, targetVal));
