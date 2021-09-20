import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
export default function getSumOfDigits(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (n > 9) {
    let arr = n.toString(10).split('').map(int => parseInt(int, 10))
    let m = 0
    arr.forEach(element => {
      m += element
    })
    let result = getSumOfDigits(m)
    return result
  }
  if (n < 10) {
    return n
  }
}
