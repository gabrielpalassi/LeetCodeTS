function canJump(nums: number[]): boolean {
  let stepsLeft: number = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (stepsLeft === 0) return false;
    stepsLeft = Math.max(stepsLeft - 1, nums[i]);
  }

  return true;
}
