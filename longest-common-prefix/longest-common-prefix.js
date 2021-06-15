/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let res = strs[0]
    for (let i=1; i<strs.length; i++) {
        if (strs[i].length === 0) {
            res = ""
            break
        }
        for (let j=0; j<Math.min(res.length, strs[i].length); j++) {
            if (res[j] !== strs[i][j]) {
                res = res.slice(0,j)
                break
            }
            if (j === strs[i].length -1) {
                res = strs[i]
            }
        }
    }
    return res
};