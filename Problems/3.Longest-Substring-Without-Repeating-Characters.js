/* https://leetcode.com/problems/longest-substring-without-repeating-characters/ */

/**
 * @param {string} s
 * @return {number}
*/
var lengthOfLongestSubstring = function(s) {
    let left = 0, 
        right = 0, 
        set = new Set(),
        max = 0;
    
    while(right < s.length) {
        if (!set.has(s[right])) {
            set.add(s[right]);      
            max = Math.max(max, set.size);
            
            right++;
        }
        else { 
            set.delete(s[left]);
            left++;
        }
    }  
    
    return max;
};