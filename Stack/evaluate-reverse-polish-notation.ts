const operators: readonly string[] = ["+", "-", "*", "/"] as const;

function evalRPN(tokens: string[]): number {
  if (tokens.length === 1) return Number(tokens[0]);
  return operate(tokens.pop()!, tokens);
}

function operate(operator: string, tokens: string[]): number {
  let left: number,
    right: number,
    result: number,
    poppedToken: string = tokens.pop()!;

  if (!operators.includes(poppedToken)) right = Number(poppedToken);
  else right = operate(poppedToken, tokens);

  poppedToken = tokens.pop()!;

  if (!operators.includes(poppedToken)) left = Number(poppedToken);
  else left = operate(poppedToken, tokens);

  switch (operator) {
    case "+":
      result = left! + right!;
      return result > 0 ? Math.floor(result) : Math.ceil(result);
    case "-":
      result = left! - right!;
      return result > 0 ? Math.floor(result) : Math.ceil(result);
    case "*":
      result = left! * right!;
      return result > 0 ? Math.floor(result) : Math.ceil(result);
    case "/":
      result = left! / right!;
      return result > 0 ? Math.floor(result) : Math.ceil(result);
    default:
      throw new Error(`Invalid operator: ${operator}.`);
  }
}
