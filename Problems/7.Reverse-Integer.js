/* https://leetcode.com/problems/reverse-integer/ */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const isNegative = x < 0;
    const min = Math.pow(-2, 31);
    const max = Math.pow(2, 31) - 1;
    
    let str = '';
    
    if (isNegative) {
        x *= -1;
    }
    
    str = x + '';
    
    let result = '';
    
    for (let i = str.length -1; i >=0; --i) {
        result += str[i];
    }
    
    result = isNegative ? result * -1 : result * 1;
    if (result > max || result < min) {
        return 0;    
    }
    return result;
};