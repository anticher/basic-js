import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (date !== undefined) {
    //
    if (Object.getOwnPropertySymbols(date).length !== 0) {
      throw Error('Invalid date!')
    }
    //
    if (typeof date === 'object' && typeof date.getMonth === 'function') {
      let month = date.getMonth() + 1
      if (month < 3 || month === 12) {
        return 'winter'
      } else if (month < 6) {
        return 'spring'
      } else if (month < 9) {
        return 'summer'
      } else {
        return 'autumn'
      }
    } else {
      throw Error('Invalid date!')
    }
  } else {
    return 'Unable to determine the time of year!'
  }
  

}
