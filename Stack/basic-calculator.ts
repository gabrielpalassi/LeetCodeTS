function calculate(s: string): number {
  const sArray: string[] = s.match(/(\d+|\+|\-|\(|\))/g)!;
  let index: number = 0;

  function processCalculation(): number {
    let operator: string | undefined,
      left: number | undefined,
      right: number | undefined,
      signal: number = 1;

    while (index < sArray.length && sArray[index] !== ")") {
      if (["+", "-"].includes(sArray[index])) {
        if (typeof left === "number") operator = sArray[index];
        else if (sArray[index] === "-") signal = -1;
      } else if (typeof left === "number") {
        if (sArray[index] === "(") {
          index++;
          right = signal * processCalculation();
          signal = 1;
        } else {
          right = signal * Number(sArray[index]);
          signal = 1;
        }
      } else {
        if (sArray[index] === "(") {
          index++;
          left = signal * processCalculation();
          signal = 1;
        } else {
          left = signal * Number(sArray[index]);
          signal = 1;
        }
      }

      if (
        typeof left === "number" &&
        typeof operator === "string" &&
        typeof right === "number"
      ) {
        if (operator === "+") left = left + right;
        else left = left - right;
        operator = undefined;
        right = undefined;
      }

      index++;
    }

    return left!;
  }

  return processCalculation();
}
