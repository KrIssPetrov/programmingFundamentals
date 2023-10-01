function sumOfEvenNumbers(arr) {
    let result = 0;
    for (i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
    }

    for (num of arr) {
        if (num % 2 == 0) {
            result += num;

        }
    }
    console.log(result);


}
sumOfEvenNumbers(['1', '2', '3', '4', '5', '6']);