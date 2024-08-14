function isHappy(n: number): boolean {
  const set: Set<number> = new Set();

  while (n !== 1 && !set.has(n)) {
    set.add(n);
    let sum = 0;

    while (n > 0) {
      const digit = n % 10;
      n = Math.floor(n / 10);
      sum += digit ** 2;
    }

    n = sum;
  }

  return n === 1;
}
