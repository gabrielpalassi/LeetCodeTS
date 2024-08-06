function setZeroes(matrix: number[][]): void {
  const rowsSet: Set<number> = new Set();
  const columnsSet: Set<number> = new Set();

  matrix.forEach((array, row) => {
    array.forEach((number, column) => {
      if (number === 0) {
        rowsSet.add(row);
        columnsSet.add(column);
      }
    });
  });

  matrix.forEach((array, row) => {
    array.forEach((_, column) => {
      if (rowsSet.has(row) || columnsSet.has(column)) matrix[row][column] = 0;
    });
  });
}
