function simpleCalculator(num1, num2, operation) {
    let multiply = multiply => num1 * num2;
    let divide = divide => num1 / num2;
    let add = add => num1 + num2;
    let subtract = subtract => num1 - num2;

    let result = 0
    switch (operation) {
        case "multiply":
            result = multiply;
            break;

        case 'divide':
            result = divide;
            break;

        case 'add':
            result = add;
            break;

        case 'subtract':
            result = subtract;
            break;
    }

    console.log((result(simpleCalculator)));
}
simpleCalculator(5, 5, 'multiply');