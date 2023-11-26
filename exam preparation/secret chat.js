function secretChat(arr) {

    let concealedMsg = arr.shift();
    let command = arr.shift();

    while (command !== 'Reveal') {

        let tokens = command.split(':|:');

        if (tokens[0] == 'ChangeAll') {
            let charToreplace = tokens[1];
            let charToPlace = tokens[2];
            concealedMsg = concealedMsg.split(charToreplace).join(charToPlace);
            console.log(concealedMsg);
        } else if (tokens[0] == 'Reverse') {
            let wordToReverse = tokens[1];

            if (concealedMsg.includes(wordToReverse)) {
                let indx = concealedMsg.indexOf(wordToReverse);

                let newMsg = concealedMsg.slice(0, indx);
                let newWord = wordToReverse.split('').reverse().join('');
                let result = newMsg + newWord;
                concealedMsg = result;
                console.log(result);
            } else {
                console.log('error');
            }
        } else if (tokens[0] == 'InsertSpace') {
            let spaceIndx = Number(tokens[1]);
            let spasedMsg = concealedMsg.slice(0, spaceIndx) + ' ' + concealedMsg.slice(spaceIndx);

            concealedMsg = spasedMsg;

            console.log(concealedMsg);
        }


        command = arr.shift()

    }

    console.log(`You have a new text message: ${concealedMsg}`);

}
// secretChat([

//     'heVVodar!gniV',

//     'ChangeAll:|:V:|:l',

//     'Reverse:|:!gnil',

//     'InsertSpace:|:5',

//     'Reveal'

//     ])
secretChat([

    'Hiware?uiy',

    'ChangeAll:|:i:|:o',

    'Reverse:|:?uoy',

    'Reverse:|:jd',

    'InsertSpace:|:3',

    'InsertSpace:|:7',

    'Reveal'

])