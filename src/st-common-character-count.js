import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arr1 = s1.split('')
  let arr2 = s2.split('')
  let result = 0
  let ignoreArr = []
  arr1.forEach(item => {
    let index2 = arr2.findIndex(element => element === item)
    if (index2 > -1) {
      result++
      arr2.splice(index2, 1)
    }
  })
  return result
}
