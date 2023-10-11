function factorial(num1, num2) {

    let factorial1 = factorial(num1);
    let factorial2 = factorial(num2);
    console.log((devide(factorial1, factorial2)));

    function factorial(a) {
        let sum = 1;

        for (i = a ; i > 1; i--) {
            sum *= i;
        }
        return sum

    }

    function devide(a, b) {
        return a / b;

    }
}
factorial(6, 2);