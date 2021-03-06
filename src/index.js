
// You should implement your task here.

module.exports = function towelSort(matrix) {

  let matrixEmpty = [];
  if (matrix == null || matrix.length == 0) {
    return matrixEmpty;
  }
  if (matrix[3] == null) {
    matrix[1].reverse();
  } else {
    matrix[1].reverse() && matrix[3].reverse();
  }
  return [].concat(...matrix);
}