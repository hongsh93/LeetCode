/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var expressiveWords = function(s, words) {
    let res = 0
    for (let i=0; i<words.length; i++) {
        let sameAlphaWord = 0
        let sameAlphaInput = 0
        let inputIdx = 0
        let j = 0
        
        while (j<words[i].length && inputIdx < s.length) {
            // console.info(i, words[i], s, res)
            if (words[i][j] === s[inputIdx]) {
                sameAlphaWord = 1
                sameAlphaInput = 1
                
                while (words[i][j] === words[i][j+1]) {
                    j++
                    sameAlphaWord++
                }
                while (s[inputIdx] ===  s[inputIdx+1]) {
                    inputIdx++
                    sameAlphaInput++
                }
                // console.info(s[inputIdx], sameAlphaInput, sameAlphaWord)
                if (!((sameAlphaInput > sameAlphaWord && sameAlphaInput >= 3) || sameAlphaInput === sameAlphaWord)) {
                    break
                }
                if (j === words[i].length - 1 && inputIdx === s.length-1) {
                    res++
                }
            }
            else {
                break
            }
            j++
            inputIdx++
        }
    }
    return res
};