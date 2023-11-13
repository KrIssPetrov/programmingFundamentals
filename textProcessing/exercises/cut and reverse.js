function cutAndReverse(str) {

    let length = str.length;
    let firstHalf = [].reverse();
    let secondHalf = [].reverse()

    for (let char = 0; char < length; char++) {
        if (char < length / 2) {
            firstHalf.push(str[char])
        } else {
            secondHalf.push(str[char])
        }
    }
    firstHalf = firstHalf.reverse()
    secondHalf = secondHalf.reverse()
    console.log(`${firstHalf.join('')}\n${secondHalf.join('')}`);

}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')