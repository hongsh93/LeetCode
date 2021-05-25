/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    let top = 0
    let dict = {}
    for (let i=0; i<words.length; i++) {
        if (dict.hasOwnProperty(words[i])) {
            dict[words[i]] += 1
            if (top < dict[words[i]]) {
                top = dict[words[i]]
            }
        }
        else {
            dict[words[i]] = 1
            if (top < 1) {top = 1}
        }
    }
    
    let ans = []
    while (ans.length < k) {
        let temp = []
        for (let i=0; i<Object.keys(dict).length; i++) {
            if (Object.values(dict)[i] == top) {
                temp.push(Object.keys(dict)[i])
            }
        }
        temp.sort()
        // console.info(temp)
        let j=0
        while (ans.length < k && j<temp.length) {
            ans.push(temp[j])
            j += 1
        }
        top -= 1
    }
    return ans
};