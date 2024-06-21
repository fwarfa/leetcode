/**
 * // Definition for a _Node.
 * function Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function(root) {
    // handle edge case
    if (!root) return undefined
    
    let first = null
    let last = null
    
    function inPlaceOrder(node) {
        if (node) {
            inPlaceOrder(node.left) // stack continues here

            if (last === null) {
                // will only be hit first time after intialization
                first = node
            } else {
                // for 1 both null
                // takes care of currents before and previous after
                node.left = last
                last.right = node
            }

            last = node

            inPlaceOrder(node.right)
        }
    }
    
    inPlaceOrder(root)
    
    first.left = last
    last.right = first
    
    return first
};