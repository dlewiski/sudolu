// export function getArrayOfColumns(sudokuArray) {
//   var columnsArray = [];
//   for (i = 0; i < sudokuArray.length; i++) {
//     var nestedColumns = [];
//     var rowArr = sudokuArray[i]
//     for (j = 0; j < rowArr.length; j++) {
//       nestedColumns.push(rowArr[j])
//     }
//   }
// }

export function getArrayOfColumns(sudokuArray) {
  var columnsArray = [];
  for (var i = 0; i < 9; i++) {
    var oneColumnArr = [];
    for (var j = 0; j < 9; j++) {
      oneColumnArr.push(sudokuArray[j][i]);
    }
    columnsArray.push(oneColumnArr);
  }
  return columnsArray;
}

export function isValid(arrayX, arrayY) {
  var range = [1,2,3,4,5,6,7,8,9];
  var truthCounter = 0;
  for (var i = 0; i < arrayX.length; i++) {
    if ((arrayX[i].sort().toString() == range.toString()) && (arrayY[i].sort().toString() == range.toString())) {
      truthCounter++;
    }
    if (truthCounter == 9) {
      return true;
    }
  }
  return false;
}


// export function Sudoku(size) {
//   // var colArr = [];
//   // var rowArr = [];
//   // var optionRange = [];
//   this.size = size;
// }
//
// Sudoku.prototype.getArr = function() {
//   var testArr = [];
//   for (var i = 1; i <= this.size; i++) {
//     testArr.push(i);
//   }
//   return testArr;
// };


// for (var i = 0; i < size; i++) {
//   var numArr = []
//   for (var j = 0; j < size; j++ ) {
//     numArr.push(j)
//   }
//   colArr[i].push(numArr);
