import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  constructor(modification) {
    if (modification === false) {
      this.modification = 'reverse'
    } else {
      this.modification = 'straight'
    }
  }
  encrypt(word, key) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (word === undefined || key === undefined) {
      throw Error('Incorrect arguments!')
    }
    key = key.repeat(Math.ceil(word.length / key.length))
    let start = 'A'.charCodeAt(0)
    let alphaLength = 26
    key = key.toUpperCase()
    word = word.toUpperCase()
    let wordArr = word.split('')
    let resultArr = []
    let spaces = 0
    let re = new RegExp('[A-Z]')
    wordArr.forEach((element, index) => {
      if (element === ' ' || !re.test(element)) {
        resultArr.push(element)
        spaces++
      } else {
        let letterIndex = element.charCodeAt(0) - start
        let shift = key[index - spaces].charCodeAt(0) - start
        console.log(key[index])
        console.log(key)
        resultArr.push(String.fromCharCode(start + (letterIndex + shift + alphaLength) % alphaLength))
      }
    })
    if (this.modification === 'reverse') {
      resultArr.reverse()
    }
    return resultArr.join('')
  }
  decrypt(word, key) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (word === undefined || key === undefined) {
      throw Error('Incorrect arguments!')
    }
    if (key.length < word.length) {
      key = key.repeat(Math.ceil(word.length / key.length))
    }
    let start = 'A'.charCodeAt(0)
    let alphaLength = 26
    key = key.toUpperCase()
    word = word.toUpperCase()
    let wordArr = word.split('')
    let resultArr = []
    let spaces = 0
    let re = new RegExp('[A-Z]')
    wordArr.forEach((element, index) => {
      if (element === ' ' || !re.test(element))  {
        resultArr.push(element)
        spaces++
      } else {
        let letterIndex = element.charCodeAt(0) - start
        let shift = key[index - spaces].charCodeAt(0) - start
        resultArr.push(String.fromCharCode(start + (letterIndex - shift + alphaLength) % alphaLength))
      }
    })
    if (this.modification === 'reverse') {
      resultArr.reverse()
    }
    return resultArr.join('')
  }
}

