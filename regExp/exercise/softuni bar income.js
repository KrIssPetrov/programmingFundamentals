function softUniBar(arr) {

    let totalIncome = 0;

    let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<qty>\d+)\|[^|$%.0-9]*(?<price>\d+\.?\d*)\$/

    let command = arr.shift();

    while (command != 'end of shift') {
        let currBill = command.match(pattern);

        if (currBill) {
            let { name, product, qty, price } = currBill.groups;
            let totalPrice = Number(qty) * Number(price);
            totalIncome += totalPrice;
            //console.log(name, product, qty, price);
            console.log(`${name}: ${product} - ${totalPrice.toFixed(2)}`);
        } 
        command = arr.shift();
        // else {
        //     command = arr.shift();
        // }


    }

    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}
softUniBar(['%George%<Croissant>|2|10.3$',

    '%Peter%<Gum>|1|1.3$',

    '%Maria%<Cola>|1|2.4$',

    'end of shift'])
// softUniBar(['%InvalidName%<Croissant>|2|10.3$',

// '%Peter%<Gum>1.3$',

// '%Maria%<Cola>|1|2.4',

// '%Valid%<Valid>valid|10|valid20$',

// 'end of shift'] )