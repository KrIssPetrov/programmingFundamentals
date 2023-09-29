function printAndSum(num1, num2) {
    let print = "";
    let sum = 0;
    for (i = num1; i <= num2; i++) {
        print += i + " ";
        sum += Number(i);
    }

    console.log(print);
    console.log(`Sum: ${sum}`);
}
printAndSum(5, 10);