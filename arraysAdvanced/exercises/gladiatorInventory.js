function gladiatorInventory(list) {

    let inventoryList = list.shift().split(' ');

    for (let command of list) {
        let tokens = command.split(' ');
        let action = tokens[0];
        let currInventory = tokens[1];

        if (action == 'Buy') {
            if (!inventoryList.includes(currInventory)) {
                inventoryList.push(currInventory);
            }
        } else if (action == 'Trash') {
            let checkIfcurrInvIsInList = inventoryList.indexOf(currInventory);
            if (checkIfcurrInvIsInList !== -1) {
                inventoryList.splice(checkIfcurrInvIsInList, 1);
            }
        } else if (action == 'Repair') {
            let chkIsInTheList = inventoryList.indexOf(currInventory);

            if (chkIsInTheList !== -1) {
                let buff = inventoryList.splice(chkIsInTheList, 1);
                let toPush = buff[0];
                inventoryList.push(toPush);
            }
        } else if (action == 'Upgrade') {
            currInventoryRepaired = '';
            for (i = 0; i < currInventory.length; i++) {
                if (currInventory[i] == '-') {
                    currInventoryRepaired += ' ';
                } else {
                    currInventoryRepaired += currInventory[i];
                }
            }
            let currInventorySplit = currInventoryRepaired.split(' ');
            let toCheck = currInventorySplit[0];
            let findIfInList = inventoryList.indexOf(toCheck);
            if (findIfInList !== -1) {
                let toAdd = `${currInventorySplit[0]}:${currInventorySplit[1]}`
                inventoryList.splice(findIfInList + 1, 0, toAdd)
            }
            //console.log(currInventorySplit);
            //let checkForIt = inventoryList.indexOf()
        }
        //console.log(tokens);

    }

    console.log(inventoryList.join(' '));
}
gladiatorInventory(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel'])