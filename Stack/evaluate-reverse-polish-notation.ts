const operators: readonly string[] = ["+", "-", "*", "/"] as const;

function evalRPN(tokens: string[]): number {
  if (tokens.length === 1) return Number(tokens[0]);
  return evaluateOperation(tokens.pop()!, tokens);
}

function evaluateOperation(operator: string, tokens: string[]): number {
  let left: number,
    right: number,
    result: number,
    poppedToken: string = tokens.pop()!;

  if (!operators.includes(poppedToken)) right = Number(poppedToken);
  else right = evaluateOperation(poppedToken, tokens);

  poppedToken = tokens.pop()!;

  if (!operators.includes(poppedToken)) left = Number(poppedToken);
  else left = evaluateOperation(poppedToken, tokens);

  switch (operator) {
    case "+":
      result = left + right;
      break;
    case "-":
      result = left - right;
      break;
    case "*":
      result = left * right;
      break;
    case "/":
      result = left / right;
      break;
    default:
      throw new Error(`Invalid operator: ${operator}.`);
  }

  return result > 0 ? Math.floor(result) : Math.ceil(result);
}
