function mergeArrays(arr1, arr2) {

    let newArr = [];

    for (i = 0; i < arr1.length; i++) {
        let sum = 0;
        let string = '';
        if (i % 2 == 0) {
            sum += Number(arr1[i]);
            sum += Number(arr2[i]);
            newArr.push(sum)
        } else {
            string = arr1[i] + arr2[i];
            newArr.push(string);
        }
    }

    console.log(newArr.join(' - '));

}
mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11'])