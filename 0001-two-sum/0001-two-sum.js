/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // simple hash map solution
    // add all numbers to hash
    let map = {}
    
    for (let i = 0; i < nums.length; i++) {
        let temp = target - nums[i]
        
        if (temp in map) {
            return [i, map[temp]]
        } else {
            map[nums[i]] = i
        }
    }
};