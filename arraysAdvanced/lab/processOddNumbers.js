function processOddNumbers(arr) {
    let mapped = arr.map(x => x * 2);
    let newArr = [];

    for (i = 1; i <= mapped.length; i++) {
        if (i % 2 == 0) {
            let currNum = mapped[i - 1];
            newArr.push(currNum);
        }
    }
    console.log(newArr.reverse(). join(' '));


}
 processOddNumbers([10, 15, 20, 25]);
 processOddNumbers([3, 0, 10, 4, 7, 3])
    // for (i = 1; i <= arr.length; i++){
    //     if(i % 2 == 0){

    //         let mapped = arr[i - 1].map((x => x * 2));
    //         console.log(mapped);
    //     }
    // }