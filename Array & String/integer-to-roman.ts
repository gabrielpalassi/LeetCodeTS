function intToRoman(num: number): string {
    const intToRomanMap: { [key: number]: string } = {
        1: 'I',
        4: 'IV',
        5: 'V',
        9: 'IX',
        10: 'X',
        40: 'XL',
        50: 'L',
        90: 'XC',
        100: 'C',
        400: 'CD',
        500: 'D',
        900: 'CM',
        1000: 'M'
    };
    let result: string = '';
    
    Object.keys(intToRomanMap).reverse().forEach((key: string) => {
        result += intToRomanMap[Number(key)].repeat(Math.floor(num / Number(key)));
        num %= Number(key);
    });
    
    return result;
}