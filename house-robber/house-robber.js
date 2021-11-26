/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let using = 0
    let avoid = 0
    
    for (let i=0; i< nums.length; i++) {
        let max = Math.max(using, avoid)
        using = nums[i] + avoid
        avoid = max
    }
    return Math.max(using, avoid)
};