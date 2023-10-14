function train(input) {
    let wagons = input.shift().split(' ').map(Number);
    let maxCapacityOfWagon = Number(input.shift());

    for (i = 0; i < input.length; i++) {
        let current = input[i].split(' ');
        if (current[0] == 'Add') {
            wagons.push(current[1]);
        } else {
 
        let currentPassingers = Number(input[i]);

        for (currWagon = 0; currWagon < wagons.length; currWagon++) {
            let freeSpaces = maxCapacityOfWagon - Number(wagons[currWagon]);
            if (currentPassingers <= freeSpaces) {
                wagons[currWagon] = currentPassingers + Number(wagons[currWagon]);
                break;
            }
        }
   
        }
    }

    
    console.log(wagons.join(' '));
}
train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);
//train(['0 0 0 10 2 4','10','Add 10','10','10','10','8']);
//train(['0 0 0 10 2 4','10','Add 10','10','10','10','8','6'] )