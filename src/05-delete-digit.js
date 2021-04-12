/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = n.toString();
  for (let i = 0; i < str.length - 1; i++) {
    if (Number(str[i]) < Number(str[i + 1])) {
      return Number(str.slice(0, i) + str.slice(i + 1, str.length));
    }
  }
  return Number(str.slice(0, str.length - 1));
}

module.exports = deleteDigit;
