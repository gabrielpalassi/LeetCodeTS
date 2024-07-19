function fullJustify(words: string[], maxWidth: number): string[] {
    let result: string[] = [''];

    for (let i = 0, j = 0; i < words.length; i++) {
        if ((result[j] + words[i]).length <= maxWidth) {
            result[j] += words[i] + ' ';
        } else {
            result[j] = result[j].trim();
            if(result[j].includes(' ')) {
                while (result[j].length < maxWidth) {
                    for (let k = 0; k < result[j].length; k++) {
                        if (result[j][k] !== ' ' && result[j][k + 1] === ' ') {
                            result[j] = result[j].substring(0, k + 1) + ' ' + result[j].substring(k + 1);
                        }
                        if (result[j].length === maxWidth) break;
                    }
                }
            } else {
                while (result[j].length < maxWidth) result[j] += ' ';
            }
            j++;
            result[j] = words[i] + ' ';
        }
        if (i === words.length - 1) {
            result[j] = result[j].trim();
            while (result[j].length < maxWidth) result[j] += ' ';
        }
    }
    return result;
}