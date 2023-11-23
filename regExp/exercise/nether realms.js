function netherRealms(str) {
    let splitPattern = /[, ]+/g;
    let input = str.split(splitPattern).sort((a, b) => a.localeCompare(b));
    // let spacePattern = /[^ ']/g
    // let input = str.match(spacePattern);
    // input = input.join('').split(',').sort((a, b) => a.localeCompare(b));
   
    //let charsPattern = /[A-Za-z]/g; // wrong!
    let charsPattern = /[^0-9.\/+*-]/g;
    let digitPattern = /\-?\d+\.?\d*/g;
    let signsPattern = /[\*/]/g;

    for (let devilName of input) {
        let health = 0;
        let damage = 0;
        let charsOfIndx = devilName.match(charsPattern);
        let digitsOfdevilName = devilName.match(digitPattern);
        let signsOfdevilName = devilName.match(signsPattern);

        if (charsOfIndx) {
            charsOfIndx.forEach(element => {
                health += Number(element.charCodeAt());
            });
        }
        if (digitsOfdevilName) {
            digitsOfdevilName = digitsOfdevilName.map(Number).reduce((acc, value) => acc + value);
            damage = digitsOfdevilName;
            //console.log(digitsOfdevilName);
        }
        if (signsOfdevilName) {
            for (let sign of signsOfdevilName) {
                switch (sign) {
                    case '*':
                        damage = damage * 2;
                        break;

                    case '/':
                        damage = damage / 2
                        break;
                }
            }
        }
        console.log(`${devilName} - ${health} health, ${damage.toFixed(2)} damage`);
        // console.log(digitsOfdevilName);
        // console.log(signsOfdevilName);
    }
    //console.log(input);

}
netherRealms('M3ph1st0**,   Azazel')
//netherRealms('Gos/ho')