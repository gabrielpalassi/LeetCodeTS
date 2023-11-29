function reverseWords(s: string): string {
    let words: string[] = s.split(' ').filter(word => word !== '');
    let result: string = '';

    for (let i = words.length - 1; i >= 0; i--) {
        result += words[i] + ' ';
    }
    
    return result.trim();
}