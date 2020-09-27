/* https://leetcode.com/problems/valid-parentheses/ */

/**
 * @param {string} s
 * @return {boolean}
 */
const symbolsMap = {'(': ')', '{': '}', '[': ']'};

var isValid = function(s) {
    if (s === '') return true;
    let stack = [];
    
    for(let i = 0; i < s.length; ++i){
        const char = s[i];
        
        if(char in symbolsMap) {
            stack.push(char);
        }
        else {
            if(stack.length === 0) {
                return false;
            }
            else { 
                const lastOnStack = stack[stack.length-1];
                
                if (symbolsMap[lastOnStack] === char) {
                    stack.pop();
                }
                else {
                    return false;
                }
            }
        }
    }
    return stack.length === 0;
};