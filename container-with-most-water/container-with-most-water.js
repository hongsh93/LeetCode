/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0
    let right = height.length-1
    let max = Area(height, left, right)
    
    while (right > left) {
        let last_left = left
        while (height[left] <= height[last_left] && right > left) {
            left += 1
        }
        if (left == right) {
            left = last_left
        }
    
        let last_right = right
        while (height[right] <= height[last_right] && right > last_left) {
            right -= 1
        }
        if (last_left == right) {
            right = last_right
        }
        
        max = Math.max(max, Area(height, last_left, right), Area(height, left, last_right), Area(height, left, right))
        if (max == Area(height, last_left, right) && right != last_right) {
            left = last_left
        }
        else if (max == Area(height, left, last_right) && left != last_left) {
            right = last_right
        }
        // console.info(left, right, max)
        if (left == last_left && right == last_right) {
            break;
        }
    }
    
    return max
};

var Area = function(height, x1, x2) {
    return Math.min(height[x1], height[x2]) * (x2-x1)
}