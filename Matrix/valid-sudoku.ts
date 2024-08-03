function isValidSudoku(board: string[][]): boolean {
  const subBoxSetsArray: Set<string>[] = Array.from(
    { length: 3 },
    () => new Set(),
  );
  const columnSetsArray: Set<string>[] = Array.from(
    { length: 9 },
    () => new Set(),
  );
  const rowSet: Set<string> = new Set();

  for (let row = 0; row < 9; row++) {
    if (row === 3 || row === 6) for (const set of subBoxSetsArray) set.clear();
    rowSet.clear();

    for (let column = 0; column < 9; column++) {
      const value = board[row][column];
      const valueIsEmpty = value === ".";

      if (rowSet.has(value) && !valueIsEmpty) return false;
      rowSet.add(value);

      if (columnSetsArray[column].has(value) && !valueIsEmpty) return false;
      columnSetsArray[column].add(value);

      const subBoxSetsIndex = Math.floor(column / 3);
      if (subBoxSetsArray[subBoxSetsIndex].has(value) && !valueIsEmpty)
        return false;
      subBoxSetsArray[subBoxSetsIndex].add(value);
    }
  }

  return true;
}
