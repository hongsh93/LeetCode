/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    let countDict = {}
    let max = 0
    let maxCount = 0
    for (let i=0; i<tasks.length; i++) {
        if (countDict.hasOwnProperty(tasks[i])) {
            countDict[tasks[i]]++
        }
        else {
            countDict[tasks[i]] = 1
        }
        if (max < countDict[tasks[i]]) {
            max = countDict[tasks[i]]
            maxCount = 1
        }
        else if (max === countDict[tasks[i]]){
            maxCount++
        }
    }
    return Math.max(tasks.length, (n+1)*(max-1)+maxCount)
};