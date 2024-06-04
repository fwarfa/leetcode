/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // hash map (object)
    // loop, for each idx, check if tgt - curr idx ansr is already in hash
    // if it is we return if not we store curr idx and value
    let hMap = {}
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i] 
        if (diff in hMap) {
            return [i, hMap[diff]]
        } else {
            hMap[nums[i]] = i
        }
    }
};