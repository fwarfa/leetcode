/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    for (let i = 0; i < image.length; i++) {
        let subArray = image[i]
        let left = 0, right = image[i].length - 1;
        while (left < right) {
            let temp = subArray[right]
            subArray[right] = subArray[left]
            subArray[left] = temp
            left++
            right--
        }
        let index = 0, length = image[i].length;
        while (index < length) {
            if (subArray[index] === 0) {
                subArray[index] = 1
            } else if (subArray[index] === 1) {
                subArray[index] = 0
            }
            index++
        }
        image[i] = subArray
    }
    return image
};