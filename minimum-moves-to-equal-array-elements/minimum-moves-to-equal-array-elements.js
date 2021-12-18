/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    let min = nums[0]
    let ans = 0
    for (let i=1; i<nums.length; i++) {
        if (nums[i] < min) {
            let temp = min-nums[i]
            min = nums[i]
            ans += (temp * i)
        }
        else {
            ans += (nums[i]-min)
        }
    }
    return ans
};