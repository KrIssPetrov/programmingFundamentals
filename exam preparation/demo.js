function demo(input) {

    let n = input.shift();

    let heroes = {};

    for (i = 0; i < n; i++) {
        let heroData = input.shift();
        let [heroName, hp, mp] = heroData.split(' ');

        let newHero = {
            hp: Number(hp),
            mp: Number(mp)
        }

        heroes[heroName] = newHero;
        //console.log(heroName, hp, mp);
    }

    let command = input.shift();

    while (command !== 'End') {
        let tokens = command.split(' - ');
        let action = tokens.shift();
        let name = tokens.shift();
        let hero = heroes[name];

        if (action == 'Heal') {
            let newHp = Number(tokens[0]);
            let oldHp = hero.hp;

            hero.hp = Math.min(oldHp + newHp, 100);

            console.log(`${name} healed for ${hero.hp - oldHp} HP!`);

        } else if (action == 'Recharge') {
            let oldMp = hero.mp;
            let newMp = Number(tokens[0]);
            hero.mp = Math.min(oldMp + newMp, 200);
            console.log(`${name} recharged for ${hero.mp - oldMp} MP!`);

        } else if (action == 'TakeDamage') {
            let newDmg = tokens[0];
            let attacker = tokens[1];
            let oldHp = hero.hp;
            hero.hp = oldHp - newDmg;
            if (hero.hp > 0) {
                console.log(`${name} was hit for ${newDmg} HP by ${attacker} and now has ${hero.hp} HP left!`);
            } else {
                console.log(`${name} has been killed by ${attacker}!`);
                delete heroes[name];
            }
        } else if (action == 'CastSpell') {
            let spellCost = Number(tokens[0]);
            let currentMp = hero.mp;
            let spellName = tokens[1];

            if (currentMp >= spellCost) {
                hero.mp = currentMp - spellCost;
                console.log(`${name} has successfully cast ${spellName} and now has ${hero.mp} MP!`);
            } else {
                console.log(`${name} does not have enough MP to cast ${spellName}!`);
            }

        }
        //console.log(tokens); 

        command = input.shift();
    }

    for (let player in heroes) {
        let currentHeroe = heroes[player];

        console.log(player);
        console.log(`  HP: ${currentHeroe.hp}`);
        console.log(`  MP: ${currentHeroe.mp}`);
    }


}
demo([
    "2",
    "Solmyr 85 120",
    "Kyrre 99 50",
    "Heal - Solmyr - 10",
    "Recharge - Solmyr - 50",
    "TakeDamage - Kyrre - 66 - Orc",
    "CastSpell - Kyrre - 15 - ViewEarth",
    "End"
])