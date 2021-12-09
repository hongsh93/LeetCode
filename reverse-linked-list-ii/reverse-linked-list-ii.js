/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let ll = new ListNode(null, head)
    let leftNode = ll
    
    for (let i=1; i<left; i++) {
        leftNode = leftNode.next
    }
    
    let curr = leftNode.next
    
    for (let i=0; i<right-left; i++) {
        let temp = curr.next
        curr.next = temp.next
        temp.next = leftNode.next
        leftNode.next = temp
    }

    return ll.next
};