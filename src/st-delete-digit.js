import { NotImplementedError } from '../extensions/index.js';

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
export default function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arr = n.toString().split('')
  let minNum = 9
  let minIndex = 9
  arr.forEach((element, index) => {
    if (element <= minNum ) {
      minNum = element
      minIndex = index
    }
  });
  arr.splice(minIndex, 1)
  return +(arr.join(''))
}
