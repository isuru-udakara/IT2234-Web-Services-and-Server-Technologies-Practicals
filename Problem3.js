function getMaxNumber(num){
    if (num < 10) return -1;

    const digits = String(num).split('');
    digits.sort((a, b) => b - a);
    return parseInt(digits.join(''), 10);
}