/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
    if (k===0) {
        return 0
    }
    let left = 0
    let right = 0
    let distinct = 0
    let ans = 0
    
    let ht = {}
    while (right<s.length) {
        // console.info(left, right, ans, distinct, s.slice(left, right+1), ht)
        if (!ht.hasOwnProperty(s[right]) || ht[s[right]] === 0) {
            ht[s[right]] = 1
            distinct++
        }
        else {
            ht[s[right]]++
        }
        
        if (distinct <= k) {
            ans = Math.max(ans, right-left+1)
        }
        else {
            while(distinct > k) {
                ht[s[left]]--
                if (ht[s[left]] === 0) {
                    distinct--
                }
                left++
            }
        }
        right++
    }
    return ans
};