function removeElement(nums: number[], val: number): number {
    const localNums: number[] = nums.filter(num => num !== val);
    nums.splice(0, nums.length, ...localNums);
    return nums.length;
}