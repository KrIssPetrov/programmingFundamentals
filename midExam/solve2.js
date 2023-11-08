function cofeeLover(arr) {

    let coffeeList = arr.shift().split(' ');
    let commands = Number(arr.shift());

    for (i = 0; i < commands; i++) {
        let tokens = arr[i].split(' ');
        let command = tokens[0];
        if (command == 'Include') {
            let coffee = tokens[1];
            coffeeList.push(coffee);

        } else if (command == 'Remove') {
            let firstOrLast = tokens[1];
            let index = Number(tokens[2]);

            if (index >= coffeeList.length) {
                continue;
            } else {
                if (firstOrLast == 'first') {
                    coffeeList.splice(0, index);
                } else if (firstOrLast == 'last') {
                    coffeeList.splice(-index);
                }
            }

        } else if (command == 'Prefer') {
            let coffee1 = Number(tokens[1]);
            let coffee2 = Number(tokens[2]);

            if (coffee1 < 0 || coffee1 >= coffeeList.length || coffee2 < 0 || coffee2 >= coffeeList.length) {
                continue;
            } else {
                let coffee1Name = coffeeList[coffee1];
                let coffee2Name = coffeeList[coffee2];

                coffeeList[coffee1] = coffee2Name;
                coffeeList[coffee2] = coffee1Name;
            }

        } else if (command == 'Reverse') {
            let newArr = [];

            for (j = coffeeList.length - 1; j >= 0; j--) {
                newArr.push(coffeeList[j]);
            }

            coffeeList = newArr;

        }

    }

    console.log(`Coffees:\n${coffeeList.join(' ')}`);
    //console.log((coffeeList));

}
cofeeLover((["Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee", "5", "Include TurkishCoffee", "Remove first 2", "Remove last 1", "Prefer 3 1", "Reverse"])
)