function majorityElement(nums: number[]): number {
  const numsCount = new Map<number, number>();
  for (const num of nums) {
    numsCount.set(num, (numsCount.get(num) ?? 0) + 1);
    if (numsCount.get(num)! > nums.length / 2) return num;
  }
  return -1;
}
