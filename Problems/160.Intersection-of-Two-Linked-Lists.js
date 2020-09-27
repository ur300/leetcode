/* https://leetcode.com/problems/intersection-of-two-linked-lists/ */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    var currA = headA, 
        currB = headB, 
        listAFinished = false, 
        listBFinished = false;
    
    while (currA !== null && currB !== null) {
        
        if(currA === currB && listAFinished && listBFinished) {
            return currA;
        }
        currA = currA.next;
        currB = currB.next;

        if(currA === null && !listAFinished) {
            listAFinished = true;
            currA = headB;
        }

        if(currB === null && !listBFinished) {      
            listBFinished = true;
            currB = headA;
        }
        
    }
    
    return null;
};