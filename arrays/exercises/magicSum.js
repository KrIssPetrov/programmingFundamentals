function magicSum(arr, magicNum) {
    for (i = 0; i < arr.length; i++) {
        let currentNum = arr[i];

        for (pairedNum = i + 1; pairedNum < arr.length; pairedNum++) {
            let numToBeChecked = arr[pairedNum]
            if (currentNum + numToBeChecked == magicNum) {
                console.log(currentNum + ' ' + numToBeChecked);
            }
        }
    }
}
//magicSum([1, 7, 6, 2, 19, 23], 8);
magicSum([14, 20, 60, 13, 7, 19, 8],

    27)