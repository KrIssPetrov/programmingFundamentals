function negativeOrPositive(input) {
    let newArr = []

    for (num of input) {
        let currNum = Number(num);
        if (currNum < 0) {
            newArr.unshift(num);
        } else {
            newArr.push(num)
        }
    }
    console.log(newArr.join('\n'));
}
negativeOrPositive(['7', '-2', '8', '9'])