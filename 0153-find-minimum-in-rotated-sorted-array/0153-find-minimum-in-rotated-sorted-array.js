/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    // binary search approach
    // while loop while middle !== left or right
    // find middle and compare to right
        // if right is greater we no min is in right side
            // move left pointer to be middle + 1
        // else move right to be middle
    let left = 0
    let right = nums.length - 1
    
    while (left < right) {
        let m = Math.floor((right + left) / 2)
        
        if (nums[right] < nums[m]) {
            left = m + 1
        } else {
            right = m
        }
    } 
    return nums[right]
};