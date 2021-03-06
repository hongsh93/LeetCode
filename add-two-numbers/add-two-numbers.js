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
    let carry = 0
    let node = new ListNode()
    let res = node
    while(l1 || l2 || carry === 1) {
        // console.info(l1, l2, res)
        let nextNode = new ListNode()
        node.next = nextNode
        node = node.next
        let temp = 0
        if (l1) {
            temp += l1.val
            l1 = l1.next
        }
        if (l2) {
            temp += l2.val
            l2 = l2.next
        }
        temp += carry
        if (temp > 9) {
            temp -= 10
            carry = 1
        }
        else {
            carry = 0
        }
        node.val = temp
    }
    return res.next
}







































// var addTwoNumbers = function(l1, l2) {
//     let res = new ListNode();
//     let l1_node = l1
//     let l2_node = l2
//     let res_node = res
    
//     let plus_one = 0
//     let cur_val = 0
//     while (l1_node || l2_node || plus_one) {
//         if (l1_node) {
//             cur_val += l1_node.val
//             l1_node = l1_node.next
//         }
//         if (l2_node) {
//             cur_val += l2_node.val
//             l2_node = l2_node.next
//         }
//         cur_val += plus_one
        
//         if (cur_val > 9) {
//             plus_one = 1
//             cur_val -= 10
//         }
//         else {
//             plus_one = 0
//         }
        
//         if (cur_val !== 0 || l1_node !== null || l2_node !== null || plus_one === 1) {
//             // console.info(cur_val, l1_node, l2_node, plus_one)
//             res_node.val = cur_val
//             if (l1_node !== null || l2_node !== null || plus_one === 1) {
//                 res_node.next = new ListNode()
//                 res_node = res_node.next
//             }
        
//             cur_val = 0 
//         }
//     }
    
//     return res
// };