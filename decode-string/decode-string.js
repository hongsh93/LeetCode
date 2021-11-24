/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let i=0
    let numStack = []
    let wordStack = []
    let curWord = ""
    while (i < s.length) {
        let num=""
        if (s[i]>=0 && s[i]<=9) {
            num += s[i]
            while (i+1<s.length && s[i+1]>=0 && s[i+1]<=9) {
                i++
                num += s[i]
            }
            numStack.push(parseInt(num))
        }
        else if (s[i] === "[") {
            wordStack.push(curWord)
            curWord = ""
        }
        else if (s[i] === "]") {
            curWord = wordStack.length > 0 ? wordStack.pop() + curWord.repeat(numStack.pop()) : curWord.repeat(numStack.pop())
        }
        else {
            curWord += s[i]
        }
        // console.info(curWord, i, s[i], wordStack, numStack)
        i++
    }
    return curWord
};