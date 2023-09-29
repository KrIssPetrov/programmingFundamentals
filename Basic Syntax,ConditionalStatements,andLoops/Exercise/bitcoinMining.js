function bitcoinMining(input) {
    let bitcoinInAccaunt = false;
    let bitcoins = 0;
    let firstBitcoin = 0;
    let money = 0;
    let thirdDay = 0;
    let day = 1;
    let index = 0;
    let daysOfShift = input.length;

    while (day <= daysOfShift) {
        thirdDay++;
        let goldForDay = Number(input[index]);
        if (thirdDay == 3) {
            goldForDay *= 0.70;
            thirdDay = 0;
        }
        let soldGold = goldForDay * 67.51;
        money += soldGold;
        if (money >= 11949.16) {
            while (money > 11949.16) {
                money -= 11949.16;
                bitcoins++;
            }
            bitcoinInAccaunt = true;
            if (firstBitcoin == 0) {
                firstBitcoin = day;
            }
        }
        day++;
        index++

    }
    console.log(`Bought bitcoins: ${bitcoins}`);
    if (bitcoinInAccaunt) {
        console.log(`Day of the first purchased bitcoin: ${firstBitcoin}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);

}
bitcoinMining([3124.15, 504.212, 2511.124])