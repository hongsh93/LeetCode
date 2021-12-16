/**
 * @param {string} s
 * @return {number}
 */

var minInsertions = function(s) {
    let res = 0
    let l = s.length
    let dp = [...Array(l+2)].map(() => Array(l+2).fill(0))
    
    for (let i=0; i<l; i++) {
        for (let j=l-1; j>=0; j++) {
            if (s[i] === s[j]) {
                dp[i][j] = dp[i-1][j+1]
                
            }
            else {
                dp[i][j] = Math.min(dp[i-1][j], dp[i][j+1])+1
            }
        }
    }
    return dp[l-1][0]
}











































var minInsertions = function(s) {
    let l = s.length
    let dp = [...Array(l+1)].map(() => new Uint16Array(l+1).fill(0))
    for (let i=0; i<l-1; i++) {
        dp[i][i+1] = s[i] === s[i+1] ? 0 : 1
    }
    
    for (let i=2; i<l; i++) {
        for (let j=0; j<l-i; j++) {
            dp[j][j+i] = s[j] === s[j+i] ?
                dp[j+1][j+i-1] : Math.min(dp[j+1][j+i], dp[j][j+i-1]) + 1
        }
    }
    
    return dp[0][l-1]
};