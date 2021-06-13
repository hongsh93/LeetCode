/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    count_dict = {}
    for (let i=0; i<nums.length; i++) {
        if (count_dict.hasOwnProperty(nums[i])) {
            return nums[i]
        }
        else {
            count_dict[nums[i]] = 1
        }
    }
    return -1
};