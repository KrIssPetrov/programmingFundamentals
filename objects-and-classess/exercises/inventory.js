function inventory(arr) {

    let heroes = [];

    for (let index of arr) {
        let tokens = index.split(' / ');
        [heroName, heroLevel, items] = tokens;

        let newHero = { Hero: heroName, level: heroLevel, items: items };

        heroes.push(newHero);
        // console.log(tokens);
    }

    heroes.sort((a, b) => a.level - b.level);

    for (let hero of heroes) {
        console.log(`Hero: ${hero.Hero} \nlevel => ${hero.level} \nitems => ${hero.items}`);
    }
}
inventory([
    'Isacc / 25 / Apple, GravityGun',

    'Derek / 12 / BarrelVest, DestructionSword',

    'Hes / 1 / Desolator, Sentinel, Antara'

])