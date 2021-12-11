/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let upLastIdx = nums.length
    let downLastIdx = 0
    let idx = Math.floor(upLastIdx/2)
    
    while (nums[idx] !== target && upLastIdx !== idx && downLastIdx !== idx) {
        if (nums[idx] > target) {
            upLastIdx = idx
            idx = Math.floor((idx + downLastIdx)/2)
        }
        else {
            downLastIdx = idx
            idx = Math.floor((idx+upLastIdx)/2)
        }
    }
    
    if (upLastIdx === idx || downLastIdx === idx) {
        if (target === nums[upLastIdx]) {
            return [upLastIdx, upLastIdx]
        }
        else if (target === nums[downLastIdx]) {
            return [downLastIdx, downLastIdx]
        }
        else {
           return [-1, -1] 
        }
    }
    
    let up = idx
    let down = idx
    while (up<nums.length-1 && nums[up+1] === target) {
        up++
    }
    while (down>0 && nums[down-1] === target) {
        down--
    }
    
    return [down, up]
};