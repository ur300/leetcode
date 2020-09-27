/* https://leetcode.com/problems/most-common-word/ */

/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(par, banned) {
    const regex = /[!?',;.]/g;
  
    const words = par.replace(regex, ' ').toLowerCase().split(' '),
        index = {};
  
      words.forEach(w => {
          if(w !== '' && index.hasOwnProperty(w)) {
              index[w] = ++index[w];
          }
          else if(w !== ''){
              index[w] = 1;
          }

      });
    
    let result = '', maxFreq = 0;
    
    for (let [key, value] of Object.entries(index)) {
      if(banned.indexOf(key) == -1 && value > maxFreq) {
          maxFreq = value;
          result = key;
      }
    }
    
    return result;
};