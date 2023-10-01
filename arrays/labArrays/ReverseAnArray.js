function reverseAnArray(n, array) {

    let newArr = [];

    for (i = n - 1; i >= 0; i--) {
        newArr.push(array[i])
        //console.log(newArr);
    }

    console.log(newArr.join(' '));

}
reverseAnArray(3, [10, 20, 30, 40, 50])