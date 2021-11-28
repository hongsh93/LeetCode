/**
 * @param {string} s
 * @param {number[]} cost
 * @return {number}
 */
var minCost = function(s, cost) {
    let curMax = cost[0]
    let curCost = 0
    let res = 0
    
    for (i=1; i<s.length; i++) {
        if (s[i] === s[i-1]) {
            if (cost[i] > curMax) {
                curCost += curMax
                curMax = cost[i]
            }
            else {
                curCost += cost[i]
            }
        }
        else {
            res += curCost
            curCost = 0
            curMax = cost[i]
        }
    }
    return res + curCost
};