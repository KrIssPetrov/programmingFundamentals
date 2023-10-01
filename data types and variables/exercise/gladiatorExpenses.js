function gladiator(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {


    let armorCounter = 0;
    let brokenHelmets = 0;
    let brokenSword = 0;
    let brokenShield = 0;
    let brokenArmor = 0;

    for (i = 1; i <= lostFights; i++) {
        if (i % 2 == 0) {
            brokenHelmets++
        }
        if (i % 3 == 0) {
            brokenSword++;
        }
        if (i % 2 == 0 && i % 3 == 0) {
            brokenShield++;
            armorCounter++;
        }
        if (armorCounter == 2) {
            brokenArmor++;
            armorCounter = 0;
        }

    }

    let helmets = brokenHelmets * helmetPrice;
    let swords = brokenSword * swordPrice;
    let shields = brokenShield * shieldPrice;
    let armor = brokenArmor * armorPrice;

    console.log(`Gladiator expenses: ${(helmets + swords + shields + armor).toFixed(2)} aureus`);

}
//gladiator([7, 2, 3, 4, 5]);
gladiator(23, 12.50, 21.50, 40, 200);

// · Every second lost game, his helmet is broken.

// · Every third lost game, his sword is broken.

// · When both his sword and helmet are broken in the same lost fight, his shield also breaks.

// · Every second time, when his shield brakes, his armor also needs to be repaired.