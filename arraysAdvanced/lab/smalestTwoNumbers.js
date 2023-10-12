function smalestTwoNumbers(arr){

    let sorted = arr.sort((a, b) => a - b);
    console.log(sorted.slice(0, 2) .join(' '));

    
}
//smalestTwoNumbers([30, 15, 50, 5]);
smalestTwoNumbers([3, 0, 10, 4, 7, 3])