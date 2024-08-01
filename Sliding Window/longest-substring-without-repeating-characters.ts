function lengthOfLongestSubstring(s: string): number {
  let result = 0;
  let rightIndex = 0;
  const set = new Set<string>();

  for (let leftIndex = 0; leftIndex < s.length; leftIndex++) {
    if (rightIndex < leftIndex) {
      rightIndex = leftIndex;
      set.clear();
    }

    set.add(s[leftIndex]);
    while (rightIndex + 1 < s.length && !set.has(s[rightIndex + 1])) {
      set.add(s[rightIndex + 1]);
      rightIndex++;
    }
    set.delete(s[leftIndex]);

    result = Math.max(result, rightIndex - leftIndex + 1);
  }

  return result;
}
