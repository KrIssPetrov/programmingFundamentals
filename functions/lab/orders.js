function orders(product, qty) {
    let coffee = coffee => 1.50 * qty;
    let water = water => 1.00 * qty;
    let coke = coke => 1.40 * qty;
    let snacks = snacks => 2.00 * qty;

    let result = 0
    switch (product) {
        case "coffee":
            result = coffee;
            break;

        case 'water':
            result = water;
            break;

        case 'coke':
            result = coke;
            break;

        case 'snacks':
            result = snacks;
            break;
    }

    console.log((result(orders)).toFixed(2));
}
orders("coffee", 5);