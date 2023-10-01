function amazingNumbers(num) {
    let number = 0;
    let numberAsString = String(num);
    let isAmazing = false;
    for (i = 0; i < numberAsString.length; i++) {
        number += Number(numberAsString[i])
    }
    let numberToString = String(number);

    for (i = 0; i < numberToString.length; i++) {
        if (numberToString[i] == 9) {
            isAmazing = true;
            break;
        }
    }

    if (isAmazing) {
        console.log(`${num} Amazing? True`);
    } else {
        console.log(`${num} Amazing? False`);
    }

}
amazingNumbers(1233);