func removeDuplicates(nums []int) int {
    numberLength := len(nums)
    if numberLength < 2{
        return numberLength
    }
    
    idx := numberLength - 2
    for idx >= 0 {
        if nums[idx] == nums[idx + 1] {
            nums = append(nums[:idx], nums[idx+1:]...)
        }
        idx--
    }
    return len(nums)
}