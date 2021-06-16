/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let left = []
    let right = []
    let right_off = []
    for (let i=0; i<s.length; i++) {
        if (s[i] === "(") {
            left.push(i)
        }
        else if (s[i] === ")" && left.length > right.length) {
            right.push(i)
        }
        else if (s[i] === ")" && left.length <= right.length){
            right_off.push(i)
        }
    }
    let res = ""
    if (left.length > right.length) {
        for (let i=0; i<s.length; i++){
            if (!left.slice(right.length).includes(i) && !right_off.includes(i)) {
                res += s[i]
            }
        }
    }
    else {
        for (let i=0; i<s.length; i++) {
            if (!right.slice(0, right.length-left.length).includes(i) > -1 && !right_off.includes(i)) {
                res += s[i]
            }
        }
    }
    // console.info(left, right, right_off)
    return res
};