function arrayManipulator(arr, commands) {

    let manipulated = arr.slice();
    //let index = 0;
    for (com of commands) {

        let currOperation = com.split(' ');
        let operation = currOperation[0];

        switch (operation) {
            case 'add':
                let idx = Number(currOperation[1])
                manipulated.splice(idx, 0, Number(currOperation[2]));
                break;

            case 'addMany':
                let removeFirstEl = currOperation.shift();
                let indexToAdd = currOperation.shift();
                let numsToAdd = currOperation.slice(0,);

                for (element of numsToAdd) {
                    manipulated.splice(Number(indexToAdd), 0, Number(element));
                    indexToAdd++;
                }

                break;

            case 'contains':
                let numToCheck = Number(currOperation[1]);

                console.log(manipulated.indexOf(numToCheck));
                break;

            case 'remove':
                manipulated.splice(Number(currOperation[1]), 1);
                break;

            case 'shift':
                let shiftCounts = Number(currOperation[1]);
                for (i = 0; i < shiftCounts; i++) {
                    let buffer = Number(manipulated.shift());
                    manipulated.push(buffer);
                }

                break;

            case 'sumPairs':
                let pairedNums = [];
                for (i = 0; i < manipulated.length; i += 2) {
                    let firstForSum = i;
                    if (firstForSum + 1 < manipulated.length) {
                        pairedNums.push(Number(manipulated[i]) + Number(manipulated[i + 1]));
                    } else {
                        pairedNums.push(Number(manipulated[i]));
                    }
                }
                //console.log(manipulated);
                manipulated = pairedNums;
                break;

            case 'print':
                console.log(`[ ${manipulated.join(', ')} ]`);

                break;

        }

    }

}
arrayManipulator([1, 2, 3, 4, 5, 6, 6, 8, 9, 10, 11, 2], ['add 0 23', 'remove 0', 'add 0 15', 'contains 15', 'remove 0', 'contains 15', 'addMany 0 9 8 7', 'shift 1', 'shift 123', 'sumPairs', 'sumPairs', 'add 0 12', 'sumPairs', 'print']);
//arrayManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print'])