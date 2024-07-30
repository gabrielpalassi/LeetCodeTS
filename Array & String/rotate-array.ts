function rotate(nums: number[], k: number): void {
  while (k > 0) {
    nums.unshift(nums.pop()!);
    k--;
  }
}
