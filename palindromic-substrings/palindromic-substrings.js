/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let l = s.length
    let res = l
    let dp = [...Array(l)].map(() => Array(l))
    
    for (let i=0; i<s.length; i++) {
        dp[i][i] = true
    }
    
    for (let i=1; i<l; i++) {
        for (let j=1; j<Math.min(i+1, l-i); j++) {
            // console.info('odd: ', i, j, s[i-j], s[i+j])
            if (dp[i-j+1][i+j-1]) {
                if (s[i-j] === s[i+j]) {
                    res++
                    dp[i-j][i+j] = true
                }
                else {
                    dp[i-j][i+j] = false
                }
            }
        }
        for (let j=0; j<Math.min(i, l-i); j++) {
            // console.info('even: ', i, j, s[i-j-1], s[i+j])
            if (j===0 || dp[i-j][i+j-1]) {
                if (s[i-j-1] === s[i+j]){
                    res++
                    dp[i-j-1][i+j] = true
                }
                else {
                    dp[i-j-1][i+j] = false
                }
            }
        }
    }
    return res
};