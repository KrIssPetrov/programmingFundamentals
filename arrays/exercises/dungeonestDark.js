function dungeonestDark(arr) {
    let health = 100;
    let coins = 0;
    let indexWithCommands = arr[0];
    let dungeonRooms = indexWithCommands.split('|');
    let isKilled = false;
    for (i = 0; i < dungeonRooms.length; i++) {
        let currentRoom = dungeonRooms[i];
        currentRoom = currentRoom.split(' ');
        let itemOrAMonster = currentRoom[0];
        let number = Number(currentRoom[1]);

        if (itemOrAMonster == 'potion') {
            let healthBeforHeal = health;
            health += Number(number);
            health = health > 100 ? health = 100 : health = health;
            console.log(`You healed for ${health - healthBeforHeal} hp.`);
            console.log(`Current health: ${health} hp.`);
            continue;
        } else if (itemOrAMonster == 'chest') {
            coins += Number(number);
            console.log(`You found ${number} coins.`);
            continue;
        } else {
            attackOftheMonster = Number(number);
            monstersName = itemOrAMonster;
            health -= attackOftheMonster;
            if (health <= 0) {
                console.log(`You died! Killed by ${monstersName}.`);
                console.log(`Best room: ${i + 1}`);
                isKilled = true;
                break;
            } else {
                console.log(`You slayed ${monstersName}.`);
            }
        }
    }
    if (!isKilled) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}
//dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);