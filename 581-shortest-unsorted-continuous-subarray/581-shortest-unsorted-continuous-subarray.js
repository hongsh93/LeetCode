/**
 * @param {number[]} nums
 * @return {number}
 */

var findUnsortedSubarray = function(nums) {
    let left = -1
    let right = -1
    let localMax = -100001
    
    for (let i=0; i<nums.length; i++) {
        if (nums[i] < localMax) {
            if (left === -1) {
                left = i-1
            }
            right = i
            while (left > 0 && nums[left-1] > nums[i]) {
                left--
            }
        }
        else {
            localMax = nums[i]
        }
    }
    return left > -1 ? right-left+1 : 0
}










































// var findUnsortedSubarray = function(nums) {
//     let max = nums[0]
//     let maxIdx = 0
    
//     let left = null
//     let right = null
    
//     for (let i=0; i<nums.length; i++) {
//         if (nums[i] >= max) {
//             max = nums[i]
//             maxIdx = i
//         }
//         else {
//             if (left === null) {
//                 left = maxIdx
//             }
//             while (nums[left] > nums[i]) {
//                 left--
//             }
//             right = i
//         }
//     }
//     if (left === null) {
//         return 0
//     }
//     return right-left
// };