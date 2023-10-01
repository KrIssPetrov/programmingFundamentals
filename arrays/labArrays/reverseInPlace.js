function reverseInPlace(array) {


    for (i = 0; i < array.length / 2; i++) {
        let k = array[i];
        let j = array.length - 1 - i;
        array[i] = array[j];
        array[j] = k;
    }
    console.log(array.join(' '));

}


//reverseInPlace(['a', 'b', 'c', 'd', 'e']);
reverseInPlace([33, 123, 0, 'dd'])