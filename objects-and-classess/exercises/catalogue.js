function catalogue(input) {

    let storeProducts = {};

    for (let product of input) {
        let [productName, productPrice] = product.split(' : ')
        storeProducts[productName] = Number(productPrice);
        // console.log(storeProducts);
    }

    let entries = Object.entries(storeProducts);
    let sorted = entries.sort((a, b) => a[0].localeCompare(b[0]));
    let firstLetter = ''
    for (let index of sorted) {
        let currentLetter = index.join()[0];


        if (firstLetter !== currentLetter) {
            firstLetter = currentLetter;
            console.log(firstLetter);
        }
        console.log(index.join(': '));
    }
    //console.log(entries);

}
catalogue([

    'Appricot : 20.4',

    'Fridge : 1500',

    'TV : 1499',

    'Deodorant : 10',

    'Boiler : 300',

    'Apple : 1.25',

    'Anti-Bug Spray : 15',

    'T-Shirt : 10'

])