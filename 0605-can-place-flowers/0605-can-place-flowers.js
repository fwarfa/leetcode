/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let openSlots = 0
    let f = [0, ...flowerbed, 0]
    
    for (let i = 1; i < f.length - 1; i++) {
        if (f[i - 1] === 0 && f[i] === 0 && f[i + 1] === 0) {
            f[i] = 1
            openSlots++
        }
    }
    return n <= openSlots
};