function sorting(arr){
    let copyArr = arr.slice()
    let sortedArr = arr.sort((a, b) => b - a);
    let newArr = [];

    for(i = 0; i < copyArr.length; i++){
        newArr.push(sortedArr.shift(), sortedArr.pop())
    }
    console.log(newArr.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])