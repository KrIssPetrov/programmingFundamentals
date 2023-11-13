function pascalCaseSplitter(str) {

    let word = []
    let newArr = [];
    let arr = str.split('');

    for (let char of arr) {
        if (/[A-Z]/.test(char) && word.length > 0) {

            newArr.push(word.join(''));
            //console.log(newArr);
            word = [char]
        } else {
            word.push(...char);
        }
    }

    let result = newArr.concat(word.join(''));
    console.log(result.join(', '));



}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')