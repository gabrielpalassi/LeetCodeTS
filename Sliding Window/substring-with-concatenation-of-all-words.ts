function findSubstring(s: string, words: string[]): number[] {
  const result: number[] = [];
  const wordsMap: Map<string, number> = new Map();
  for (const word of words) {
    wordsMap.set(word, (wordsMap.get(word) || 0) + 1);
  }
  const stringLength = s.length;
  const wordLength = words[0].length;

  for (let i = 0; i < wordLength; i++) {
    let leftIndex = i;
    let rightIndex = i;
    let count = 0;
    const currentMap: Map<string, number> = new Map();

    while (rightIndex + wordLength <= stringLength) {
      const word = s.substring(rightIndex, rightIndex + wordLength);
      rightIndex += wordLength;

      if (wordsMap.has(word)) {
        currentMap.set(word, (currentMap.get(word) || 0) + 1);
        count++;

        while (currentMap.get(word)! > wordsMap.get(word)!) {
          const leftWord = s.substring(leftIndex, leftIndex + wordLength);
          currentMap.set(leftWord, currentMap.get(leftWord)! - 1);
          leftIndex += wordLength;
          count--;
        }

        if (count === words.length) result.push(leftIndex);
      } else {
        currentMap.clear();
        count = 0;
        leftIndex = rightIndex;
      }
    }
  }

  return result;
}
