function romanToInt(s: string): number {
  const romanToIntMap: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result: number = romanToIntMap[s[s.length - 1]];

  for (let i = s.length - 2; i >= 0; i--) {
    if (romanToIntMap[s[i]] < romanToIntMap[s[i + 1]]) {
      result -= romanToIntMap[s[i]];
    } else {
      result += romanToIntMap[s[i]];
    }
  }

  return result;
}
