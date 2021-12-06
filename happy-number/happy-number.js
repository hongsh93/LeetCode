/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let seen = {}
    let num = n
    while (!seen.hasOwnProperty(num)) {
        seen[num] = true
        let temp = num
        num = 0
        while (temp !== 0) {
            num += (temp%10)**2
            temp = Math.floor(temp/10)
        }
        
        if (num === 1) {
            return true
        }
    }
    return false
};