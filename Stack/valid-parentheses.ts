function isValid(s: string): boolean {
  const bracketPairs: Map<string, string> = new Map([
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
  ]);
  const openBrackets: string[] = [];

  for (const character of s) {
    if (bracketPairs.has(character)) openBrackets.push(character);
    else if (bracketPairs.get(openBrackets.pop()!) !== character) return false;
  }

  return openBrackets.length === 0 ? true : false;
}
