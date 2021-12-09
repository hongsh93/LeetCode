/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    let stack = []
    let len = 0
    let temp = head
    
    while (temp) {
        stack.push(temp)
        temp = temp.next
        len++
    }
    k = k%len
    if (!head || !head.next || k===0) {
        return head
    }
    
    let res = stack[stack.length - k]
    let node = res
    for (let i=0; i<k-1; i++) {
        node = node.next
    }
    
    for (let i=0; i<len-k; i++) {
        node.next = head
        head = head.next
        node = node.next
    }
    node.next = null
    return res
};