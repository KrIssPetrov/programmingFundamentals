function starEnigma(arr) {

    let commands = Number(arr.shift());
    let attackedPlanets = [];
    let destroyedPlanets = [];

    let keyCountPattern = /[star]/gi;
    //[^@\-\!:>]*
   // let planetPattern = /@(?<name>[A-Za-z]+)[^@\-\!\:\>]*:(?<population>\d+)[^@\-\!:>]*!(?<attack>[AD])![^@\-\!:>]*->(?<solderCount>\d+)/
    let planetPattern = /@(?<name>[A-Za-z]+)[^\@\-\!\:\>]*:(?<population>\d+)[^\@\-\!\:\>]*!(?<attack>[AD])![^\@\-\!\:\>]*->(?<solderCount>\d+)/
    for (i = 0; i < commands; i++) {
        let currentCommand = arr[i];
        let currKey = currentCommand.match(keyCountPattern);

        let newCommand = '';

        if(currKey){
            currKey = currKey.length;

            for (let char of currentCommand) {
                let asciValue = char.charCodeAt() - currKey;
                let newValue = String.fromCharCode(asciValue);
                newCommand += newValue;
                //console.log(asciValue);
            }
        } else {
            newCommand = currentCommand;
        }

       let match = newCommand.match(planetPattern);

        if (match) {

            let attack = match.groups.attack;
            let name = match.groups.name;
            if (attack == 'A') {
                attackedPlanets.push(name);
            } else if (attack == 'D') {
                destroyedPlanets.push(name);
            }
            //console.log(match.groups);
        }
        //console.log(newCommand);
    }
    attackedPlanets.sort((a, b) => a.localeCompare(b));
    destroyedPlanets.sort((a, b) => a.localeCompare(b))

    console.log(`Attacked planets: ${attackedPlanets.length}`);
    
        attackedPlanets.forEach(planet => console.log('->', planet));
    
    console.log(`Destroyed planets: ${destroyedPlanets.length}`);
    
        destroyedPlanets.forEach(planet => console.log('->', planet));
    

}
//starEnigma(['2', 'STCDoghudd4=63333$D$0A53333', 'EHfsytsnhf?8555&I&2C9555SR'] );
starEnigma(['3',

    "tt(''DGsvywgerx>6444444444%H%1B9444",

    'GQhrr|A977777(H(TTTT',

    'EHfsytsnhf?8555&I&2C9555SR'])