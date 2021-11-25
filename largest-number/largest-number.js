/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    nums.sort((a,b) => {
        let aa = a.toString().length
        let bb = b.toString().length
        let l = lcm(aa,bb)
        // console.info(a, b, l, a.toString().repeat(l/aa), b.toString().repeat(l/bb), a.toString().repeat(l/bb) > b.toString().repeat(l/aa))
        return a.toString().repeat(l/aa) > b.toString().repeat(l/bb) ? -1 : 0
    })
    if (nums[0] === 0) {
        return "0"
    }
    return nums.join("")
};

let gcd = (a, b) => {  
        if (b === 0) return a   
        return gcd(b, a % b)  
}

let lcm = (a, b) => {
    return a*b/gcd(a,b)
}