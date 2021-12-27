/**
 * @param {number} n
 * @return {string[]}
 */

var generateParenthesis = function(n) {
    let res = [""]
    let left = 0
    let right = 0
    
    return makeParenthesis(res, left, right, n)
}

var makeParenthesis = function(res, left, right, n) {
    // console.info(res, left, right)
    if (left === n && right === n) {
        return res
    }
    let temp = []
    if (left < n) {
        temp.push(...makeParenthesis(res.map((el) => el+"("), left+1, right, n))
    }
    if (left > right) {
        temp.push(...makeParenthesis(res.map((el) => el+")"), left, right+1, n))
    }
    return temp
}









































// var generateParenthesis = function(n) {
//     let res = ["("]
//     let left = 1
//     let right = 0
    
//     res = makeParenthesis(res, left, right, n)
    
//     return res
// };

// var makeParenthesis = function(res, left, right, n) {
//     let temp = []
//     if (left === n && right === n) {
//         return res
//     }
//     for (let i=0; i<res.length; i++) {
//         if (left < n) {
//             temp.push(...makeParenthesis([res[i]+"("], left+1, right, n))
//         }
//         if (right < left) {
//             temp.push(...makeParenthesis([res[i]+")"], left, right+1, n))
//         }
//     }
//     return temp
// }