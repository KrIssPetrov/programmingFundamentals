function replaceChars(str) {

    let strArr = str.split('');
    let currChar = '';
    let uniqueChar = []
    for (let char of strArr) {
        if (char !== currChar) {
            currChar = char;
            uniqueChar.push(currChar);
        }
    }

    console.log(uniqueChar.join(''));

}
replaceChars('aaaaabbbbbcdddeeeedssaa');