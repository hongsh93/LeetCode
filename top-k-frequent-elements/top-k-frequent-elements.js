/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    countDict = {}
    arrNoRepeat = []
    for (let i in nums) {
        if (countDict.hasOwnProperty(nums[i])) {
            countDict[nums[i]] += 1
        }
        else {
            countDict[nums[i]] = 1
            arrNoRepeat.push(nums[i])
        }
    }
    
    arrNoRepeat.sort((a,b) => countDict[b] - countDict[a])
    return arrNoRepeat.slice(0, k)
};