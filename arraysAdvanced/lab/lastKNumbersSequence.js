function sequenseOfLastK(n, k) {

    let sequenceArr = [1];

    for (i = 0; i < n - 1; i++) {
        if (sequenceArr.length == 1) {
            sequenceArr.push(1)
        } else if (sequenceArr.length <= k) {
            let result = 0;
            for (num of sequenceArr) {
                result += num;
            }
            sequenceArr.push(result)
        } else {
            let result = 0;
            let sliced = sequenceArr.slice(-k);
            for (num of sliced) {
                result += num;
            }
            sequenceArr.push(result);
        }
    }
    console.log(sequenceArr.join(' '));
}
//sequenseOfLastK(6, 3);
sequenseOfLastK(8, 2)