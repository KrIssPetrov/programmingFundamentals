function lettersChangeNumbers(str) {
    let arr = str.split(' ');
    let alphabet = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26 };
    let strings = arr.filter(index => index.length > 1);
    let finalresult = 0;
    for (let string of strings) {
        // let currResult = 0;
        let digitStr = '';
        let firstLetter = string[0];
        let lastLetter = string[string.length - 1];
        
        for(let digit of string){
            if(!/[A-Za-z]/.test(digit)){
                digitStr += digit;
            }
        }
        digitStr = Number(digitStr);
        if (/[A-Z]/.test(firstLetter)) {
            digitStr = digitStr / alphabet[firstLetter.toLowerCase()];
            if (/[A-Z]/.test(lastLetter)) {
                digitStr = digitStr - alphabet[lastLetter.toLowerCase()];
            } else {
                digitStr = digitStr + alphabet[lastLetter.toLowerCase()];
            }
            finalresult += digitStr;
            continue;
        } else if (/[a-z]/.test(firstLetter)) {
            digitStr = digitStr * alphabet[firstLetter.toLowerCase()];
            if (/[A-Z]/.test(lastLetter)) {
                digitStr = digitStr - alphabet[lastLetter.toLowerCase()];
            } else {
                digitStr = digitStr + alphabet[lastLetter.toLowerCase()];
            }
            finalresult += digitStr;
            continue;
        }



    }

    console.log(finalresult.toFixed(2));

}
//lettersChangeNumbers('A12b    s17G')
//lettersChangeNumbers('P34562Z q2576f H456z')
lettersChangeNumbers('a1A')