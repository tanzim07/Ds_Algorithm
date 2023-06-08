/*
 * File           : isBadVersion.js
 * Project        : ds_and_algorithm
 * Created Date   : Th 08 Jun 2023 11:37:12
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


var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    // binary search
    var start = 1,
      end = n;
    while (start < end) {
      var mid = Math.floor(start + (end - start) / 2);
      if (isBadVersion(mid)) {
        end = mid; // look on left side of mid
      } else {
        start = mid + 1; // look on the right side of mid
      }
    }
    return start;
  };
};

console.log(solution(5));