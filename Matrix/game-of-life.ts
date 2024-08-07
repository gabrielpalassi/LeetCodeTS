function gameOfLife(board: number[][]): void {
  const boardCopy: number[][] = board.map((array) => [...array]);
  board.forEach((array, row) => {
    array.forEach((_, column) => {
      board[row][column] = nextValue(boardCopy, row, column);
    });
  });
}

function nextValue(board: number[][], row: number, column: number): number {
  const directions = [
    { row: 0, column: 1 },
    { row: 1, column: 0 },
    { row: 0, column: -1 },
    { row: -1, column: 0 },
    { row: 1, column: 1 },
    { row: 1, column: -1 },
    { row: -1, column: 1 },
    { row: -1, column: -1 },
  ];

  let liveNeighbors = 0;
  for (const direction of directions) {
    const newRow = row + direction.row;
    const newColumn = column + direction.column;
    if (
      newRow > -1 &&
      newRow < board.length &&
      newColumn > -1 &&
      newColumn < board[0].length &&
      board[newRow][newColumn] === 1
    ) {
      liveNeighbors++;
    }
  }

  if (board[row][column] === 1) {
    if (liveNeighbors < 2 || liveNeighbors > 3) return 0;
    return 1;
  }

  if (liveNeighbors === 3) return 1;
  return 0;
}
