/**
 * @param {string} s
 * @return {string}
 */
/**
zero -> z
one -> o - 2 - 0 - 4
two -> w
three -> r - 4 - 0
four -> u
five -> f - 4
six -> x
seven -> v - 5
eight -> g
nine -> i - 8 - 6 - 5
**/
var originalDigits = function(s) {
    let countDict = {}
    for (let i=0; i<s.length; i++) {
        countDict[s[i]] ? countDict[s[i]]++ : countDict[s[i]] = 1
    }
    res_arr = []
    res_arr.push(countDict["z"] ?? 0)
                 res_arr.push(0)
    res_arr.push(countDict["w"] ?? 0)
                 res_arr.push(0)
    res_arr.push(countDict["u"] ?? 0)
                 res_arr.push(0)
    res_arr.push(countDict["x"] ?? 0)
                 res_arr.push(0)
    res_arr.push(countDict["g"] ?? 0)
                 res_arr.push(0)

    res_arr[1] = (countDict["o"] ?? 0) - res_arr[0] - res_arr[2] - res_arr[4]
    res_arr[3] = (countDict["r"] ?? 0) - res_arr[0] - res_arr[4]
    res_arr[5] = (countDict["f"] ?? 0) - res_arr[4]
    res_arr[7] = (countDict["v"] ?? 0) - res_arr[5]
    res_arr[9] = (countDict["i"] ?? 0) - res_arr[5] - res_arr[6] - res_arr[8]
    
    res = ""
    for (let i=0; i<10; i++) {
        res += `${i}`.repeat(res_arr[i])
    }
    return res
};