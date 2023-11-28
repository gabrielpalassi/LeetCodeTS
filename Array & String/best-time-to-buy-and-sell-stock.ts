function maxProfit(prices: number[]): number {
    let minPrice: number = prices[0];
    let maxReturn: number = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minPrice) minPrice = prices[i];
        if (prices[i] - minPrice > maxReturn) maxReturn = prices[i] - minPrice;
    }

    return maxReturn;
}