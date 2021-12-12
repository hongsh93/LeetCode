/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let avoid = 0
    let using = 0
    
    for (let num of nums) {
        let temp = avoid
        avoid = Math.max(avoid, using)
        using = temp + num
    }
    return Math.max(avoid, using)
};