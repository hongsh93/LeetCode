/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function(arr, k) {
    let distinct = new Set(arr)
    let countDict = {}
    for (let i=0; i<arr.length; i++) {
        if (countDict.hasOwnProperty(arr[i])) {
            countDict[arr[i]]++
        }
        else {
            countDict[arr[i]] = 1
        }
    }
    distinct = [...distinct].sort((a,b) => countDict[a] - countDict[b])
    
    let remove = 0
    let idx = 0
    while (remove<k) {
        if (remove + countDict[distinct[idx]] > k) {
            break
        }
        else if (remove + countDict[distinct[idx]] === k) {
            idx++
            break
        }
        else {
            remove += countDict[distinct[idx]]
            idx++
        }
    }
    return distinct.slice(idx).length
};