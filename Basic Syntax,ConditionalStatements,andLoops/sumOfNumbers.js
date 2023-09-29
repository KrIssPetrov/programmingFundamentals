function sumOfNumbers(n) {
    let sum = 0;
    let numbers = Number(n * 2);
    for (i = 1; i <= numbers; i++) {
        if (i % 2 !== 0) {
            sum += i;
            console.log(i);
        }

    }
    console.log("Sum: "+ sum);

}
sumOfNumbers(3);
console.log("------");
sumOfNumbers(5);
console.log("------");
sumOfNumbers(10);