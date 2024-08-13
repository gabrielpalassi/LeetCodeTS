function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();

  for (const string of strs) {
    const sortedString = string.split("").sort().join("");
    if (!map.has(sortedString)) map.set(sortedString, []);
    map.get(sortedString)!.push(string);
  }

  return [...map.values()];
}
