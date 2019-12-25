/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function inorderTraversal (root) {
    const mValues = []
    if (!root) {
        return mValues
    }
    
    traversal(mValues, root)
    
    return mValues
}

function traversal (mValues, node) {
    if (node.left) {
        traversal(mValues, node.left)
    }
    
    mValues.push(node.val)
    
    if (node.right) {
        traversal(mValues, node.right)
    }
}