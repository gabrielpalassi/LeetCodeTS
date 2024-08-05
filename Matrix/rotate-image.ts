function rotate(matrix: number[][]): void {
  const copy: number[][] = [];
  for (const array of matrix) copy.push([...array]);

  matrix.forEach((array, rowIndex) => {
    array.forEach((_, columnIndex) => {
      matrix[columnIndex][matrix.length - rowIndex - 1] =
        copy[rowIndex][columnIndex];
    });
  });
}
