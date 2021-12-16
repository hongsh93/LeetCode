/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    let arr = []
    for (let mat of matrix) {
        arr.push(...mat)
    }
    arr.sort((a,b) => a-b)
    return arr[k-1]
};