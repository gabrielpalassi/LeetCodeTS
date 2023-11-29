function hIndex(citations: number[]): number {
    let currentHIndex: number = 0;

    citations.sort((a, b) => b - a);
    citations.forEach((citationsNumber, index) => {
        if (citationsNumber >= index + 1) currentHIndex = index + 1;
    });

    return currentHIndex;
}