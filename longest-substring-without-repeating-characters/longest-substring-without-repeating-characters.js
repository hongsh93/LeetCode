/**
 * @param {string} s
 * @return {number}
 */

//"abcba"

var lengthOfLongestSubstring = function(s) {
    let loc_dict = {}
    let res = 0
    let left = 0
    let right = 0
    
    while (right < s.length) {
        // console.info(left, right, loc_dict, res)
        if (loc_dict.hasOwnProperty(s[right])) {
            if (loc_dict[s[right]] < left) {
                loc_dict[s[right]] = right
            }
            else {
                left = loc_dict[s[right]]+1
                loc_dict[s[right]] = right
            }
        }
        else {
            loc_dict[s[right]] = right
        }
        if (right-left+1 > res) {
            res = right-left+1
        }
        right += 1
    }
    return res
};