/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    distDict = {0: 0}
    let loc=[0]
    let dist=1
    while (!distDict.hasOwnProperty(nums.length-1)){
        loc = bfs(nums, loc, distDict, dist)
        dist++
    }
    return distDict[nums.length-1]
};

var bfs = function(nums, loc, distDict, dist) {
    let thisStep = []
    for (j of loc) {
        for (let i=1; i<=nums[j]; i++) {
            if (j+i < nums.length) {
                if (!distDict.hasOwnProperty(j+i)) {
                    distDict[j+i] = dist
                    thisStep.push(j+i)
                }
            }
        }
    }
    return thisStep
}