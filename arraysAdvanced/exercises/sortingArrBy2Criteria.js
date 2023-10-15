function sortingBy2Criteria(arr) {

    let sortedArr = arr.sort((a, b) => a.length - b.length || a.localeCompare(b));
    console.log(sortedArr.join('\n'));
}
sortingBy2Criteria(['alpha', 'beta', 'gamma'])