function arrManipulator2(nums, commands){

    for(let command of commands){
        let tokens = command.split(' ');
        let action = tokens[0];

        if(action == 'add'){
            let idx = Number(tokens[1]);
            let num = Number(tokens[2]);

            nums.splice(idx, 0, num);
        } else if(action == 'addMany'){
            let idx = Number(tokens[1]);
            let numsToAdd = tokens.slice(2,);

            for(let num of numsToAdd){
                nums.splice(idx, 0, Number(num));
                idx++;
            }
        } else if(action == 'contains'){
            let num = Number(tokens[1]);
            let idx = nums.indexOf(num);
            console.log(idx);
        } else if(action == 'remove'){
            let idx = Number(tokens[1]);
            nums.splice(idx, 1);
        } else if(action == 'shift'){
            let rotations = Number(tokens[1]);

            for(let rotation = 1; rotation <= rotations; rotation++){
                let firstNum = nums.shift();
                nums.push(firstNum);
            }
        } else if(action == 'sumPairs'){
            let pairedArr = [];

            for(let i = 0; i< nums.length; i += 2){
                if (i + 1 < nums.length){
                    pairedArr.push(nums[i] + nums[i + 1]);
                } else {
                pairedArr.push(nums[i])
                }
            }
            nums = pairedArr;

        }  else if(action == 'print'){
            console.log(`[ ${nums.join(', ')} ]`);
        }
    }
}
//arrManipulator2([1, 2, 4, 5, 6, 7],['add 1 8', 'contains 1', 'contains 3', 'print'] );
arrManipulator2([1, 2, 3, 4, 5, 6, 6, 8, 9, 10, 11, 2], ['add 0 23', 'remove 0', 'add 0 15', 'contains 15','remove 0', 'contains 15', 'addMany 0 9 8 7', 'shift 1', 'shift 123', 'sumPairs', 'sumPairs', 'add 0 12', 'sumPairs', 'print'] );