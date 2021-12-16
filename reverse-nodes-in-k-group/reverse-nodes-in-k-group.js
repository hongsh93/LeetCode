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

var reverseKGroup = function(head, k) {
    let l=0
    let node = head
    while (node) {
        l++
        node = node.next
    }
    
    let res = new ListNode()
    res.next = head
    let firstNode = res
    node = head
    let i=1
    while (node && node.next) {
        if (i%k !== 0) {
            let temp = node.next
            node.next = temp.next
            temp.next = firstNode.next
            firstNode.next = temp
            i++
        }
        else if (i%k === 0 && (l-i)/k >= 1){
            firstNode = node
            node = node.next
            i++
        }
        else {
            firstNode = node
            node = node.next
            break
        }
    }
    return res.next
}


// var reverseKGroup = function(head, k) {
//     let stack = [];
//     let newNode = new ListNode(-1);
//     let temp = newNode;
    
//     while(head) {
//         for(let i = 0; i < k && head; i++) {
//             stack.push(head);
//             head = head.next;
//         }
        
//         if(stack.length === k) {
//             while(stack.length > 0) {
//                 temp.next = stack.pop();
//                 temp = temp.next;
//             }
//             temp.next = head;
//         }
//     }
//     return newNode.next;
// };