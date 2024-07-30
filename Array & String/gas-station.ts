function canCompleteCircuit(gas: number[], cost: number[]): number {
  let totalGas: number = 0;
  let totalCost: number = 0;
  let tank: number = 0;
  let startingStation: number = 0;

  for (let i = 0; i < gas.length; i++) {
    totalGas += gas[i];
    totalCost += cost[i];
    tank += gas[i] - cost[i];

    if (tank < 0) {
      startingStation = i + 1;
      tank = 0;
    }
  }

  return totalGas < totalCost ? -1 : startingStation;
}
