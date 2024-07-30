function jump(nums: number[]): number {
  if (nums.length === 1) return 0;

  let jumpCount: number = 1;
  let maxIndexOfCurrentJump: number = nums[0];
  let maxReachableIndexWithinJump: number = nums[0];

  for (let i = 1; i < nums.length - 1; i++) {
    if (maxIndexOfCurrentJump >= nums.length - 1) return jumpCount;

    maxReachableIndexWithinJump = Math.max(
      maxReachableIndexWithinJump,
      i + nums[i],
    );

    if (i === maxIndexOfCurrentJump) {
      maxIndexOfCurrentJump = maxReachableIndexWithinJump;
      jumpCount++;
    }
  }

  return jumpCount;
}
