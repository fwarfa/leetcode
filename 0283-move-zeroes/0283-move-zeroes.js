/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // have 2 pointers
        // one made loop other outside
        // both start at 0
    // if j is a non zero swap with i and increment i
    let i = 0
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
            i++
        }
    }
};