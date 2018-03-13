import { getArrayOfColumns } from './../js/sudoku.js';
import { isValid } from './../js/sudoku.js';

describe('Sudoku', function() {

  // it('should create an array of numbers in given range', function() {
  //   var sudoku = new Sudoku(3);
  //   var optArr = sudoku.getArr();
  //   expect(optArr).toEqual([1, 2, 3]);
  // });
  it('slices the sudoku rows array into columns', function() {
    var sudokuArrayOfRows = [[6,3,9,5,7,4,1,8,2],
                         [5,4,1,8,2,9,3,7,6],
                         [7,8,2,6,1,3,9,5,4],
                         [1,9,8,4,6,7,5,2,3],
                         [3,6,5,9,8,2,4,1,7],
                         [4,2,7,1,3,5,8,6,9],
                         [9,5,6,7,4,8,2,3,1],
                         [8,1,3,2,9,6,7,4,5],
                         [2,7,4,3,5,1,6,9,8]];

    expect(getArrayOfColumns(sudokuArrayOfRows)).toEqual([[6,5,7,1,3,4,9,8,2],
                                        [3,4,8,9,6,2,5,1,7],
                                        [9,1,2,8,5,7,6,3,4],
                                        [5,8,6,4,9,1,7,2,3],
                                        [7,2,1,6,8,3,4,9,5],
                                        [4,9,3,7,2,5,8,6,1],
                                        [1,3,9,5,4,8,2,7,6],
                                        [8,7,5,2,1,6,3,4,9],
                                        [2,6,4,3,7,9,1,5,8]]);
  });

  it('should check to see if each array has numbers 1-9', function() {
    var sudokuArrayOfRows = [[6,3,9,5,7,4,1,8,2],
                         [5,4,1,8,2,9,3,7,6],
                         [7,8,2,6,1,3,9,5,4],
                         [1,9,8,4,6,7,5,2,3],
                         [3,6,5,9,8,2,4,1,7],
                         [4,2,7,1,3,5,8,6,9],
                         [9,5,6,7,4,8,2,3,1],
                         [8,1,3,2,9,6,7,4,5],
                         [2,7,4,3,5,1,6,9,8]];
    var sudokuArrayOfColumns = getArrayOfColumns(sudokuArrayOfRows)
    expect(isValid(sudokuArrayOfRows,sudokuArrayOfColumns)).toEqual(true);
  });
});
