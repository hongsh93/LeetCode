/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
    words.sort((a,b) => {
        if (a.length < b.length) {
            return -1
        }
        else if (a.length > b.length) {
            return 1
        }
        else {
            return a>b ? 1 : -1
        }
    })
    let l = 1
    let i = 0
    let nextStep = [""]
    let res = ""
    let temp = []
    while (i<words.length && nextStep !== []) {
        if (words[i].length === l) {
            if (nextStep.indexOf(words[i].slice(0,-1)) > -1) {
                temp.push(words[i])
                if (words[i].length > res.length) {
                    res = words[i]
                }
            }
            i++
        }
        else {
            l++
            nextStep = temp
        }
    }
    return res
};