function buildAWall(arr) {
    let dailyYards = [];
    let totalYards = 0;

    let sectinsLimit = arr.length * 30;
    let sectionsSum = 0

    if (arr.length > 1) {
        sectionsSum = arr.reduce((acc, num) => acc + num);
    } else {
        sectionsSum = arr[0];
    }

    while (sectionsSum !== sectinsLimit) {
        let cubicYardForADay = 0;

        for (let index = 0; index < arr.length; index++) {
            if (arr[index] < 30) {
                arr[index] = arr[index] + 1;
                cubicYardForADay += 195;
                sectionsSum++;
            }

        }
        dailyYards.push(cubicYardForADay)
        totalYards += cubicYardForADay;
    }
    let newarr = [];
    
    console.log(dailyYards.join(', '));
    console.log(`${totalYards * 1900} pesos`);
}
//buildAWall([21, 25, 28]);
buildAWall([17]);


// if (section1 < 30) {
//     //foots++;
//     section1++;
//     cubicYardForADay += 195;
//     sectionsSum++;
// }
// if (section2 < 30) {
//     //foots++;
//     section2++;
//     cubicYardForADay += 195;
//     sectionsSum++;
// }
// if (section3 < 30) {
//     //foots++;
//     section3++
//     cubicYardForADay += 195;
//     sectionsSum++;
// }