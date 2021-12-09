/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
    let res = []
    let firstIdx = 0
    let secondIdx = 0
    
    while (firstIdx < firstList.length && secondIdx < secondList.length) {
        let maxStart = Math.max(firstList[firstIdx][0], secondList[secondIdx][0])
        let minEnd = Math.min(firstList[firstIdx][1], secondList[secondIdx][1])
        
        if (minEnd >= maxStart) {
            res.push([maxStart, minEnd])
        }
        if (firstList[firstIdx][1] > secondList[secondIdx][1]) {
            secondIdx++
        }
        else {
            firstIdx++
        }
    }
    return res
};