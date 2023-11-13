function revealWordds(word, stringWithTemplates){

    let words = word.split(', ');
    let processed = stringWithTemplates
    for(let word of words){
        let wordSymbols = word.length;
        let toChkFor = '*'.repeat(wordSymbols)
        if(toChkFor){
            processed = processed.replace(toChkFor, word);
        }

    }

    console.log(processed);

}
// revealWordds('great',

// 'softuni is ***** place for learning new programming languages' )

revealWordds('great, learning',

'softuni is ***** place for ******** new programming languages')