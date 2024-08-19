function insert(intervals: number[][], newInterval: number[]): number[][] {
  const result: number[][] = [];

  let spliceIndex = intervals.length;
  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i][0] > newInterval[0]) {
      spliceIndex = i;
      break;
    }
  }
  intervals.splice(spliceIndex, 0, newInterval);

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
