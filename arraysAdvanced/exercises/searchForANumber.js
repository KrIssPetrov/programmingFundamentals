function searchForANumber(arr1, arr2) {

    [numsToTake, numsToDelete, digitToSearch] = arr2;
    let newArr = arr1.slice(0, numsToTake);
    newArr.splice(0, numsToDelete);
    let count = 0;

    for (digit of newArr) {

        if (digit == digitToSearch) {
            count++
        }
    }

    console.log(`Number ${digitToSearch} occurs ${count} times.`);
}
searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3])