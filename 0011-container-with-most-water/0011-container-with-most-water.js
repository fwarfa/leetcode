/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // area of rect is a = w * h
    let left = 0
    let right = height.length - 1
    let res = 0
    
    while (left < right) {
        let area = (right -left) * Math.min(height[right], height[left])
        res = Math.max(res, area)
        
        if (height[left] < height[right]) {
            left += 1
        } else {
            right -= 1
        } 
    }
    return res
};