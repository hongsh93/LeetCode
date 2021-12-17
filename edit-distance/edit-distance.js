/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */

var minDistance = function(word1, word2) {
    let l1 = word1.length
    let l2 = word2.length
    
    let dp = new Map()
    
    const run = function(w1, w2) {
        if (dp.has(`${w1}_${w2}`)) return dp.get(`${w1}_${w2}`)
        let res = 0
        if (w1 >= l1 && w2 >= l2) return res
        if (word1[w1] === word2[w2] && w1 < l1 && w2 < l2) {
            res = run(w1+1, w2+1)
        }
        else {
            let a = Infinity, b = Infinity, c = Infinity
            if (w1 < l1) {
                a = run(w1+1, w2)
            }
            if (w2 < l2) {
                b = run(w1, w2+1)
            }
            if (w1 < l1 && w2 < l2) {
                c = run(w1+1, w2+1)
            }
            res = Math.min(a, b, c) + 1
        }
        dp.set(`${w1}_${w2}`, res)
        return res
    }
    
    return run(0,0)
}




// var minDistance = function(word1, word2) {
//     let dp = new Map()
    
//     const run = function(w1, w2) {
//         if (dp.has(`${w1}_${w2}`)) return dp.get(`${w1}_${w2}`)
//         if (w1 > word1.length && w2 > word2.length) return 0
        
//         let insert = Infinity, del = Infinity, replace = Infinity
//         let res
//         if (word1[w1] === word2[w2]) {
//             res = run(w1+1, w2+1)
//         }
//         else {
//             if (w2 < word2.length) insert = run(w1, w2+1)
//             if (w1 < word1.length) del = run(w1+1, w2)
//             if (w1 < word1.length && w2 < word2.length) replace = run(w1+1, w2+1)
            
//             res = Math.min(insert, del, replace) + 1
//         }
//         dp.set(`${w1}_${w2}`, res)
//         return res
//     }
//     return run(0,0)
// };