/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function preorderTraversal(root){
    const mValues = [];
    if (!root){
        return mValues;
    }
    
    traversal(mValues, root);
    
    return mValues;
}

function traversal(mValues, node) {
    mValues.push(node.val);
        
    if (node.left){
        traversal(mValues, node.left);
    }
    if (node.right){
        traversal(mValues, node.right);
    }
}