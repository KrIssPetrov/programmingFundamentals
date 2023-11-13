function countOccurences(sentence, toSearch){

    let sentenceToChk = sentence.split(' ');
    let counter = 0;

    for(let word of sentenceToChk){
        if(word == toSearch){
            counter++;
        }
    }

    console.log(counter);

}
countOccurences('This is a word and it also is a sentence',

'is')