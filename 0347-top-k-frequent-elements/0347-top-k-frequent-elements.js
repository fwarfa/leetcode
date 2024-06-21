/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // loop through array and make hash map of all numbers and freq in key value
    let hashMap = {}
    
    for (let n of nums) {
        if (!(n in hashMap)) {
            hashMap[n] = 1
        } else {
            hashMap[n]++
        }
    }
    // sort that by count of most high
    let sortedEntries = Object.entries(hashMap).sort((a,b) => b[1] - a[1])
    //  push to new array k times
    let result = []
    
    for (let i = 0; i < k; i++) {
        result.push(sortedEntries[i][0])
    }
    return result
    
};