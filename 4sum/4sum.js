/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
// target == 2 / nums = [-2,-1,0,1,2]
// i=1, j=2 -> new_target = 3, k=3, l=4
// O(n*n*n*n)
// O(n)

var fourSum = function(nums, target) {
    nums.sort((a,b) => (a-b))
    let res = []
    for (let i=0; i<nums.length-3; i++) {
        for (let j=i+1; j<nums.length-2; j++) {
            let k = j+1
            let l = nums.length-1
            while (k<l) {
                let new_target = target - nums[i] - nums[j]
                let list_sum = nums[k] + nums[l]

                if (list_sum === new_target) {
                    if (!res.some(x => JSON.stringify(x) === JSON.stringify([nums[i], nums[j], nums[k], nums[l]]))) {
                        res.push([nums[i], nums[j], nums[k], nums[l]])
                    }
                    k += 1
                    l -= 1
                }
                else if (list_sum > new_target) {
                    l -= 1
                }
                else {
                    k += 1
                }
            }
        }
    }
    return res
};