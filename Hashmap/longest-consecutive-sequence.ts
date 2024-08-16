function longestConsecutive(nums: number[]): number {
  const set: Set<number> = new Set(nums);
  let result = 0;

  for (let num of set) {
    if (set.has(num - 1)) continue;

    let count = 1;
    while (set.has(num + 1)) {
      count++;
      num++;
    }
    result = Math.max(count, result);
  }

  return result;
}
