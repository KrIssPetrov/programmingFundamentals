function numbers(numbers) {
    let nums = numbers.split(' ').map(Number);
    let sumOfNumbers = nums.reduce((acc, value) => acc + value);
    let avgNumber = sumOfNumbers / nums.length;
    let numbersGreaterThanAvg = [];
    numbersGreaterThanAvg = nums.filter((value) => value > avgNumber);
    let sortedNumbers = numbersGreaterThanAvg.sort((a, b) => b - a);

    let typeOfFirstNumber = typeof sortedNumbers[0];

    if (sortedNumbers.length >= 5) {
        console.log(sortedNumbers.slice(0, 5).join(' '));
    } else if (typeOfFirstNumber == 'undefined') {
        console.log('No');
    } else {
        console.log(sortedNumbers.join(' '));
    }
    //console.log(sumOfNumbers);
}
//numbers('10 20 30 40 50');
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
//numbers('1')