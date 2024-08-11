function canConstruct(ransomNote: string, magazine: string): boolean {
  let noteMap: Map<string, number> = new Map();
  for (const character of ransomNote)
    noteMap.set(character, (noteMap.get(character) || 0) + 1);

  for (const character of magazine) {
    if (noteMap.has(character)) {
      const count = noteMap.get(character);
      if (count === 1) noteMap.delete(character);
      else noteMap.set(character, count! - 1);
    }
  }

  return noteMap.size === 0 ? true : false;
}
