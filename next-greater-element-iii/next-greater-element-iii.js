/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function(n) {
    let arr = n.toString().split("")
    
    let localmax = -1
    let firstDecrease = -1
    for (let i=arr.length-1; i>=0; i--) {
        if (arr[i] >= localmax) {
            localmax = arr[i]
        }
        else {
            firstDecrease = i
            break
        }
    }
    if (firstDecrease === -1) {
        return -1
    }
    else {
        for (let i=arr.length-1; i>=0; i--) {
            if (arr[i] > arr[firstDecrease]) {
                let temp = arr[i]
                arr[i] = arr[firstDecrease]
                arr[firstDecrease] = temp
                break
            }
        }
        arr = arr.slice(0, firstDecrease+1).concat(arr.slice(firstDecrease+1).sort())
        let ans = parseInt(arr.join(""))
        if (ans > 2**31 -1) {
            return -1
        }
        else {
            return ans
        }
    }
};