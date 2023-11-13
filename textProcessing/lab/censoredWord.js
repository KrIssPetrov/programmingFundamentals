function censoredWord(sentence, worToReplace){
    let censored = '*'.repeat(worToReplace.length);
    let result = sentence;

    while(result.includes(worToReplace)){
        result = result.replace(worToReplace, censored)
    }
   //let processed = sentence.replace(worToReplace, censored);
   
   console.log(result);

}
censoredWord('A small sentence with some words',

'small')