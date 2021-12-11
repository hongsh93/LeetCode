/**
 * @param {number[][]} mat
 * @param {number} target
 * @return {number}
 */
var minimizeTheDifference = function(mat, target) {
    let m = mat.length
    let dp = new Set([0])
    
    for (let i=1; i<m+1; i++) {
        let curM = mat[i-1]
        let temp = new Set()
        for (let j=1; j<curM.length+1; j++) {
            let cur = curM[j-1]
            for (let k of dp) {
                temp.add(k+cur)
            }
        }
        dp = temp
    }
    
    let res=0
    while (!dp.has(target-res) && !dp.has(target+res)) {
        res++
    }
    return res
};