/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = '';
  let k = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      if (k === 1) res += str[i];
      else res += k + str[i];
      k = 1;
    }
    if (str[i] === str[i + 1]) k += 1;
  }
  return res;
}

module.exports = encodeLine;
