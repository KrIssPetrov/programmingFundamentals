function treasureHunt(arr) {
    let treasureLoot = arr.shift().split('|');

    for (i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(' ');
        let currCommand = tokens[0];

        if (currCommand == 'Yohoho!') {
            break;
        } else if (currCommand == 'Loot') {
            //let loots = [];
            for (j = 1; j < tokens.length; j++) {
                let currLoot = tokens[j];
                if (!treasureLoot.includes(currLoot)) {
                    treasureLoot.unshift(currLoot);
                }

            }
        } else if (currCommand == 'Drop') {
            let index = (tokens[1]);

            if (index < 0 || index >= treasureLoot.length) {
                continue;
            }

            let drop = treasureLoot.splice(index, 1);
            treasureLoot.push(drop.join());

        } else if (currCommand == 'Steal') {
            let toSteal = Number(tokens[1]);
            let stealed = treasureLoot.splice(-toSteal,);
            console.log(stealed.join(', '));

        }
    }
    let legthSum = 0;

    for (let index of treasureLoot) {
        legthSum += index.length;
    }
    if (typeof treasureLoot[0] == 'undefined') {
        console.log('Failed treasure hunt.');
    } else {
        console.log(`Average treasure gain: ${(legthSum / treasureLoot.length).toFixed(2)} pirate credits.`);
    }

}
//treasureHunt((["Gold|Silver|Bronze|Medallion|Cup","Loot Wood Gold Coins","Loot Silver Pistol","Drop 3","Steal 3","Yohoho!"]))
treasureHunt((["Diamonds|Silver|Shotgun|Gold", "Loot Silver Medals Coal", "Drop -1", "Drop 1", "Steal 6", "Yohoho!"]))