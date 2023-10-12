function sumSurstLast(arr){
let first = Number(arr.shift());
let last = Number(arr.pop());

console.log(first + last);
}
sumSurstLast(['20', '30', '40'])