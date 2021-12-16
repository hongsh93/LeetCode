/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    let l1 = text1.length
    let l2 = text2.length
    
    let dp = [...Array(l1+1)].map(() => Array(l2+1).fill(0))
    
    for (let i=1; i<=l1; i++) {
        for (let j=1; j<=l2; j++) {
            if (text1[i-1] === text2[j-1]) {
                dp[i][j] = dp[i-1][j-1] + 1
            }
            else {
                dp[i][j] = Math.max(dp[i][j-1], dp[i-1][j])
            }
        }
    }
    return dp[l1][l2]
};