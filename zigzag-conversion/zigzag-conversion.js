/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let interval = 2*numRows - 2
    let res = ""
    if (numRows !== 1) {
        for (let i=0; i<numRows; i++) {
            if (i === 0) {
                for (let j=0; j<s.length/interval; j++) {
                    res += s[j*interval]
                }
            }
            else if (i === numRows-1) {
                for (let j=0; j<(s.length+1-numRows)/interval; j++) {
                    res += s[j*interval+numRows-1]
                }
            }
            else {
                for (let j=0; j<Math.floor(s.length/interval); j++) {
                    res += s[j*interval+i]
                    res += s[(j+1)*interval-i]
                }
                let temp = Math.floor(s.length/interval)*interval
                // console.info(temp, s.length, interval, i)
                if (s.length%interval > i) {
                    res += s[temp+i]
                }
                if (s.length%interval > interval-i) {
                    res += s[temp+interval-i]
                }
            }
        }
    }
    else {
        res = s
    }
    
    return res
};