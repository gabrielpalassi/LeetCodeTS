function convert(s: string, numRows: number): string {
  if (numRows === 1) return s;

  const rows: string[] = new Array(numRows).fill("");
  let direction = 1;

  for (let i = 0, j = 0; i < s.length; i++) {
    rows[j] += s[i];
    j += direction;

    if (j === 0 || j === numRows - 1) {
      direction *= -1;
    }
  }

  return rows.join("");
}
