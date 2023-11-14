function legendaryFarming(str) {

    let arr = str.split(' ');
    let keyMaterials = ['shards', 'fragments', 'motes'];
    let legendary = '';
    let isFound = false;
    let legendaryList = { shards: 0, fragments: 0, motes: 0 };

    for (let materials = 0; materials < arr.length; materials += 2) {

        let qty = Number(arr[materials]);
        let material = arr[materials + 1].toLocaleLowerCase();

        if (!legendaryList.hasOwnProperty(material)) {
            legendaryList[material] = qty;
        } else {
            legendaryList[material] += qty;
        }


        let entries = Object.entries(legendaryList);

        for (let [currMaterial, quantity] of entries) {
            quantity = Number(quantity);
            currMaterial = currMaterial.toLocaleLowerCase()
            if (quantity >= 250 && keyMaterials.includes(currMaterial)) {
                if (keyMaterials.includes(currMaterial)) {
                    legendaryList[currMaterial] -= 250;

                    isFound = true;

                    if (currMaterial == 'shards') {
                        legendary = 'Shadowmourne';
                    } else if (currMaterial == 'fragments') {
                        legendary = 'Valanyr';
                    } else if (currMaterial == 'motes') {
                        legendary = 'Dragonwrath';
                    }
                    break;
                }
            }

        }
        if (isFound) {
            break;
        }
    }
    console.log(`${legendary} obtained!`);
    let remainingKeyMaterials = [];
    let junkMaterials = [];
    let finalEntries = Object.entries(legendaryList);

    for (let [material, qty] of finalEntries) {
        if (material == 'shards' || material == 'fragments' || material == 'motes') {
            remainingKeyMaterials.push([material, qty]);
        } else {
            junkMaterials.push([material, qty])
        }
    }

    remainingKeyMaterials.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b))
    junkMaterials.sort((a, b) => a[0].localeCompare(b[0]))

    remainingKeyMaterials.forEach(pair => console.log(`${pair[0]}: ${pair[1]}`));
    junkMaterials.forEach(element => {
        console.log(`${element[0]}: ${element[1]}`);
    })

}
legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');
//legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')