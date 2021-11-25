/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let parsed = s.trim()
    
    let res = ""
    let i=0;
    
    switch(parsed[0]) {
        case '-': 
            res += '-'
        case '+':
            i++
            break;
    }
    
    if ((i===0 && (isNaN(parsed[0]) || parsed.length === 0)) || (i===1 && (parsed.length === 1 || isNaN(parsed[1]) || parsed[1] === ' '))) {
        return 0;
    }
    
    while(i<parsed.length && !isNaN(parsed[i])) {
        res += parsed[i]
        i++
    }
    
    let max = 2**31
    res = parseInt(res)
    return (res > 0 ? 
            res >= max ? max-1 : res 
            : res < max*(-1) ? max*(-1) : res)
};