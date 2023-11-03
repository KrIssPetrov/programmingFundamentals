function storage(input) {

    let storageList = {};

    for (let index of input) {
        let [product, qty] = index.split(' ');
        let keys = Object.keys(storageList);

        // let isInList = keys.find(product);

        if (keys.includes(product)) {
            storageList[product] += Number(qty);
        } else {
            storageList[product] = Number(qty);
        }

    }

    for (let obj in storageList) {
        console.log(obj, '->', storageList[obj]);
    }
}
storage(['tomatoes 10',

    'coffee 5',

    'olives 100',

    'coffee 40'])