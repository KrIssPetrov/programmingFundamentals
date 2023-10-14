function distinct(arr){

    let newArr = [];

    for(index of arr){
        if(!newArr.includes(index)){
            newArr.push(index);
        }
    }
    console.log(newArr.join(' '));
}
distinct([7, 8, 9, 7, 2, 3,4, 1, 2])