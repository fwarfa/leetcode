/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let wordArr = word.split('')
    for (let i = 0; i < wordArr.length; i++) {
        if (wordArr[i] === ch) {
            let left = 0, right = i;
            while(left < right) {
                let temp = word[left]
                wordArr[left] = wordArr[right]
                wordArr[right] = temp
                // console.log(word)
                left++
                right--
            }
            return wordArr.join('')
        }
    }
    return wordArr.join('')
};