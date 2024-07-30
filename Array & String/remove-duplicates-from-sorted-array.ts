function removeDuplicates(nums: number[]): number {
  const localNums: number[] = nums.filter(
    (num, index) => num !== nums[index - 1],
  );
  nums.splice(0, nums.length, ...localNums);
  return nums.length;
}
