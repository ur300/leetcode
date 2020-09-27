/* https://leetcode.com/problems/implement-queue-using-stacks/ */

/**
 * Initialize your data structure here.
 */
var Stack = function() {
    this.arr = [];    
};

Stack.prototype.push = function(x) {
    this.arr.push(x);
};

Stack.prototype.pop = function(index) {
    if(this.arr.length === 0) return null;
    
    var result = this.arr[this.arr.length - 1];
    
    this.arr.length = this.arr.length - 1;
    
    return result;
};

Stack.prototype.peek = function() {
    return this.arr[this.arr.length - 1];
};

Stack.prototype.empty = function() {
  return !this.arr.length;  
};

var MyQueue = function() {
    this.s1 = new Stack();
    this.s2 = new Stack();
    this.front = null;
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    if(this.s1.empty()) {
        this.front = x;
    } 
    
    this.s1.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if (this.s2.empty()) {
        while (!this.s1.empty()) {
            this.s2.push(this.s1.pop());
        }
    }
    
    return this.s2.pop(); 
    
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if(!this.s2.empty()) return this.s2.peek();
    return this.front;
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.s1.empty() && this.s2.empty();
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */