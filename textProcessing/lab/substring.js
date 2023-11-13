function substring(sentence, startIndex, countElements){
    let endIndex = startIndex + countElements;
    let substring = sentence.substring(startIndex, endIndex);

    console.log(substring);

}
substring('ASentence', 1, 8 )