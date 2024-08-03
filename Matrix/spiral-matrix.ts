function spiralOrder(matrix: number[][]): number[] {
  const rowsSet: Set<number> = new Set(),
    columnsSet: Set<number> = new Set();
  const directions = [
    { row: 0, column: 1 },
    { row: 1, column: 0 },
    { row: 0, column: -1 },
    { row: -1, column: 0 },
  ];
  const result: number[] = [];

  for (
    let row = 0, column = 0, directionIndex = 0;
    !rowsSet.has(row) &&
    !columnsSet.has(column) &&
    row < matrix.length &&
    row > -1 &&
    column < matrix[0].length &&
    column > -1;
    row += directions[directionIndex].row,
      column += directions[directionIndex].column
  ) {
    result.push(matrix[row][column]);

    if (
      rowsSet.has(row + directions[directionIndex].row) ||
      columnsSet.has(column + directions[directionIndex].column) ||
      !(
        row + directions[directionIndex].row < matrix.length &&
        row + directions[directionIndex].row > -1
      ) ||
      !(
        column + directions[directionIndex].column < matrix[0].length &&
        column + directions[directionIndex].column > -1
      )
    ) {
      if (directions[directionIndex].row === 0) rowsSet.add(row);
      else columnsSet.add(column);
      directionIndex = (directionIndex + 1) % 4;
    }
  }

  return result;
}
