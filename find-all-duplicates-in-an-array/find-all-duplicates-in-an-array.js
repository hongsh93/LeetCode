/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let res = []
    let i=0
    
    while (i<nums.length) {
        if (nums[i] !== i+1) {
            let j = nums[i]-1
            if (nums[i] !== nums[j]) {
                let temp = nums[j]
                nums[j] = nums[i]
                nums[i] = temp
            }
            else {
                res.push(nums[i])
                i++
            }
        }
        else {
            i++
        }
    }
    return [...new Set(res)]
};