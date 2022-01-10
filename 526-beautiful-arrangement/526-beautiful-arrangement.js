/**
 * @param {number} n
 * @return {number}
 */

var countArrangement = function(n) {
    let res = 0
    let seen = new Set()
    
    const count = function(num) {
        if (num === n+1) {
            res++
            return
        }
        for (let i=1; i<=n; i++) {
            if (!seen.has(i) && (i%num === 0 || num%i === 0)) {
                seen.add(i)
                count(num+1)
                seen.delete(i)
            }
        }
    }
    
    count(1)
    return res
}
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    




// var countArrangement = function(n) {
//     let visited = Array(n+1).fill(false)
//     let res = 0
    
//     const fillNum = (i) => {
//         if (i > n) {
//             res++
//             return
//         }
//         for (let j=1; j<=n; j++) {
//             if (visited[j] === false && (i%j === 0 || j%i === 0)) {
//                 visited[j] = true
//                 fillNum(i+1)
//                 visited[j] = false
//             }
//         }
//     }
//     fillNum(1)
//     return res
// };