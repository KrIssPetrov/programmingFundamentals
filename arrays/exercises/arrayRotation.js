function arrayRotation(arr, rotations) {

    for (i = 0; i < rotations; i++) {
        let firstRot = arr.shift();
        arr.push(firstRot);
    }
    console.log(arr.join(' '));
}
//arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([32, 21, 61, 1], 4);