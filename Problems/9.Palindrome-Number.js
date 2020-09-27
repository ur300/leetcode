/* https://leetcode.com/problems/palindrome-number/ */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(inp) {
    if(inp < 0) return false;
    let digits = [];
    
    while (inp >= 10) {
        const lastDigit = getLastDigit(inp);
        
        digits.push(lastDigit);
        
        inp = Math.floor(inp / 10);
    }
    
    digits.push(inp);
    
    let l = digits.length, k = 0, result = true;

    for (;(l-1) !== k; ++k) {
        if (digits[k] !== digits[l-(k+1)]) {
            result = false;
            break;
        }
    }
    
    return result;
};

const getLastDigit = num => {
  const floatNum = num / 10;
  const decimal = floatNum - Math.floor(floatNum);
  return Math.ceil(Number.parseFloat(decimal).toPrecision(1) * 10);
};