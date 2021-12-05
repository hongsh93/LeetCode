/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    let max = nums[0]
    let maxIdx = 0
    
    let left = null
    let right = null
    
    for (let i=0; i<nums.length; i++) {
        if (nums[i] >= max) {
            max = nums[i]
            maxIdx = i
        }
        else {
            if (left === null) {
                left = maxIdx
            }
            while (nums[left] > nums[i]) {
                left--
            }
            right = i
        }
    }
    if (left === null) {
        return 0
    }
    return right-left
};