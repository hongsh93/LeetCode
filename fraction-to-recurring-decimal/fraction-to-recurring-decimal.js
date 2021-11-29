/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    let recuring = {}
    let res = ""
    if (numerator < 0) {
        if (denominator < 0){
            numerator *= (-1)
            denominator *= (-1)
        }
        else {
            numerator *= (-1)
            res += '-'
        }
    }
    else if (denominator < 0 && numerator !== 0) {
        denominator *= (-1)
        res += '-'
    }
    
    res += Math.floor(numerator/denominator)
    let rest = numerator%denominator
    if (rest !== 0) {
        res += "."
        let seen = []
        let decimal = ""
        while (rest !== 0 && seen.indexOf(rest) === -1) {
            seen.push(rest)
            rest *= 10
            decimal += Math.floor(rest/denominator)
            rest = rest%denominator
        }
        if (rest === 0) {
            res += decimal
        }
        else {
            res = res + decimal.slice(0, seen.indexOf(rest)) + "(" + decimal.slice(seen.indexOf(rest)) + ")"
        }
    }
    return res
};