/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    let l = isConnected.length
    let seen = Array(l).fill(false)
    let res = 0
    
    const dfs = function(isCon, _seen, idx) {
        for (let j=0; j<l; j++) {
            if (isCon[idx][j] === 1 && !_seen[j]) {
                _seen[j] = true
                dfs(isCon, _seen, j)
            }
        }
    }
    
    for (let i=0; i<l; i++) {
        if (!seen[i]) {
            seen[i] = true
            dfs(isConnected, seen, i)
            res++
            // console.info(i, seen)
        }
    }
    return res
};