function heroes(input) {

    let heroesCount = Number(input.shift());

    let heroes = [];

    for (i = 0; i < heroesCount; i++) {
        let [currentHeroe, hp, mp] = input.shift().split(' ');
        hp = Number(hp);
        mp = Number(mp);
        let newHeroName = {};
        newHeroName.name = currentHeroe;
        newHeroName.hp = hp;
        newHeroName.mp = mp;
        heroes.push(newHeroName);
    }
    //console.log(currentHeroe, hp, mp);
    let command = input.shift();

    while (command !== 'End') {
        let tokens = command.split(' - ');
        let action = tokens.shift();

        if (action == 'Heal') {
            let [heroToHeal, newHp] = tokens;
            newHp = Number(newHp);
            heroHeal(heroToHeal, newHp);

        } else if (action == 'Recharge') {
            let [heroToRecharge, newMp] = tokens;
            newMp = Number(newMp);
            heroRecharge(heroToRecharge, newMp);

        } else if (action == 'TakeDamage') {
            let [heroName, damage, attacker] = tokens;
            damage = Number(damage);

            takeDamage(heroName, damage, attacker);
        } else if (action == 'CastSpell') {
            let [heroToSpell, mpNeeded, spellName] = tokens;
            mpNeeded = Number(mpNeeded);

            castSpell(heroToSpell, mpNeeded, spellName);
        }
        //console.log(tokens); 

        command = input.shift();
    }

    if(heroes.length > 0){
        for (let player of heroes) {
        console.log(`${player.name}\n  HP: ${player.hp}\n  MP: ${player.mp}`);
        }
    }

    function heroHeal(hero, hp) {
        // let heroToRecover = heroes.name.indexOf(hero);
        for (let player of heroes) {
            if (player.name == hero) {
                let oldHp = player.hp;
                player.hp = Math.min(oldHp + hp, 100);

                //player.hp = player.hp + hp > 100 ? player.hp == 100 : player.hp == player.hp + hp; 
                //console.log();
                console.log(`${hero} healed for ${player.hp - oldHp} HP!`);
            }
        }
        //console.log(heroToRecover);
    }

    function heroRecharge(heroName, newMp) {
        for (let hero of heroes) {
            if (hero.name == heroName) {
                let oldMp = hero.mp;
                hero.mp = Math.min(oldMp + newMp, 200);
                console.log(`${heroName} recharged for ${hero.mp - oldMp} MP!`);
            }
        }
    }

    function takeDamage(name, newDmg, attacker) {
        for (let i = 0; i < heroes.length; i++) {
            let hero = heroes[i];

            if (hero.name == name) {
                let oldHp = hero.hp;
                hero.hp = oldHp - newDmg;
                if (hero.hp > 0) {
                    console.log(`${name} was hit for ${newDmg} HP by ${attacker} and now has ${hero.hp} HP left!`);
                } else {
                    console.log(`${name} has been killed by ${attacker}!`);
                    heroes.splice(i, 1);
                }
            }
        }
    }

    function castSpell(heroName, mp, spellName) {
        for (let hero of heroes) {
            if (hero.name == heroName) {
                let currentMp = hero.mp;

                if (currentMp >= mp) {
                    hero.mp = currentMp - mp;
                    console.log(`${hero.name} has successfully cast ${spellName} and now has ${hero.mp} MP!`);
                } else {
                    console.log(`${hero.name} does not have enough MP to cast ${spellName}!`);
                }
            }
        }
    }

}
// heroes([
//     "2",
//     "Solmyr 85 120",
//     "Kyrre 99 50",
//     "Heal - Solmyr - 10",
//     "Recharge - Solmyr - 50",
//     "TakeDamage - Kyrre - 66 - Orc",
//     "CastSpell - Kyrre - 15 - ViewEarth",
//     "End"
// ])
heroes([
    "4",
    "Adela 90 150",
    "SirMullich 70 40",
    "Ivor 1 111",
    "Tyris 94 61",
    "Heal - SirMullich - 50",
    "Recharge - Adela - 100",
    "CastSpell - Tyris - 1000 - Fireball",
    "TakeDamage - Tyris - 99 - Fireball",
    "TakeDamage - Ivor - 3 - Mosquito",
    "End"
    ]
    )