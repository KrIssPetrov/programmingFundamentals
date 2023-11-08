function ladyBugs(arr){
    let fieldArr = []
    fieldArr.length = [arr.shift()];
    fieldArr.fill(0)
    let ladyBugsLocationsStr= arr.shift();
    let StrWithoutSpace = ladyBugsLocationsStr.replace(/\s+/g, '')
    for(i = 0; i < StrWithoutSpace.length; i++){
        
        let currentPosition = StrWithoutSpace[i];

        fieldArr[currentPosition] = 1;
    }

    for(i = 0; i < arr.length ; i++){
    let index = arr[i];
    let arrWithCommands = index.split(' ')
    let ladyBugToBeMoved = Number(arrWithCommands[0]);
    let direction = arrWithCommands[1];
    let toBePlaced = Number(arrWithCommands[2]);
    
    
    if(fieldArr[ladyBugToBeMoved] == 1){
        if(direction == 'rigth'){
            for(j = ladyBugToBeMoved; j < fieldArr.length; j++){
                if(fieldArr[j] == 0){
                    fieldArr[j] = 1;
                    break;
                }
            }
        } else if(direction == 'left'){
            let operation = -1;
            if(toBePlaced < 0){
                toBePlaced = Math.abs(toBePlaced)
            }
            let cycleEnd = ladyBugToBeMoved - (toBePlaced);
           
            for(k = ladyBugToBeMoved; k >= cycleEnd; k--){
                
                operation++;
                if(fieldArr[k] !== 1 && operation == toBePlaced ){
                    fieldArr[k] = 1;
                    break;
                }
            }
        }
        fieldArr[ladyBugToBeMoved] = 0;
    }
}
console.log(fieldArr.join(' '));
}
//ladyBugs([ 3, '0 1', '0 right 1', '2 right 1' ]);
//ladyBugs([ 3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);
ladyBugs([ 5, '3', '3 left 2', '1 left -2'])
   
    
    
// for(i = 0; i < arr.length; i++){
 //    let currentOperations = arr.shift();
 //   let currArr = [];
 //    currArr.push(currentOperations);
    
 //    console.log(currArr);
 //}
 //console.log(fieldArr);