function merge(intervals: number[][]): number[][] {
  const result: number[][] = [];
  intervals.sort((a, b) => a[0] - b[0]);
  let mergedInterval = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] <= mergedInterval[1]) {
      mergedInterval[1] = Math.max(mergedInterval[1], intervals[i][1]);
    } else {
      result.push(mergedInterval);
      mergedInterval = intervals[i];
    }
  }
  result.push(mergedInterval);

  return result;
}
