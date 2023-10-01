function specialNumbers(n) {
    let isSPecial = false;

    for (i = 1; i <= n; i++) {
        let currentNum = String(i);
        let sum = 0;
        for (j = 0; j < currentNum.length; j++) {
            sum += Number(currentNum[j]);
        }
        if (sum == 5 || sum == 7 || sum == 11) {
            isSPecial = true;
        } else {
            isSPecial = false;
        }

        console.log(`${i} -> ${isSPecial ? 'True' : 'False'}`);
    }
}
specialNumbers(15)