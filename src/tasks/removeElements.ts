function removeElements(nums: number[], val: number) {
  let left = 0,
    right = 0;

  while (right < nums.length) {
    if (nums[right] !== val) {
      nums[left] = nums[right];
      left += 1;
    }

    right += 1;
  }

  return left;
}
