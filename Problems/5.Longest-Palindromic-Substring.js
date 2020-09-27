/* https://leetcode.com/problems/longest-palindromic-substring/ */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var result = '', max = 0;
    if (s.length === 1 || isPalindrome(s)) return s;
     
    for (let left = 0; left < s.length; ++left) {
        for(let right = s.length; right > left; --right) {
            let str = s.substring(left, right); 
            if (str.length <= max) break;
            if (isPalindrome(str) && str.length > max) {
                result = str;                   
                max = str.length;
           }
        }
    }
    
    return result;
};

const isPalindrome = s => {
    
  let i = 0, j = s.length - 1, result = true;
  while (i < j) {
      if (s[i] !== s[j]) { 
          result = false; 
          break;
      }
      
      ++i;
      --j;
  } 
    
    return result;
};