function condenseArr(arr) {

    if (arr.length > 1) {
        while (arr.length > 1) {
            let condensedArr = [];

            for (i = 0; i < arr.length - 1; i++) {
                condensedArr.push(arr[i] + arr[i + 1]);
            }
            arr = condensedArr;
        }
        console.log(arr.join());
    } else {
        console.log(arr.join());
    }
}
//condenseArr([2,10,3]);
//condenseArr([5,0,4,1,2])
condenseArr([2])