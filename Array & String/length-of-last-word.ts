function lengthOfLastWord(s: string): number {
    let result: number = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === ' ' && result) {
            break;
        } else if (s[i] !== ' ') {
            result++;
        }
    }

    return result;
}