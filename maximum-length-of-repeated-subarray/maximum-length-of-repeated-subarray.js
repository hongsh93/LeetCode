/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function(nums1, nums2) {
    let maxLen = 0
    const dp = [...Array(nums1.length+1)].map(() => Array(nums2.length+1).fill(0))
    
    for (let i=0; i<nums1.length; i++) {
        for (let j=0; j<nums2.length; j++) {
            if (nums1[i] === nums2[j]) {
                dp[i+1][j+1] = dp[i][j] + 1
                if (dp[i+1][j+1] > maxLen) {
                    maxLen = dp[i+1][j+1]
                }
            }
        }
    }
    return maxLen
};