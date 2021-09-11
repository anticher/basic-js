import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, { repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|' }) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

//   let defaults = {
//     'repeatTimes'  :   '',
//     'separator'  :   '+',
//     'addition'  :   '',
//     'additionRepeatTimes'  :   '',
//     'additionSeparator'  :   '|',
// }

// for(let i in defaults) 
//     if(typeof options[i] == "undefined") 
//            options[i] = defaults[i];
let arr =[]
  function check(str) {
    if (typeof str !== 'string') {
      return`${str}`
    }
    return str
  }
    str = check(str)
    addition = check(addition)
  
  for (let i = 0; i < repeatTimes; i++) {
    arr.push(str)
    for (let j = 0; j < additionRepeatTimes; j++) {
      arr.push(addition)
      arr.push(additionSeparator)
      if (j === additionRepeatTimes - 1) {
        arr.pop()
        arr.push(separator)
      }
    }
    if (i === repeatTimes - 1) {
      arr.pop()
    }
  }
  return arr.join('')
}
