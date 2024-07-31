function minSubArrayLen(target: number, nums: number[]): number {
  let sum = 0;
  let result = Number.MAX_SAFE_INTEGER;
  let leftIndex = 0;

  for (let rightIndex = 0; rightIndex < nums.length; rightIndex++) {
    sum += nums[rightIndex];
    while (sum >= target) {
      result = Math.min(result, rightIndex - leftIndex + 1);
      sum -= nums[leftIndex];
      leftIndex++;
    }
  }

  return result === Number.MAX_SAFE_INTEGER ? 0 : result;
}
