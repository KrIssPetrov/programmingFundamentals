function addAndSubtract(arr) {

    let newArr = [];
    let oldArrSum = 0;
    let newArrSum = 0;

    for (i = 0; i < arr.length; i++) {
        let currentNum = arr[i];
        oldArrSum += currentNum;
        if (currentNum % 2 == 0) {
            currentNum = currentNum + i;
        } else {
            currentNum = currentNum - i;
        }
        newArrSum += currentNum;
        newArr.push(currentNum);

    }

    console.log(newArr);
    console.log(oldArrSum);
    console.log(newArrSum);

}
addAndSubtract([5, 15, 23, 56, 35])