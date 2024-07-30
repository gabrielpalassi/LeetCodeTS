function removeDuplicates(nums: number[]): number {
  let currentNum: number = nums[0];
  let numCount: number = 0;
  let localNums: number[] = [];

  nums.forEach((num) => {
    if (num !== currentNum) {
      currentNum = num;
      numCount = 1;
    } else {
      numCount++;
    }
    if (numCount <= 2) {
      localNums.push(num);
    }
  });

  nums.splice(0, nums.length, ...localNums);

  return nums.length;
}
