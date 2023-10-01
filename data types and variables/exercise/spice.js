function spice(startingYield) {
    let spices = 0;
    let days = 0;

    while (startingYield >= 100) {
        let minedForDay = startingYield;
        startingYield -= 10;
        spices += minedForDay;

        if (spices >= 26) {
            spices -= 26;
        }

        ++days
    }
    if (spices >= 26) {
        spices -= 26;
    }
    console.log(days);
    console.log(spices);
}
spice(450);