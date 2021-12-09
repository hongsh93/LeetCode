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
    let reverseL1 = reverse(l1)
    let reverseL2 = reverse(l2)
    
    let add = new ListNode(0)
    let curr = add
    let carry = 0
    while(reverseL1 || reverseL2 || carry === 1) {
        let a1 = reverseL1?.val ?? 0
        let a2 = reverseL2?.val ?? 0
        let sum = a1+a2+carry
        carry = sum >= 10 ? 1 : 0
        sum = sum%10
        
        let temp = new ListNode(sum)
        curr.next = temp
        curr = curr.next
        
        reverseL1 = reverseL1?.next
        reverseL2 = reverseL2?.next
    }
        
    return reverse(add.next)
};

var reverse = function(l) {
    let node = new ListNode(0, l)
    let curr = node.next
    let leftNode = node
    while(curr.next) {
        let temp = curr.next
        curr.next = temp.next
        temp.next = leftNode.next
        leftNode.next = temp
    }
    return node.next
}