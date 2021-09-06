import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const k = 0.693
/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(sampleActivity) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // if (typeof sampleActivity !== 'string') {
  //   return false
  // } else if (isNaN(parseInt(sampleActivity))) {
  //   return false
  // } else if (sampleActivity === '') {
  //   return false
  // } else if (sampleActivity === undefined) {
  //   return false
  // } else if (sampleActivity === null) {
  //   return false
  // } else if (sampleActivity < 1) {
  //   return false
  // } else if (sampleActivity > 15) {
  //   return false
  // } 
  if (typeof sampleActivity !== 'string' || +sampleActivity < 1 || +sampleActivity > 15 || isNaN(+sampleActivity)) {
    return false
  } else {
    
    let answer = Math.log(MODERN_ACTIVITY / +sampleActivity) / (k / HALF_LIFE_PERIOD)

    return Math.ceil(answer)
  }
}
