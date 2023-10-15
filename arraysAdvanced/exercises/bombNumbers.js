function bombNumbers(arr1, bomb) {

    [bombIndex, power] = bomb;

    while (arr1.includes(bombIndex)) {
        let bombLocation = arr1.indexOf(bombIndex);
        arr1.splice(Math.max(0, bombLocation - power), power * 2 + 1, 0);
    }

    let result = arr1.reduce((num, value) => num + value);
    console.log(result);
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2])