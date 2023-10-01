function latinLetters(numAsString) {
    let n = Number(numAsString);
   // let startingIndex = 'a'.charCodeAt(0);

    for (i = 0; i < n; i++) {

        for (j = 0; j < n; j++) {

            for (k = 0; k < n; k++) {
                let letter1 = String.fromCharCode('a'.charCodeAt(0) + i);
                let letter2 = String.fromCharCode('a'.charCodeAt(0) + j);
                let letter3 = String.fromCharCode('a'.charCodeAt(0) + k);
                console.log(`${letter1}${letter2}${letter3}`);

            }
        }
    }

}
latinLetters('3')