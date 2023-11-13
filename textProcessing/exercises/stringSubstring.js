function stringSubstring(word, sentence) {

    let arr = sentence.split(' ').map(index => index.toLowerCase())
    let isFound = false;
    for (let text of arr) {
        text = text.toLowerCase()
        if (text == word) {
            console.log(word);
            isFound = true;
            break;
        } 
    }

    if (!isFound){
        console.log(`${word} not found!`);
    }

    // console.log(finded);

}
stringSubstring('javascript',

    'JavaScript is the best programming language')