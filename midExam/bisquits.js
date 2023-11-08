function calculateBiscuitProduction(arr) {
    let biscuitsPerDay = Number(arr[0]);
    let numWorkers = Number(arr[1]);
    let competingFactoryProduction = Number(arr[2]);
    const daysInMonth = 30;
    let totalBiscuits = 0;

    for (let day = 1; day <= daysInMonth; day++) {
        let dailyProduction = biscuitsPerDay * numWorkers;


        if (day % 3 === 0) {
            dailyProduction *= 0.75;
        }

        totalBiscuits += Math.floor(dailyProduction);
    }

    const productionDifference = totalBiscuits - competingFactoryProduction;
    const percentageDifference = (productionDifference / competingFactoryProduction) * 100;
    const formattedPercentage = Math.abs(percentageDifference).toFixed(2);

    let output = (`You have produced ${totalBiscuits} biscuits for the past month.\n`);

    if (productionDifference > 0) {
        output += (`You produce ${formattedPercentage} percent more biscuits.`);
    } else {
        output += (`You produce ${formattedPercentage} percent less biscuits.`);
    }

    console.log(output);
}

// Example usage
calculateBiscuitProduction([78, 8, 16000]);
//calculateBiscuitProduction(["65","12","26000"]);
//console.log(calculateBiscuitProduction(163, 16, 67020));