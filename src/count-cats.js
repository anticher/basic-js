import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(backyard) {
  // throw new NotImplementedError('Not implemented');
    let answer = 0
    let cat = '^^'
    for(let i = 0; i < backyard.length; i++) {
      backyard[i].forEach(element => element === cat ? answer++ : null);
    }
    return answer
}
