/*
 * File           : sqrt.js
 * Project        : tanzim
 * Created Date   : Th 08 Jun 2023 02:22:20
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

/**
/*
69. Sqrt(x)

Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 
Example 1:

Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.
Example 2:

Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.

*/

var mySqrt = function (x) {
  if (x === 0) {
    return 0;
  }

  let left = 1;
  let right = x;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let sqrt = mid * mid;

    if (sqrt === x) {
      return mid;
    } else if (sqrt < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return right; // Return the floor value of the square root
};

console.log(mySqrt(5));
