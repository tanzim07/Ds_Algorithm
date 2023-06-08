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

console.log(mySqrt(5))