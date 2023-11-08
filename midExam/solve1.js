function theBisquitFactory(arr) {

    let bisquitsPerWorker = Number(arr[0]);
    let workersCount = Number(arr[1]);
    let competingFactoryBisquits = Number(arr[2]);
    let sumOfAllBisquits = 0;

    for (i = 1; i <= 30; i++) {
        let biscuitsFurDay = 0;
        let thirdDayProduction = bisquitsPerWorker * 0.75;
        if (i % 3 == 0) {
            biscuitsFurDay += thirdDayProduction * workersCount;
        } else {
            biscuitsFurDay += bisquitsPerWorker * workersCount;
        }
        sumOfAllBisquits += Math.floor(biscuitsFurDay)
    }

    console.log(`You have produced ${sumOfAllBisquits} biscuits for the past month.`);

    if (sumOfAllBisquits > competingFactoryBisquits) {
        let diffBetween = sumOfAllBisquits - competingFactoryBisquits;
        let inPercent = (diffBetween / competingFactoryBisquits) * 100;
        console.log(`You produce ${inPercent.toFixed(2)} percent more biscuits.`);
    } else if (sumOfAllBisquits < competingFactoryBisquits) {
        let diffBetweenTwo = competingFactoryBisquits - sumOfAllBisquits;
        let percent = (diffBetweenTwo / competingFactoryBisquits) * 100;
        console.log(`You produce ${percent.toFixed(2)} percent less biscuits.`);
    }

}
//theBisquitFactory((["78","8","16000"]));
theBisquitFactory(["65","12","26000"])

