function minWindow(s: string, t: string): string {
  if (t.length > s.length) return "";

  const needMap = new Map<string, number>();
  for (const char of t) needMap.set(char, (needMap.get(char) || 0) + 1);
  const needCount = needMap.size;
  const haveMap = new Map<string, number>();
  let haveCount = 0;
  let result: [leftIndex: number, rightIndex: number] = [0, Infinity];

  for (let leftIndex = 0, rightIndex = 0; rightIndex < s.length; rightIndex++) {
    if (!needMap.has(s[rightIndex])) continue;

    haveMap.set(s[rightIndex], (haveMap.get(s[rightIndex]) || 0) + 1);
    if (haveMap.get(s[rightIndex]) === needMap.get(s[rightIndex]))
      haveCount += 1;

    while (haveCount === needCount) {
      if (rightIndex - leftIndex < result[1] - result[0])
        result = [leftIndex, rightIndex];

      haveMap.set(s[leftIndex], haveMap.get(s[leftIndex])! - 1);
      if (haveMap.get(s[leftIndex])! < needMap.get(s[leftIndex])!)
        haveCount -= 1;
      leftIndex++;
    }
  }

  return result[1] - result[0] === Infinity
    ? ""
    : s.substring(result[0], result[1] + 1);
}
