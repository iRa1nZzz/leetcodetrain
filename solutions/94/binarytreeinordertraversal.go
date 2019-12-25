/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
 func inorderTraversal(root *TreeNode) []int {
	if root == nil {
		return []int{}
	}

	traversal := make([]int, 0)
	stack := make([]*TreeNode, 0)
	current := root
	for current != nil || len(stack) > 0 {
		for current != nil {
			stack = append(stack, current)
			current = current.Left
		}
		current = stack[len(stack)-1]
		stack = stack[:len(stack)-1]
		traversal = append(traversal, current.Val)
		current = current.Right
	}
	return traversal
}