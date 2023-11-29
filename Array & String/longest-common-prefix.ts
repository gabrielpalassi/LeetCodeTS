function longestCommonPrefix(strs: string[]): string {
    let result: string = strs[0];

    for (let i = 1; i < strs.length; i++) {
        while (!strs[i].startsWith(result)) {
            result = result.slice(0, result.length - 1);
        }
    }
    
    return result;   
}