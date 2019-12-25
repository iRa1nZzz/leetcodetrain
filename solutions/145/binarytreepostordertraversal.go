/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
 func postorderTraversal(root *TreeNode) []int {
	if root == nil {
		return []int{}
	}

	traversal := make([]int, 0)
	stack := make([]*TreeNode, 0)

	current := root
	for current != nil || len(stack) > 0 {
		for current != nil {
			traversal = append(traversal, current.Val)
			stack = append(stack, current)
			current = current.Right
		}
		current = stack[len(stack)-1]
		stack = stack[:len(stack)-1]
		current = current.Left
	}
	reverse(traversal)
	return traversal
}

func reverse(nums []int) {
	for i := 0; i < len(nums)/2; i++ {
		nums[i], nums[len(nums)-1-i] = nums[len(nums)-1-i], nums[i]
	}
}