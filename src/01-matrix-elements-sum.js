/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */

function getMatrixElementsSum(matrix) {
  let yy = 0;
  let res = 0;
  for (let x = 0; x < matrix[yy].length; x++) {
    for (let y = 0; y < matrix.length; y++) {
      yy = y;
      if (matrix[y][x] !== 0) res += matrix[y][x];
      else break;
    }
  }
  return res;
}

module.exports = getMatrixElementsSum;
