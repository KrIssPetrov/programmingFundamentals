function rounding(num, precision) {
    
    let roundedNum = 0;
    if (precision > 15) {
        precision = 15;
    }
    roundedNum += num.toFixed(precision);

    console.log(`${parseFloat(roundedNum)}`)
}
rounding(3.1415926535897932384626433832795, 2);
//rounding(10.5, 3);