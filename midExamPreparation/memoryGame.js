function memoryGame(arr) {

    let elements = arr.shift().split(' ');

    for (i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(' ');
        let matchCount = 0;

        if (tokens == 'end') {
            console.log(`Sorry you lose :(\n${elements.join(' ')}`);
            break;
        } else if (tokens[0] == tokens[1] || Number(tokens[0]) < 0 || Number(tokens[0]) >= elements.length || Number(tokens[1]) < 0 || Number(tokens[1]) >= elements.length) {
            let index = elements.length / 2;
            let toAdd = (`-${i + 1}a`);
            elements.splice(index, 0, toAdd, toAdd);
            console.log('Invalid input! Adding additional elements to the board');
            continue;
        }


        let guess1 = Number(tokens[0]);
        let guess2 = Number(tokens[1]);

        if (elements[guess1] == elements[guess2]) {
            console.log(`Congrats! You have found matching elements - ${elements[guess1]}!`);
            elements.splice(Math.min(guess1, guess2), 1);
            elements.splice(Math.max(guess1, guess2) - 1, 1);
        } else if (elements[guess1] !== elements[guess2]) {
            console.log('Try again!');
        }

        if (elements.length < 2) {
            console.log(`You have won in ${i + 1} turns!`);
            break;
        }

    }

    // if(elements.length > 2){
    //     console.log(`Sorry you lose :(\n${elements}`);
    // }
    //console.log(elements);

}
//memoryGame( ["1 1 2 2 3 3 4 4 5 5", "1 0","-1 0","1 0", "1 0", "1 0", "end"]);
memoryGame(["a 2 4 a 2 4", "0 3", "0 2", "0 1", "0 1", "end"]);






//let indexOfFirst = elements.indexOF(guess1);
//let indexOFSecound = elements.indexOF(guess2);
// if(guess1 == guess2){
//     elements.splice(indexOfFirst, 1);
//     elements.splice(indexOFSecound, 1);
// }
// for(let num of elements){
//     if(num == tokens[0]){
//         guess.push(num);
//         continue;
//     } else if(num == tokens[1])
// }