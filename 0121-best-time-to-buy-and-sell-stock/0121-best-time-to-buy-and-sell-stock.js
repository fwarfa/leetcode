/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // left and right pointers
    // loop until right goes to the length of array
    // check if right > left
        // if it is we subtract and compare to max
        // if it is not we move left to be right and move right up
    let left = 0
    let right = 1
    let maxProfit = 0
    
    while (right < prices.length) {
        if (prices[left] < prices[right]) {
            maxProfit = Math.max(maxProfit, prices[right] - prices[left])
            right++
        } else {
            left = right
            right ++
        }
    }
    return maxProfit
};