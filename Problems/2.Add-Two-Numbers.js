/* https://leetcode.com/problems/add-two-numbers/ */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
    var result = new ListNode(0, null),
        l3 = result,
        remainder = 0;
    
    while (l1 || l2) {
        var val1 = (l1 && l1.val) || 0, 
            val2 = (l2 && l2.val) || 0;
        
        var newVal = val1 + val2 + remainder;
        remainder = Math.floor(newVal/10);
        newVal = newVal % 10; 
        
        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
        l3.val = newVal;
        if (l1 || l2) {
            l3.next = new ListNode(0, null);            
        }
        else {
            if (remainder) {
                l3.next = new ListNode(remainder, null);
            }
            else {
                l3.next = null;
            }
        }
        l3 = l3.next
    }
    return result;
};

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}