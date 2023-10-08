function mathPower(number, exponent) {

    let result = 1;
    for (i = exponent; i > 0; i--) {
        result *= number;
    }
    console.log(result);
}
mathPower(2, 8)