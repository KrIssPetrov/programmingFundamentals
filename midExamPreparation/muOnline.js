function muOnline(input) {
    let health = 100;
    let bitcoins = 0;
    let bestRomm = 0;
    let arr = []
    arr.push(input)
    rooms = arr[0].split('|');

    for (let i = 0; i < rooms.length; i++) {
        bestRomm++;
        let currentRoom = rooms[i].split(' ');

        let command = currentRoom[0];
        let number = Number(currentRoom[1]);

        if (command == 'potion') {
            let healthBeforeHeal = health;
            health += number;
            health = health > 100 ? health = 100 : health = health;
            console.log(`You healed for ${health - healthBeforeHeal} hp.`);
            console.log(`Current health: ${health} hp.`);
            continue;
        } else if (command == 'chest') {
            bitcoins += number;
            console.log(`You found ${number} bitcoins.`);
            continue;
        } else {
            health -= number;

            if (health <= 0) {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${bestRomm}`);
                break;
            } else {
                console.log(`You slayed ${command}.`);
            }
        }

    }
    if (health > 0) {
        console.log(`You've made it!`);
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);
    }
}
//muOnline(['rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000']);
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")