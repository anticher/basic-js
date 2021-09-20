import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper(matrix) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let result = []
  for (let i = 0; i < matrix.length; i++) {
    let arr = []
    for (let j = 0; j < matrix[i].length; j++) {
      let square = 0
      if (matrix[i - 1] !==undefined && matrix[i - 1][j - 1] !==undefined && matrix[i - 1][j - 1]) {
        square++
        console.log(matrix[i - 1][j - 1])
      }
      if (matrix[i - 1] !==undefined && matrix[i - 1][j]) {
        square++
      }
      if (matrix[i - 1] !==undefined && matrix[i - 1][j + 1] !==undefined && matrix[i - 1][j + 1]) {
        square++
      }
      if (matrix[i][j - 1] !==undefined && matrix[i][j - 1]) {
        square++
      }
      if (matrix[i][j + 1] !==undefined && matrix[i][j + 1]) {
        square++
      }
      if (matrix[i + 1] !==undefined && matrix[i + 1][j - 1] !==undefined && matrix[i + 1][j - 1]) {
        square++
      }
      if (matrix[i + 1] !==undefined && matrix[i + 1][j]) {
        square++
      }
      if (matrix[i + 1] !==undefined && matrix[i + 1][j + 1] !==undefined && matrix[i + 1][j + 1]) {
        square++
      }
      arr.push(square)
    }
    result.push(arr)
  }
  return result
}
