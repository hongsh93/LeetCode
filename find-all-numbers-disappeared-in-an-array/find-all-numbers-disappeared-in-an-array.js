/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
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
                i++
            }
        }
        else {
            i++
        }
    }
    
    for (let i=0; i<nums.length; i++) {
        if (nums[i] !== i+1) {
            res.push(i+1)
        }
    }
    
    return res
};