/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let nextNum = 0
    let missing = 0
    
    for (let i=0; i<arr.length; i++) {
        nextNum++
        while (arr[i] !== nextNum) {
            nextNum++
            missing++
            if (missing === k) {
                return nextNum-1
            }
        }
    }
    return arr[arr.length-1]+(k-missing)
};