/**
 * @param {string[]} wordsDict
 */
var WordDistance = function(wordsDict) {
    this.wordList = wordsDict
};

/** 
 * @param {string} word1 
 * @param {string} word2
 * @return {number}
 */
WordDistance.prototype.shortest = function(word1, word2) {
    let lastWord1 = -100000
    let lastWord2 = -100000
    
    let res = 100000
    for (let i=0; i<this.wordList.length; i++) {
        // console.info(this.wordList, i, this.wordList[i], word1, word2)
        if (this.wordList[i] === word1) {
            if (i-lastWord2 < res) {
                res = i-lastWord2
            }
            lastWord1 = i
        }
        else if (this.wordList[i] === word2) {
            if (i-lastWord1 < res) {
                res = i-lastWord1
            }
            lastWord2 = i
        }
    }
    return res
};

/** 
 * Your WordDistance object will be instantiated and called as such:
 * var obj = new WordDistance(wordsDict)
 * var param_1 = obj.shortest(word1,word2)
 */