/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    if (n<=3) {
        return n-1
    }
    const breakMorethan4 = function(n) {
        if (n<=4) {
            return n
        }
        if (n>=5) {
            return 3*breakMorethan4(n-3)
        }
    }
    
    return breakMorethan4(n)
};