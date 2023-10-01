function equalArrays(arr1, arr2) {

    let equal = true;
    for (i = 0; i < arr1.length; i++) {
        arr1[i] = Number(arr1[i]);
        arr2[i] = Number(arr2[i]);
    }
    let result = 0;
    for (i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            equal = false;
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            break;
        } else {
            result += arr1[i];
        }
    }

    if (equal) {
        console.log(`Arrays are identical. Sum: ${result}`);
    }

}
//equalArrays(['10', '20', '30'], ['10', '20', '30']);
//equalArrays(['1','2','3','4','5'],

//['1','2','4','4','5'])
equalArrays(['1'], ['10'])