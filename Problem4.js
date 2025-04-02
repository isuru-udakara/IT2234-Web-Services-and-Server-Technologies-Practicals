function HexSWC(digit) {
    switch(digit) {
        case 10: return 'A';
        case 11: return 'B';
        case 12: return 'C';
        case 13: return 'D';
        case 14: return 'E';
        case 15: return 'F';
        default: return digit.toString();
    }
}

function decimalToHex(num, callback){
    if (num < 0) return "Negative numbers not supported";
    if (num === 0) return "0";
}