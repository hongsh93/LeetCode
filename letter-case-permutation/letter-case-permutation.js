/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
    let res = [""]
    for (let i=0; i<s.length; i++) {
        if (isNaN(s[i])) {
            let temp = []
            for (let j=0; j<res.length; j++) {
                temp.push(res[j]+s[i].toUpperCase())
                temp.push(res[j]+s[i].toLowerCase())                
            }
            res = temp
        }
        else {
            let temp = []
            for (let j=0; j<res.length; j++) {
                temp.push(res[j]+s[i])     
            }
            res = temp
        }
    }
    return res
};