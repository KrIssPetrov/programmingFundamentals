function storeProvision(stock, ordered) {

    let inStock = {};

    for (i = 0; i < stock.length; i += 2) {
        let product = stock[i];
        let qty = Number(stock[i + 1]);
        inStock[product] = qty;
    }
    //console.log(inStock);

    for (j = 0; j < ordered.length; j += 2) {
        let product = ordered[j];
        let qty = Number(ordered[j + 1]);

        let isInStock = Object.keys(inStock).find((key) => key == product);
        if (isInStock) {
            inStock[product] += qty;
        } else {
            inStock[product] = qty;

        }
    }

    for(product in inStock){
        console.log(`${product} -> ${inStock[product]}`);
    }
    // let entries = Object.entries(inStock);

    // for(let entrie of entries){
    //     console.log(entrie.join(' -> '));
    // }
    //console.log(entries.forEach((entrie) => console.log(entrie.join(' -> '))));

}
storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],

    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'])