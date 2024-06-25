/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
        //
    let splitPath = path.split('/')
    let res = []
    for (let i = 0; i < splitPath.length; i++) {
        if (splitPath[i] === '' || splitPath[i] ==='.' || splitPath[i] === '/') {
            continue
        } else if (splitPath[i] === '..') {
            res.pop()
        } else {
            res.push(splitPath[i])
        }
    }
    
    return '/' + res.join('/')
};