/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b) => {
        if (a[0] === b[0]){
            return a[1]-b[1]
        }
        else {
            return a[0]-b[0]
        }
    })
    
    let i=1
    let res = [intervals[0]]
    while (i<intervals.length) {
        let last = res.pop()
        if (intervals[i][0] <= last[1]) {
            res.push([last[0], Math.max(intervals[i][1], last[1])])
        }
        else {
            res.push(last)
            res.push(intervals[i])
        }
        i++
    }
    return res
    
};