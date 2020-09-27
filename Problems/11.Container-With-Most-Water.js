/* https://leetcode.com/problems/container-with-most-water/ */

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    const n = height.length;
    
    if(n == 2) return Math.min(height[0], height[1]);
    
    let maxL = height[0],
        maxR = height[n - 1],
        i = 0,
        minH = Math.min(maxL, maxR),
        result = (n - 1 - i) * minH;
    
    for (; i < n; ++i) {
        if (height[i] > maxL) maxL = height[i];
        
        tmpMin = Math.min(maxL, maxR);
        let tmpArea = (n - 1 - i) * tmpMin;
        
        if(tmpArea > result) result = tmpArea;
        
        for (let j = n - 1; j > i; --j) {
            var maxR2 = height[j];
            
            tmpMin2 = Math.min(maxL, maxR2);
            let tmpArea2 = (j - i) * tmpMin2;

            if(tmpArea2 > result) result = tmpArea2;
        }
    }
    
    return result;
};