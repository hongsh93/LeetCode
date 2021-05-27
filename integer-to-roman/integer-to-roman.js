/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let one = num%10
    let ten = Math.floor(num/10) % 10
    let hun = Math.floor(num/100) % 10
    let tho = Math.floor(num/1000) % 10
    
    let arr = [tho, hun, ten, one]
    
    res = ""
    for (i=0; i<4; i++) {
        if (arr[i] == 0) {
            continue
        }
        else if (arr[i] <= 3) {
            if (i == 3) {
                res = res.concat('', "I".repeat(arr[i]))
            }
            else if (i == 2) {
                res = res.concat('', "X".repeat(arr[i]))
            }
            else if (i == 1) {
                res = res.concat('', "C".repeat(arr[i]))
            }
            else {
                res = res.concat('', "M".repeat(arr[i]))
            }
        }
        else if (arr[i] == 4) {
            if (i == 3) {
                res = res.concat('', "IV")
            }
            else if (i == 2) {
                res = res.concat('', "XL")
            }
            else if (i == 1) {
                res = res.concat('', "CD")
            }
        }
        else if (arr[i] <= 8) {
            if (i == 3) {
                res = res.concat('', "V")
            }
            else if (i == 2) {
                res = res.concat('', "L")
            }
            else if (i == 1) {
                res = res.concat('', "D")
            }
            
            if (i == 3) {
                res = res.concat('', "I".repeat(arr[i]-5))
            }
            else if (i == 2) {
                res = res.concat('', "X".repeat(arr[i]-5))
            }
            else if (i == 1) {
                res = res.concat('', "C".repeat(arr[i]-5))
            }
        }
        else if (arr[i] == 9) {
            if (i == 3) {
                res = res.concat('', "IX")
            }
            else if (i == 2) {
                res = res.concat('', "XC")
            }
            else if (i == 1) {
                res = res.concat('', "CM")
            }
        }
    }
    return res
};