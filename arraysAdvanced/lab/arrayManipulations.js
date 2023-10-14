function arrManipulations(arr) {

    let array = arr.shift().split(' ');

    for (command of arr) {

        let currCommand = command.split(' ');
        let operation = currCommand[0];


        if (operation == 'Add') {
            let num = currCommand[1];
            array.push(num);
        } else if (operation == 'Remove') {
            let num = currCommand[1];
            let newArr = [];

            for (i = 0; i < array.length; i++) {
                let currentNum = array[i];
                if (currentNum !== num) {
                    newArr.push(currentNum);
                }
            }
            array = newArr;
        } else if (operation == 'RemoveAt') {
            let index = currCommand[1];
            array.splice(index, 1)
        } else if (operation == 'Insert') {
            let numberToInsert = currCommand[1];
            let index = currCommand[2];
            array.splice(index, 0, numberToInsert);
        }

    }

    console.log(array.join(' '));
}


arrManipulations(['4 19 2 53 2 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3'])