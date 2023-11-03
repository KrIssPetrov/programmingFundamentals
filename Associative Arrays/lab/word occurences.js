function wordOccureces(input){

    let words = {};

    for(let word of input){
        
        if(word in words){
            words[word]++;
        } else {
            words[word] = 1;
        }

    }

    let entries = Object.entries(words).sort((a, b) => b[1] - a[1] );

    entries.forEach(entrie => console.log(entrie.join(' -> '), 'times'));
}
wordOccureces(["Here", "is", "the", "first", "sentence",

"Here", "is", "another", "sentence", "And",

"finally", "the", "third", "sentence"])