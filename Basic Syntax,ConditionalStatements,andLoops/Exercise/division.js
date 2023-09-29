function devision(number) {
    devNum = 0;
    let notDevisible = false;
    if (number % 10 == 0) {
        devNum = 10;
    } else if (number % 7 == 0) {
        devNum = 7;
    } else if (number % 6 == 0) {
        devNum = 6;
    } else if (number % 3 == 0) {
        devNum = 3;
    } else if (number % 2 == 0) {
        devNum = 2;
    } else {
        notDevisible = true;
    }

    if (!notDevisible) {
        console.log(`The number is divisible by ${devNum}`);
    } else {
        console.log("Not divisible");
    }

}
devision(1643);