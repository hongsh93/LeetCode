/**
 * @param {number[]} scores
 * @param {number[]} ages
 * @return {number}
 */

var bestTeamScore = function(scores, ages) {
    let l = scores.length
    let arr = [...Array(l)].map((x, idx) => [ages[idx], scores[idx]])
    arr.sort((a,b) => {
        if (a[0] === b[0]) {
            return a[1]-b[1]
        }
        else {
            return a[0]-b[0]
        }
    })
    let dp = arr.map((curr, idx) => arr[idx][1])
    let answer = dp[0]
    
    for (let i=0; i<l; i++) {
        for (let j=i-1; j>=0; j--) {
            if (arr[i][0] === arr[j][0] || arr[i][1] >= arr[j][1]) {
                dp[i] = Math.max(dp[i], dp[j] + arr[i][1])
            }
        }
        answer = Math.max(answer, dp[i])
    }
    
    return answer
}










































// var bestTeamScore = function(scores, ages) {
//     let map = ages.map(( curr, idx) => [curr, scores[idx]]);
//     map.sort((a,b) => {
//         if (a[0] === b[0]) {
//             return a[1]-b[1]
//         }
//         else {
//             return a[0]-b[0]
//         }
//     })
//     let l = map.length
//     let dp = map.map((curr, idx) => map[idx][1])
//     let answer = dp[0]
    
//     for (let i=0; i<l; i++) {
//         for (let j=0; j<i; j++) {
//             if (map[j][1] <= map[i][1]) {
//                 dp[i] = Math.max(dp[i], dp[j]+map[i][1])
//             }
//             else if (map[j][0] === map[i][0]) {
//                 dp[i] = Math.max(dp[i], dp[j]+map[i][1])
//             }
//             console.info(j, i, map[j], map[i], dp)
//         }
//         answer = Math.max(answer, dp[i])
//     }
//     return answer
// };