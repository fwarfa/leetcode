/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    tempArray = s.split(' ')
    for (let i = 0; i < tempArray.length; i++) {
        let word = tempArray[i].split('')
        let left = 0, right = word.length - 1;
        while (left < right) {
            let temp = word[right]
            word[right] = word[left]
            word[left] = temp
            left++
            right--
        }
        tempArray[i] = word.join('')
    }
    return tempArray.join(' ')
};