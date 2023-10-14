function houseParty(input) {

    let guestList = []

    for (index of input) {
        let currOperation = index.split(' ');
        let name = currOperation[0];
        let isGoingOrNot = currOperation.slice(-2).join(' ');

        if (isGoingOrNot == 'is going!') {
            if (!guestList.includes(name)) {
                guestList.push(name)
            } else {
                console.log(`${name} is already in the list!`);
            }
        } else if (isGoingOrNot == 'not going!') {
            let isInTheList = guestList.indexOf(name);
            if (isInTheList != -1) {
                guestList.splice(isInTheList, 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        }

    }
    console.log(guestList.join('\n'));
}
//houseParty(['Allie is going!','George is going!','John is not going!','George is not going!'] );
houseParty(['Tom is going!',

    'Annie is going!',

    'Tom is going!',

    'Garry is going!',

    'Jerry is going!'])