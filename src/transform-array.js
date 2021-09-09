import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(arr)) {
    throw Error(`'arr' parameter must be an instance of the Array!`)
  }
  let newArray = arr.slice()
  let resultArray = []
  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] === '--discard-next') {
      if (i < newArray.length - 1) {
        newArray.splice([i], 2)
        i--
      } else {
        newArray.splice([i], 1)
        i--
      }
    } else if (newArray[i] === '--discard-prev') {
      if (i > 0) {
        resultArray.pop()
        newArray.splice([i], 1)
        i--
      } else {
        newArray.splice([i], 1)
        i--
      }
    } else if (newArray[i] === '--double-next') {
      if (i < newArray.length - 1) {
        resultArray.push(newArray[i + 1])
        resultArray.push(newArray[i + 1])
        newArray.splice([i], 1, i + 1)
        i++
      } else {
        newArray.splice([i], 1)
        i--
      }
    } else if (newArray[i] === '--double-prev') {
      if (i > 0) {
        resultArray.push(resultArray[resultArray.length - 1])
        newArray.splice([i], 1)
        i--
      } else {
        newArray.splice([i], 1)
        i--
      }
    } else {
      resultArray.push(newArray[i])
      newArray.splice([i], 1)
      i--
    }
  }
  return resultArray
}