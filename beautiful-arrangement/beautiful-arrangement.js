/**
 * @param {number} n
 * @return {number}
 */
var countArrangement = function(n) {
    let visited = Array(n+1).fill(false)
    let res = 0
    
    const fillNum = (i) => {
        if (i > n) {
            res++
            return
        }
        for (let j=1; j<=n; j++) {
            if (visited[j] === false && (i%j === 0 || j%i === 0)) {
                visited[j] = true
                fillNum(i+1)
                visited[j] = false
            }
        }
    }
    fillNum(1)
    return res
};