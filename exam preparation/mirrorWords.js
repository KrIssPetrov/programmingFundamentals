function mirrorWords(input) {

    let pairsFound = 0;
    let mirrorPairs = [];

    let pairsPattern = /(#|@)([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/g;

    let matches = pairsPattern.exec(input);

    while (matches !== null) {

        //let currentPair = matches[0];
        pairsFound++;

        let first = matches[2];
        let second = matches[3];
        //let secondSplitted = second.split('').reverse().join('');
        if (first == second.split('').reverse().join('')) {
            mirrorPairs.push(`${first} <=> ${second}`);
        }

        matches = pairsPattern.exec(input);
    }
    let resultPairs = [];
   
    if (pairsFound == 0) {
        console.log('No word pairs found!');
    } else {
        console.log(`${pairsFound} word pairs found!`);
    }
    if (mirrorPairs.length > 0) {
        
        resultPairs = mirrorPairs.join(', ');
        console.log('The mirror words are:');
        console.log(resultPairs);
    } else {
        console.log('No mirror words!');
    }


}
mirrorWords([

    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'

])
//mirrorWords([ '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@' ] )