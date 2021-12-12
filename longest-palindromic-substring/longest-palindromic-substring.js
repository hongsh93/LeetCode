/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    for (let i=s.length; i>0; i--) {
        for (let j=0; j<s.length-i+1; j++) {
            if (isPalindrome(s.slice(j,j+i))) {
                return s.slice(j,j+i)
            }
        }
    }
    return ""
};

var isPalindrome = function(s) {
    for (let i=0; i<s.length/2; i++) {
        if (s[i] !== s[s.length-1-i]) {
            return false
        }
    }
    return true
}