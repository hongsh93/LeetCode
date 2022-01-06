/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let n = nums.length
    let arr = Array(n).fill(0)
    
    for (let i=0; i<nums.length; i++) {
        if (nums[i]<=n && nums[i]>=1) {
            arr[nums[i]-1]++
        }
    }
    for (let i=0; i<nums.length; i++) {
        if (arr[i] === 0) {
            return i+1
        }
    }
    return n+1
};