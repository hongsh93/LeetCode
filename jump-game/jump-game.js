/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if (nums.length === 1) {
        return true
    }
    let nextStep = 0
    let cur = 0
    while (nextStep < nums.length) {
        for (i=1; i<=nums[cur]; i++) {
            if (cur+i === nums.length-1) {
                return true
            }
            if (cur+i+nums[cur+i] >= nextStep+nums[nextStep]) {
                nextStep = cur+i
            }
        }
        if (nextStep === cur) {
            return false
        }
        cur = nextStep
    }
};