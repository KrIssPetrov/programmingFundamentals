function intOrFloat(num1, num2, num3) {
    let result = num1 + num2 + num3;
    let resultToStr = String(result);
    let isFloat = false;

    for (i = 0; i <= resultToStr.length; i++) {
        if (resultToStr[i] == '.') {
            isFloat = true;
            break;
        }

    }
    if (isFloat) {
        console.log(`${result} - Float`);
    } else {
        console.log(`${result} - Integer`);
    }
}
intOrFloat(9, 100, 1.1);