/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

var coinChange = function(coins, amount) {
    let l = coins.length
    let dp = Array(amount+1).fill(-1)
    dp[0] = 0
    
    for (let i=1; i<=amount; i++) {
        let temp = []
        for (let coin of coins) {
            if (i-coin >= 0 && dp[i-coin] > -1) {
                temp.push(dp[i-coin]+1)
            }
        }
        dp[i] = Math.min(...temp)
    }
    console.info(dp)
    return dp[amount] <= amount ? dp[amount] : -1
}









































// var coinChange = function(coins, amount) {
//     if (amount === 0) {
//         return 0
//     }
//     let dp = Array(amount+1).fill(0)
    
//     for (let coin of coins) {
//         if (coin <= amount) {
//             dp[coin] = 1
//         }
//     }
//     for (let i=1; i<dp.length; i++) {
//         for (let coin of coins) {
//             if (dp[i] > 0) {
//                 if (i>coin && dp[i-coin]>0) {
//                     dp[i] = Math.min(dp[i], dp[i-coin]+1)
//                 }
//             }
//             else {
//                 if (i>coin && dp[i-coin]>0) {
//                     dp[i] = dp[i-coin]+1
//                 }
//             }
//         }
//     }
//     return dp[amount] > 0 ? dp[amount] : -1

// };

// var coinChange = function(coins, amount) {
//     if (amount === 0){
//         return 0
//     }
//     let dp = Array(amount+1).fill(0)
//     // let try = 1
    
//     const change = (i) => {
//         let nextTry = []
//         for (let j of i) {
//             for (let coin of coins) {
//                 if (dp[j+coin] > dp[j]+1 || dp[j+coin] === 0) {
//                     dp[j+coin] = dp[j]+1
//                     if (j+coin < amount) {
//                         nextTry.push(j+coin)
//                     }
//                     else if (j+coin === amount) {
//                         return
//                     }
//                 }
//             }
//         }
//         nextTry.length > 0 && change(nextTry)
//     }
//     change([0])
//     return dp[amount] > 0 ? dp[amount] : -1
// };