function threeSum(nums: number[]): number[][] {
  const triplets: number[][] = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let leftIndex = i + 1;
    let rightIndex = nums.length - 1;

    while (leftIndex < rightIndex) {
      const sum = nums[i] + nums[leftIndex] + nums[rightIndex];
      if (sum === 0) {
        triplets.push([nums[i], nums[leftIndex], nums[rightIndex]]);
        while (nums[leftIndex] === nums[leftIndex + 1]) leftIndex++;
        leftIndex++;
        while (nums[rightIndex] === nums[rightIndex - 1]) rightIndex--;
        rightIndex--;
      } else if (sum < 0) {
        leftIndex++;
      } else {
        rightIndex--;
      }
    }
  }

  return triplets;
}
