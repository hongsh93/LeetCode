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
    let res_list = []
    let head_node = head
    while (head_node) {
        res_list.push(head_node.val)
        head_node = head_node.next
    }
    
    res_list.reverse()
    
    let res = new ListNode()
    let res_node = res
    for (let i=0; i<res_list.length; i++) {
        res_node.val = res_list[i]
        if (i !== res_list.length-1) {
            res_node.next = new ListNode()
            res_node = res_node.next
        }
    }
    
    if (res_list.length === 0) {
        return null
    }
    else {
        return res
    }
};