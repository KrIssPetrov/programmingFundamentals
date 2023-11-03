function computerStore(arr) {

    let totalPriceWithTaxes = 0;
    let totalPriceWithoutTaxes = 0;
    isSPecial = false;
    let isInvalidOrder = false;
    let taxes = 0;
    let discount = 0;

    for (i = 0; i < arr.length; i++) {
        let currCommand = arr[i];

        if (currCommand == 'special' || currCommand == 'regular') {
            if (currCommand == 'special') {
                isSPecial = true;
                break;
            } else {
                break;
            }
        } else if (Number(currCommand) < 0) {
            console.log('Invalid price!');
            continue;
        }

        totalPriceWithTaxes += Number(currCommand * 1.20);
        totalPriceWithoutTaxes += Number(currCommand);
    }

    if (totalPriceWithTaxes == 0) {
        console.log('Invalid order!');
        isInvalidOrder = true;
    }
    taxes = (totalPriceWithTaxes - totalPriceWithoutTaxes).toFixed(2);

    if (isSPecial) {
        totalPriceWithTaxes -= totalPriceWithTaxes * 0.10;
    }
    if (!isInvalidOrder) {
    console.log(`Congratulations you've just bought a new computer!
    Price without taxes: ${totalPriceWithoutTaxes.toFixed(2)}$
    Taxes: ${(taxes)}$
     -----------
    Total price: ${(totalPriceWithTaxes.toFixed(2))}$`);
    }
}
//computerStore((['1050', '200', '450', '2', '18.50', '16.86', 'special']));
computerStore(([

    '1023',
    
    '15',
    
    '-20',
    
    '-5.50',
    
    '450',
    
    '20',
    
    '17.66',
    
    '19.30',
    
    'regular'
    
    ]))