function maxArea(height: number[]): number {
  let leftIndex = 0;
  let rightIndex = height.length - 1;
  let maxArea = 0;

  while (leftIndex < rightIndex) {
    maxArea = Math.max(
      maxArea,
      Math.min(height[leftIndex], height[rightIndex]) *
        (rightIndex - leftIndex),
    );
    if (height[leftIndex] < height[rightIndex]) leftIndex++;
    else rightIndex--;
  }

  return maxArea;
}
