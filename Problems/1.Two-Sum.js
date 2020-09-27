/* https://leetcode.com/problems/two-sum/ */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hash = {};
    
    for (let i = 0; i < nums.length; ++i) {
        const tmp = target - nums[i];
        
        if (hash.hasOwnProperty(nums[i])) {
            return [hash[nums[i]], i];
        }
        
        if (!hash.hasOwnProperty(tmp)) {
            hash[tmp] = i; 
        } 
           
    }
    return [];
};