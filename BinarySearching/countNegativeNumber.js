/*
 * File           : ss.js
 * Project        : ds_and_algorithm
 * Created Date   : Fr 09 Jun 2023 02:03:59
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

/*
Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.


Example 1:

Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
Output: 8
Explanation: There are 8 negatives number in the matrix.
Example 2:

Input: grid = [[3,2],[1,0]]
Output: 0
*/

const grid = [
  [4, 3, 2, -1],
  [3, 2, 1, -1],
  [1, 1, -1, -2],
  [-1, -1, -2, -3],
];

var countNegatives = function (grid) {
  let negativeCount = 0;
  grid.map((x) => {
    return x.some((y, i) => {
      if (y < 0) {
        negativeCount = negativeCount + (x.length - i);
        return true;
      }
    });
  });
  return negativeCount;
};

// alternative solution 1
var countNegatives = function (grid) {
  return grid.flat().filter((ele) => ele < 0).length;
  // Time Complexity: O(m*n)
  // Space Complexity: O(n)
};


// alternative solution 2
var countNegatives = function (grid) {
  const height = grid.length;
  const width = grid[0].length;
  let r = height - 1;
  let c = 0;
  let res = 0;
  while (r >= 0 && c < width) {
    if (grid[r][c] >= 0) {
      c++;
    } else {
      res += width - c;
      r--;
    }
  }
  return res;
};

// alternative solution 3

var countNegatives = function (grid) {
  let count = 0;
  const cols = grid[0].length;
  for (const row of grid) {
    let left = 0;
    let right = cols - 1;
    while (left <= right) {
      const mid = Math.floor(left + (right - left) / 2);
      if (row[mid] < 0) {
        count += right - mid + 1;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }
  return count;
};

console.log(countNegatives(grid));
