/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // 2 pointer solution
    // max var
    // starts from 0 and 1
    // if right is greater do a compare of what was previously  in max
    let max = 0
    let l = 0
    let r = 1
    
    while (r < prices.length) {
        if (prices[r] < prices[l]) {
            l = r
            r++
        } else {
            max = Math.max(max, prices[r] - prices[l])
            r++
        }
    }
    return max
};