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
var mergeTwoLists = function(l1, l2) {
    let res = new ListNode()
    if (!l1 && !l2) {
        return null
    }
    
    let res_node = res
    let l1_node = l1
    let l2_node = l2
    while (l1_node || l2_node) {
        if (l2_node === null || (l1_node !== null && (l1_node.val <= l2_node.val))) {
            res_node.val = l1_node.val
            l1_node = l1_node.next
            if (l1_node !== null) {
                res_node.next = new ListNode()
                res_node = res_node.next
            }
            else {
                if (l2_node !== null) {
                    res_node.next = new ListNode()
                    res_node = res_node.next
                }
            }
        } 
        else if (l1_node === null || (l2_node !== null && (l2_node.val <= l1_node.val))) {
            res_node.val = l2_node.val
            l2_node = l2_node.next
            if (l2_node !== null) {
                res_node.next = new ListNode()
                res_node = res_node.next
            }
            else {
                if (l1_node !== null) {
                    res_node.next = new ListNode()
                    res_node = res_node.next
                }
            }
        }
    }
    return res
};