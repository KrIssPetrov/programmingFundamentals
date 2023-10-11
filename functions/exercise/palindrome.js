function palindrome(input) {


    for (i = 0; i < input.length; i++) {
        let number1 = input[i];
        let num1ToStr = number1.toString();
        let num2 = '';

        for (j = num1ToStr.length - 1; j >= 0; j--) {
            num2 += num1ToStr[j];
        }

        let number2 = Number(num2);

        if (number1 == number2) {
            console.log(true);
        } else {
            console.log(false);
        }

    }

}
palindrome([123, 323, 421, 121])