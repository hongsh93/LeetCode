/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var subarraySum = function(nums, k) {
    let n = nums.length
    let dp = Array(n+1).fill(0)
    let map = new Map()
    let res = 0
    
    for (let i=0; i<n; i++) {
        dp[i+1] = dp[i]+nums[i]
        if (dp[i+1] === k) {
            res++
        }
        res += map.has(dp[i+1] - k) ? map.get(dp[i+1] - k) : 0
        
        if (map.has(dp[i+1])) {
            map.set(dp[i+1], map.get(dp[i+1])+1)
        }
        else {
            map.set(dp[i+1], 1)
        }
    }
    
    return res
    
    
}









































// var subarraySum = function(nums, k) {
//     let n = nums.length
//     let dp = Array(n+1).fill(0)
//     let ht = {}
//     let res = 0
    
//     for (let i=0; i<n; i++) {
//         dp[i+1] = dp[i] + nums[i]
//         if (dp[i+1] === k) {
//             res++
//         }
//         if (!ht.hasOwnProperty(dp[i+1])) {
//             ht[dp[i+1]] = 1
//         }
//         else {
//             ht[dp[i+1]]++
//         }
//     }
    
//     for (let i=0; i<n; i++) {
//         if (dp[i+1] === k/2) {
//             res += (dp[i+1]
//         }
//     }
    
// };