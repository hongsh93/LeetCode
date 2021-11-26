/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
    words = words.sort((a,b) => a.length - b.length)
    let maxLen = 1
    
    let left = 0
    let right = 0
    let lastRange = [0, 0]
    let dp = Array(words.length).fill(1)
    
    while(right<words.length+1) {
        while (right<words.length && words[right].length === words[left].length) {
            right++
        }
        // console.info(left, right, lastRange, dp)
        if (left !== 0) {
            if (words[left].length === words[lastRange[0]].length+1) {
                let lastArray = words.slice(lastRange[0], lastRange[1])
                for (let i=left; i<right; i++) {
                    for (let j=0; j<words[i].length; j++) {
                        let word = words[i].slice(0,j) + words[i].slice(j+1)
                        // console.info(lastArray, word, lastArray.indexOf(word))
                        if (lastArray.indexOf(word) > -1) {
                            dp[i] = Math.max(dp[i], dp[words.indexOf(word)]+1)
                            if (dp[i] > maxLen) {
                                maxLen = dp[i]
                            }
                        }
                    }
                }
            }
            else {
                for (let i=left; i<right; i++) {
                    dp[i] = 1
                }
            }
        }
        if(right === left) {
            break
        }
        lastRange = [left, right]
        left = right
        right++
    }
    return maxLen
};