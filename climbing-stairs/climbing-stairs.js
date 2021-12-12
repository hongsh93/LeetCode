/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let dict = {}
    const climing = function(k) {
        if (dict.hasOwnProperty(k)) {
            return dict[k]
        }
        else {
            let res = climing(k-1) + climing(k-2)
            dict[k] = res
            return res
        }
    }
    dict[1] = 1
    dict[2] = 2
    
    return climing(n, dict)
};