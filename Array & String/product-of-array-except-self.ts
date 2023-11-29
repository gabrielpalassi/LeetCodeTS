function productExceptSelf(nums: number[]): number[] {
    const numberOfZeros: number = nums.filter(num => num === 0).length;

    if ( numberOfZeros > 1) {
        return nums.map(num => 0);
    } else if (numberOfZeros === 1) {
        const totalProductWithoutZero: number = nums.filter(num => num !== 0).reduce((accumulator, current) => accumulator * current, 1);

        nums.map((num, index) => {
            if (num === 0) {
                nums[index] = totalProductWithoutZero;
            } else {
                nums[index] = 0;
            }
        });

        return nums;
    } else {
        const totalProduct: number = nums.reduce((accumulator, current) => accumulator * current, 1);

        nums.map((num, index) => {
            nums[index] = totalProduct / num;
        });

        return nums;
    }
}