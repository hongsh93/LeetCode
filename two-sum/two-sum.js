/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let dict = {}
    for (let i=0; i<nums.length; i++) {
        if (dict[target-nums[i]] > -1) {
            return [dict[target-nums[i]], i]
        }
        else {
            dict[nums[i]] = i
        }
    }
};