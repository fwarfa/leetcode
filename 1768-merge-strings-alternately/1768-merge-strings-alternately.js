/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let arr = []
    let i = 0
    let j = 0
    while (i < word1.length && j < word2.length) {
        arr.push(word1[i++])
        arr.push(word2[j++])
        // console.log(arr)
    }
    while (i < word1.length) {
        arr.push(word1[i++])
    }
    while (j < word2.length) {
        arr.push(word2[j++])
    }
    return arr.join('')
};