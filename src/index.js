
module.exports = function towelSort (matrix) {
    if (typeof(matrix) == 'undefined' || matrix.length == 0) {
        return [];
    }
     matrix[1] = matrix[1].reverse()
     if (typeof(matrix[3]) !== 'undefined'){
         matrix[3] = matrix[3].reverse();
     }
        return matrix.flat(1);
}
