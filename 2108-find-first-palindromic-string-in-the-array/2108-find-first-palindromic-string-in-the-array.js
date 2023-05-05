/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for (let i = 0; i < words.length; i++) {
        let left = 0, right = words[i].length - 1;
        let word = words[i]
        while (left <= right + 1) {
            if(word[left] !== word[right]) {
                break
            } else if (left >= right) {
                return words[i]
            } else {
                left++
                right--
            }
        }
    }
    return ''
};