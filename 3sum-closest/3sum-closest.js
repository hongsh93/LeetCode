/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let closest = 20000
    nums.sort((a, b) => {return a - b})
    let dict = {}
    for (let i=2; i<nums.length; i++) {
        let leftptr = 0
        let rightptr = i-1
        while (leftptr < rightptr) {
            let temp = nums[i] + nums[leftptr] + nums[rightptr] - target
            if (temp == 0) {
                return nums[i] + nums[leftptr] + nums[rightptr]
            }
            if (Math.abs(temp) < Math.abs(target - closest)) {
                closest = nums[i] + nums[leftptr] + nums[rightptr]
            }
            
            if (temp > 0) {
                rightptr -= 1
            }
            else {
                leftptr += 1
            }
        }
    }
    return closest
};