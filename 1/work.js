function printDiamond(rows) {
    for (let i = 1; i <= rows; i++) {
        let str = '';
        for (let j = 1; j <= rows - i; j++) {
            str += '-';
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
            str += '*';
        }
        console.log(str);
    }
    
    for (let i = rows - 1; i >= 1; i--) {
        let str = '';
        for (let j = 1; j <= rows - i; j++) {
            str += '-';
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
            str += '*';
        }
        console.log(str);
    }
}

printDiamond(4);