/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    arr.sort((a,b) => {
        let c = Math.abs(a-x)
        let d = Math.abs(b-x)
        if (c===d) {
            return a-b
        }
        else {
            return c-d
        }
    })
    return arr.slice(0,k).sort((a,b) => a-b)
};