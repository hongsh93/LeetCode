/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let res = []
    let count = 0
    let max = matrix.length * matrix[0].length
    
    for (let i=0; i<matrix.length/2; i++){
        for (let j=i; j<matrix[0].length-i; j++) {
            res.push(matrix[i][j])
            count++
        }
        for (let j=i+1; j<matrix.length-i; j++) {
            res.push(matrix[j][matrix[0].length-i-1])
            count++
        }
        if (2*i+1 < matrix.length) {
            for (let j=matrix[0].length-i-2; j>=i; j--) {
                res.push(matrix[matrix.length-i-1][j])
                count++
            }
        }
        if (2*i+1 < matrix[0].length) {
            for (let j=matrix.length-i-2; j>=i+1; j--) {
                res.push(matrix[j][i])
                count++
            }
        }
        if (count === max) {
            break
        }
    }
    
    return res
};