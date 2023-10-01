function rightPlace(string, charm, result){
     let matchingWord = '';

    for(i = 0; i < string.length; i++){
        if(string[i]  == '_'){
            matchingWord += charm;
        } else {
            matchingWord += string[i]
        }
    }

    console.log(`${matchingWord == result ? 'Matched': 'Not Matched'} `);
}
 rightPlace('Str_ng', 'i', 'String');