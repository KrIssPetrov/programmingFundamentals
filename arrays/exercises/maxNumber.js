function maxNumber(array) {

    let result = '';

    for (i = 0; i < array.length; i++) {
        let maxNumber = Number(array[i]);
        for (numToCheck = i + 1; numToCheck < array.length; numToCheck++) {
            if (array[numToCheck] >= maxNumber) {
                maxNumber = array[numToCheck];
                i = numToCheck;
            }
        }
        result += String(maxNumber) + ' ';
    }
    console.log(result);
}
//maxNumber([1, 4, 3, 2]);
//maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41,41,34,20])