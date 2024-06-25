/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // split to array
    // if arr at idx is alpha numberic > add to new arr
    // after loop return reversed s === to string
    let res = []
    let sArr = s.split('')
    
    function isAlphaNumeric(char) {
        return /^[a-zA-Z0-9]+$/i.test(char)
    }
    
    for (let c of sArr) {
        if (isAlphaNumeric(c)) {
            res.push(c.toLowerCase())
        }
    }
    return res.join('') === res.reverse().join('')
};