/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    /*
        brute force approach:
            - go through kids array first time and record largest number
            - loop again outside of that and do a check of current + extra === largest and push to result arr
            - return result arr
    */
    let max = candies[0]
    let result = []
    
    for (let i = 1; i < candies.length; i++) {
        if (candies[i] > max) {
            max = candies[i]
        }
    }
    for (let i = 0; i < candies.length; i++) {
        result.push((candies[i] + extraCandies) >= max)
    }
    return result
};