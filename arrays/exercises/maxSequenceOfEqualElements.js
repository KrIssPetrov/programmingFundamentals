function maxSequence(array) {
    let longestArr = [];
    let firstLongArr = [];
    let maxSequence = [];
    let isFirstLong = true;

    for (i = 0; i < array.length; i++) {
        let currentNum = array[i];
        let nextNum = array[i + 1];
        let isFirstEl = true;
        if (maxSequence.length > 1) {
            isFirstEl = false;
        }
        if (currentNum == nextNum) {
            if (isFirstEl) {
                maxSequence.push(currentNum);
            }
            maxSequence.push(nextNum);

        } else if (maxSequence.length > 1 && nextNum !== currentNum) {
            if (isFirstLong) {
                firstLongArr = maxSequence;
                longestArr = maxSequence;
                maxSequence = [];
                isFirstLong = false;
            }
            if (maxSequence.length > firstLongArr.length) {
                longestArr = maxSequence;
            }
            maxSequence = [];

        }

    }
    console.log(longestArr.join(' '));
}

//maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
maxSequence([4, 4, 4, 4])
//maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3])