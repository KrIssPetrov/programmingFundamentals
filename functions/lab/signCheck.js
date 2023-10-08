function signCheck(num1, num2, num3) {
    let numbers = [];
    numbers.push(num1, num2, num3);
    let arrOfString = [];

    for (element of numbers) {
        arrOfString.push(String(element));
    }

    let signCheck = 0;

    for (i = 0; i < arrOfString.length; i++) {
        if (Number(arrOfString[i]) < 0) {
            signCheck++
        }
    }

    if (signCheck % 2 == 0) {
        console.log("Positive");
    } else {
        console.log('Negative');
    }
}
signCheck(5, 12, -15)