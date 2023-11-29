function trap(height: number[]): number {
    let waterLevel: number[] = new Array(height.length).fill(0);
    let wallHeight: number = 0;

    for (let i = 0; i < height.length; i++) {
        if (height[i] >= wallHeight) {
            wallHeight = height[i];
        } else {
            waterLevel[i] = wallHeight - height[i];
        }
    }

    wallHeight = 0;

    for (let i = height.length - 1; i >= 0; i--) {
        if (height[i] >= wallHeight) {
            wallHeight = height[i];
            waterLevel[i] = 0;
        } else {
            waterLevel[i] = Math.min(waterLevel[i], (wallHeight - height[i]));
        }
    }

    return waterLevel.reduce((accumulator, current) => accumulator + current, 0);
}