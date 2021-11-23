/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    let start_arr = []
    let end_arr = []
    for (let i=0; i<intervals.length; i++) {
        start_arr.push(intervals[i][0])
        end_arr.push(intervals[i][1])
    }
    start_arr.sort((a,b) => a-b)
    end_arr.sort((a,b) => a-b)

    let res = 0
    let cur = 0
    let start = 0
    let end = 0
    while(start < start_arr.length) {
        if (start_arr[start] < end_arr[end]) {
            start += 1
            cur += 1
            if (cur > res) {
                res = cur
            }
        }
        else if (start_arr[start] > end_arr[end]) {
            end += 1
            cur -= 1
        }
        else {
            start += 1
            end += 1
        }
    }
    return res
};