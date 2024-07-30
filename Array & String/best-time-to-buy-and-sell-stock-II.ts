function maxProfit(prices: number[]): number {
  let maxReturn: number = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) maxReturn += prices[i] - prices[i - 1];
  }

  return maxReturn;
}
