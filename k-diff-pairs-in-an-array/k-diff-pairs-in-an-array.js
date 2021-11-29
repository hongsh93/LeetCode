/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    nums.sort((a,b) => a-b)
    let left = 0
    let right = 1
    let res = []
    while (right < nums.length) {
        if (nums[right] - nums[left] === k) {
            let temp = nums[left] + '_' + nums[right]
            if (res.indexOf(temp) === -1) {
                res.push(temp)
            }
            left += 1
            right += 1
        }
        else if (nums[right] - nums[left] < k) {
            right++
        }
        else {
            left++
            if (left === right) {
                right++
            }
        }
    }
    return res.length
};