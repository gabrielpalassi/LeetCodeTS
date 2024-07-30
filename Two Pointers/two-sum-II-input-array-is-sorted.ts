function twoSum(numbers: number[], target: number): number[] {
  let leftIndex = 0;
  let rightIndex = numbers.length - 1;

  while (numbers[leftIndex] + numbers[rightIndex] !== target) {
    if (numbers[leftIndex] + numbers[rightIndex] > target) rightIndex--;
    else if (numbers[leftIndex] + numbers[rightIndex] < target) leftIndex++;
  }

  return [leftIndex + 1, rightIndex + 1];
}
