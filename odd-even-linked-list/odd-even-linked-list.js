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
var oddEvenList = function(head) {
    let node = head
    let len = 0
    while(node) {
        len++
        node = node.next
    }
    
    node = head
    let odd = new ListNode()
    let curOdd = odd
    let even = new ListNode()
    let curEven = even
    
    for (let i=0; i<len; i++) {
        if (i%2 === 0) {
            curOdd.next = node
            curOdd = curOdd.next
            node = node.next
        }
        else {
            curEven.next = node
            curEven = curEven.next
            node = node.next
        }
        // console.info(odd, even, curOdd, curEven)
    }
    curOdd.next = even.next
    curEven.next = null
    return odd.next
};