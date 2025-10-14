function removeDuplicates(nums: number[]): number {
  let left = 0,
    right = 0;

  while (right < nums.length) {
    const prev = nums[right - 1];
    const curr = nums[right];

    right += 1;

    if (curr === prev) {
      continue;
    }

    nums[left] = curr;
    left += 1;
  }

  return left;
}
