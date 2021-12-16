/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function(stones) {
    let sum = stones.reduce((acc, cur) => acc+cur)/2
    
    let dp = new Set([0])
    
    for (let stone of stones) {
        let temp = new Set()
        for (let i of dp) {
            temp.add(i)
            temp.add(i+stone)
        }
        dp = temp
    }
    let min = Infinity
    dp = [...dp].map(x => {
        let temp = Math.abs(x-sum)
        if (temp<min) {
            min = temp
        }
        return temp
    })
    return min*2
};