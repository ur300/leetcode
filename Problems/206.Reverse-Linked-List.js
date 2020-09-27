/* https://leetcode.com/problems/reverse-linked-list/ */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head) return head;
    var curr = head.next; 
    head.next = null;
    
    while (curr !== null) {
        var tmp = curr.next;
        curr.next = head;
        head = curr;
        curr = tmp;
    }
    
    return head; 
};

function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
}