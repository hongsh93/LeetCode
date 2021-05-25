/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    let pows = addByTwo(Math.abs(n))
    
    let temp = x
    let ans = 1
    for (let i=0; i<pows[pows.length-1]+1; i++){
        // console.info(i, ans, temp)
        if (pows.indexOf(i) > -1) {
            ans *= temp
        }
        temp = temp*temp
    }
    if (n > 0) {
        return ans
    }
    else {
        return 1/ans
    }
};

var addByTwo = function (x) {
    let temp = x
    let temp3 = 0
    let res = []
    while (temp > 0) {
        if (temp % 2 == 0) {
            temp = Math.floor(temp / 2)
            temp3 += 1
        }
        else {
            res.push(temp3)
            temp = Math.floor(temp / 2)
            temp3 += 1
        }
    }
    return res
}