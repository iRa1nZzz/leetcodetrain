/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
    let numLength = nums.length;
    if (numLength < 2) {
        return numLength;
    }
    for (let i = numLength - 2; i >= 0; i--) {
        if (nums[i] === nums[i + 1]) {
            nums.splice(i, 1);
        }
    }
    return nums.length;
};