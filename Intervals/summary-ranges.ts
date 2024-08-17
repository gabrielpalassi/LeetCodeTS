function summaryRanges(nums: number[]): string[] {
  const result: Array<string> = [];

  for (
    let startIndex = 0, endIndex = 0;
    startIndex < nums.length;
    startIndex = ++endIndex
  ) {
    while (
      nums[endIndex + 1] - (endIndex + 1 - startIndex) ===
      nums[startIndex]
    )
      endIndex++;

    result.push(
      startIndex === endIndex
        ? `${nums[startIndex]}`
        : `${nums[startIndex]}->${nums[endIndex]}`,
    );
  }

  return result;
}
