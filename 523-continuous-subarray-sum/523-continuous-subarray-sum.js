/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    let n = nums.length
    let dp = Array(n+1).fill(0)
    let map = new Map()
    // console.info(nums)
    for (let i=0; i<n; i++) {
        dp[i+1] = dp[i] + nums[i]
        dp[i+1] %= k
        
        if (dp[i+1] === 0 && i !== 0) {
            return true
        }
        
        if (map.has(dp[i+1])) {
            if (map.get(dp[i+1]) < i-1) {
                return true
            }
        }
        else {
            map.set(dp[i+1], i)
        }
        // console.info(dp, map)
    }
    return false
};