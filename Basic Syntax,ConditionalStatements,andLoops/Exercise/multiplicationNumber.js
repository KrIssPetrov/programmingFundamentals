function multiplicationNumber(num){
    for(i = 1; i <= 10; i++){
        let sum = num * i;
        console.log(`${num} X ${i} = ${sum}`);
    }
}
multiplicationNumber(5)