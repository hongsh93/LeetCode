/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let max_arr = []
    for (let i in nums) {
        if (max_arr.length < k) {
            max_arr.push(nums[i])
            max_arr.sort((a,b) => b-a)
        }
        else {
            if (max_arr[k-1] < nums[i]) {
                max_arr[k-1] = nums[i]
                max_arr.sort((a,b) => b-a)
            }
        }
    }
    return max_arr[k-1]
};