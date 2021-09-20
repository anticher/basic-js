import { NotImplementedError } from '../extensions/index.js';

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
export default function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arr = str.split('')
  let counter = 0
  let letter = ''
  let resultArr = []
  arr.forEach(item => {
    if (item === letter) {
      counter++
    } else {
      resultArr.push(counter === 1 ? '' : counter)
      resultArr.push(letter)
      counter = 1
      letter = item
    }
  })
  resultArr.push(counter === 1 ? '' : counter)
  resultArr.push(letter)
  resultArr.shift()
  return resultArr.join('')
}
