function sumOfDigits(digit) {
    let digitToString = String(digit);
    let result = 0;

    for (i = 0; i < digitToString.length; i++) {
        result += Number(digitToString[i])
    }
    console.log(result);

}
sumOfDigits(245678)