function manOwar(arr) {

    let pirateShip = arr.shift().split('>').map(Number);
    let warShip = arr.shift().split('>').map(Number);
    let maxHealth = Number(arr.shift());
    let commands = arr.slice();

    let index = 0;
    while (commands[index] !== 'Retire') {
        let tokens = commands[index].split(' ');
        let cmd = tokens[0];

        if (cmd == 'Fire') {
            let spotToFire = Number((tokens[1]));
            let damage = Number(tokens[2]);
            if (spotToFire < 0 || spotToFire >= warShip.length) {
                index++;
                continue;
            }
            warShip[spotToFire] -= damage;
            if (warShip[spotToFire] <= 0) {
                console.log('You won! The enemy ship has sunken.');
                return;
            }
        }

        if (cmd == 'Defend') {
            let startIndex = Number(tokens[1]);
            let endIndex = Number(tokens[2]);
            let damageToPirate = Number(tokens[3]);
            //let isValid = true;
            //let newArr = pirateShip.slice(startIndex, endIndex + 1);
            //let sunken = false;

            if (startIndex < 0 || endIndex >= pirateShip.length || startIndex < 0 || endIndex >= pirateShip.length) {
                index++;
                continue;
            }
            for (i = startIndex; i <= endIndex; i++) {
                    pirateShip[i] -= damageToPirate;
                    if (pirateShip[i] <= 0) {
                        console.log('You lost! The pirate ship has sunken.');
                        return;
                        
                    }
            }
               


        }

        if (cmd == 'Repair') {
            let section = Number((tokens[1]));
            let health = Number(tokens[2]);

            // if (index >= 0 && index < pirateShip.length) {
            //     pirateShip[section] += health;
            //     if (pirateShip[section] > maxHealth) {
            //         pirateShip[section] = maxHealth;
            //     }
            // }
            if (section < 0 || section >= pirateShip.length) {
                index++;
                continue;
            }
                let currSection = pirateShip[section];
                currSection += Number(health);
                currSection = currSection > maxHealth ? currSection = maxHealth : currSection = currSection;
                pirateShip[section] = currSection;


        }

        if (cmd == 'Status') {
            let percentOfMaxHealth = maxHealth * 0.20;
            let allThatNeedRepair = pirateShip.filter(num => num < percentOfMaxHealth).length;
            console.log(`${allThatNeedRepair} sections need repair.`);
        }
        

        index++;
    }
    console.log(`Pirate ship status: ${(pirateShip.reduce((acc, sum) => acc + sum, 0))}`);
    console.log(`Warship status: ${warShip.reduce((acc, sum) => acc + sum, 0)}`);
    
}
manOwar((["12>13>11>20>66", "12>22>33>44>55>32>18", "70", "Fire 2 11", "Fire 8 100", "Defend 3 6 11", "Defend 0 3 5", "Repair 1 33", "Status", "Retire"]))
//manOwar((["2>3>4>5>2","6>7>8>9>10>11","20","Status","Fire 2 3","Defend 0 4 11","Repair 3 18","Retire"]))