/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function postorderTraversal (root) {
    const mValues = [];
    if (!root) {
        return mValues;
    }
    
    traversal(mValues, root);
    
    return mValues;
}

/**
 * @param {number[]} mValues
 * @param {TreeNode} root
 */
function traversal (mValues, node) {        
    if (node.left) {
        traversal(mValues, node.left);
    }
    if (node.right) {
        traversal(mValues, node.right);
    }
    mValues.push(node.val);
}