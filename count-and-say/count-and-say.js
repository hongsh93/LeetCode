/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let res = "1"
    let same = 1
    for (let i=1; i<n; i++) {
        let new_res = ""
        for (let j=0; j<res.length; j++) {
            if (j+1 < res.length && res[j] == res[j+1]) {
                same += 1
            }
            else {
                new_res = new_res + same + res[j]
                same = 1
            }
        }
        res = new_res
    }
    return res
};