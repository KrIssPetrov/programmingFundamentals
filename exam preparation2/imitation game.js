function imitationGame(input) {

    let encryptedMsg = input.shift();

    while (input[0] !== 'Decode') {
        let tokens = input.shift().split('|');
        let action = tokens.shift();

        if (action == 'ChangeAll') {
            let toReplace = tokens[0];
            let toPlace = tokens[1];

            let newMsg = encryptedMsg.split(toReplace).join(toPlace);

            encryptedMsg = newMsg;

        } else if (action == 'Insert') {
            let indx = Number(tokens[0]);
            let toInsert = tokens[1];

            let insertMsg = encryptedMsg.slice(0, indx) + toInsert + encryptedMsg.slice(indx);

            encryptedMsg = insertMsg;

        } else if (action == 'Move') {
            let countLetters = Number(tokens[0]);
            let lettersToMove = encryptedMsg.slice(0, countLetters);

            let moveMsg = encryptedMsg.slice(countLetters) + lettersToMove;

            encryptedMsg = moveMsg;
        }
        //console.log(action);
    }

    console.log(`The decrypted message is: ${encryptedMsg}`);

}
// imitationGame([

//     'zzHe',

//     'ChangeAll|z|l',

//     'Insert|2|o',

//     'Move|3',

//     'Decode'

//     ])
imitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'])