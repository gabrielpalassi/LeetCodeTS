function wordPattern(pattern: string, s: string): boolean {
  const sArray = s.split(" ");
  if (pattern.length !== sArray.length) return false;

  const sMap: Map<string, string> = new Map();
  const patternMap: Map<string, string> = new Map();

  for (let i = 0; i < s.length; i++) {
    if (sMap.has(sArray[i])) {
      if (sMap.get(sArray[i]) !== pattern[i]) return false;
    } else {
      sMap.set(sArray[i], pattern[i]);
    }
    if (patternMap.has(pattern[i])) {
      if (patternMap.get(pattern[i]) !== sArray[i]) return false;
    } else {
      patternMap.set(pattern[i], sArray[i]);
    }
  }

  return true;
}
