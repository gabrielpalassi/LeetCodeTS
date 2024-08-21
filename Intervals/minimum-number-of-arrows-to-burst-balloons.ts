function findMinArrowShots(points: number[][]): number {
  points.sort((a, b) => a[0] - b[0]);
  let result = 1;
  let intersection: [number, number] = [points[0][0], points[0][1]];

  for (const point of points) {
    if (point[0] <= intersection[1]) {
      intersection[0] = Math.max(intersection[0], point[0]);
      intersection[1] = Math.min(intersection[1], point[1]);
    } else {
      intersection = [point[0], point[1]];
      result++;
    }
  }

  return result;
}
