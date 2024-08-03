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

console.log(
  isValidSudoku([
    [".", ".", ".", ".", "8", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", "5", ".", "."],
    [".", ".", ".", ".", "4", ".", ".", "2", "."],
    [".", ".", ".", "3", ".", "9", ".", ".", "."],
    [".", ".", "1", "8", ".", ".", "9", ".", "."],
    [".", ".", ".", ".", ".", "5", "1", ".", "."],
    [".", ".", "3", ".", ".", "8", ".", ".", "."],
    [".", "1", "2", ".", "3", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "7", ".", ".", "1"],
  ]),
);
// console.log(
//   isValidSudoku([
//     ["5", "3", ".", ".", "7", ".", ".", ".", "."],
//     ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//     [".", "9", "8", ".", ".", ".", ".", "6", "."],
//     ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//     ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//     ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//     [".", "6", ".", ".", ".", ".", "2", "8", "."],
//     [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//     [".", ".", ".", ".", "8", ".", ".", "7", "9"],
//   ])
// );
// console.log(
//   isValidSudoku([
//     ["8", "3", ".", ".", "7", ".", ".", ".", "."],
//     ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//     [".", "9", "8", ".", ".", ".", ".", "6", "."],
//     ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//     ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//     ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//     [".", "6", ".", ".", ".", ".", "2", "8", "."],
//     [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//     [".", ".", ".", ".", "8", ".", ".", "7", "9"],
//   ])
// );
