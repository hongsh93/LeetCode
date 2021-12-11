/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let subsetSum = nums.reduce((acc, cur) => acc+cur)/2
    let n = nums.length
    
    if (subsetSum !== Math.floor(subsetSum)) {
        return false
    }
    
    let dp = Array.from({length: n+1}, () => new Array(subsetSum + 1).fill(false))
    dp[0][0] = true
    for (let i=1; i<n+1; i++) {
        let cur = nums[i-1]
        for (let j=0; j<subsetSum+1; j++) {
            if (j<cur) {
                dp[i][j] = dp[i-1][j]
            }
            else {
                dp[i][j] = dp[i-1][j] || dp[i-1][j-cur]
            }
        }
    }
    return dp[n][subsetSum]
};