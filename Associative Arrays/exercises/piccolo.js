function piccolo(input) {

    let parkingList = {};

    for (let car of input) {
        let [action, carNumber] = car.split(', ');

        if (action == 'IN') {
            parkingList[carNumber] = carNumber;
        } else {
            delete parkingList[carNumber];
        }

        // console.log(action);
        // console.log(carNumber);
    }
    parkingList = Object.entries(parkingList).map(car => car[1]).sort((a, b) => a.localeCompare(b))
    parkingList.forEach(element => {
        console.log(element);
    });

}
piccolo(['IN, CA2844AA',

    'IN, CA1234TA',

    'OUT, CA2844AA',

    'IN, CA9999TT',

    'IN, CA2866HI',

    'OUT, CA1234TA',

    'IN, CA2844AA',

    'OUT, CA2866HI',

    'IN, CA9876HH',

    'IN, CA2822UU'])