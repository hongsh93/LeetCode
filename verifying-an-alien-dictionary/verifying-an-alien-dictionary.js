/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    for (let i=0; i<words.length-1; i++) {
        let w1 = 0
        let w2 = 0
        while (w1 < words[i].length && w2 < words[i+1].length) {
            if (order.indexOf(words[i][w1]) < order.indexOf(words[i+1][w2])) {
                break
            }
            else if (order.indexOf(words[i][w1]) > order.indexOf(words[i+1][w2])) {
                return false
            }
            w1++
            w2++
            
            if (w2 === words[i+1].length && w1 !== words[i].length) {
                return false
            }
        }
    }
    return true
};