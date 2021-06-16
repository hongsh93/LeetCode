/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    if (strs.length > 0) {
        let res = [[strs[0]]]
        let anagrams = [strs[0].split("").sort().join("")]
        for (let i=1; i<strs.length; i++) {
            let temp = strs[i].split("").sort().join("")
            let temp_idx = anagrams.indexOf(temp)
            if (temp_idx > -1) {
                res[temp_idx].push(strs[i])
            }
            else {
                anagrams.push(temp)
                res.push([strs[i]])
            }
        }
        return res
    }
    else {
        return [[""]]
    }
};