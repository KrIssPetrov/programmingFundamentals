function race(arr){

    let racers = arr.shift().split(', ');
    let racersScore = {};

    for(let racer of racers){
        racersScore[racer] = 0;
    }

    let letterPattern = /[A-Za-z]/gi;
    let digitPattern = /[0-9]/g;
    let info = arr.shift();
    //let command = info.match(pattern);

    while(info != 'end of race'){
        let currName = info.match(letterPattern).join('');
        let currScore = info.match(digitPattern).reduce((acc, value) => Number(acc) + Number(value));

        // for(let index of command){
        //     if(/[A-Za-z]/.test(index)){
        //         currName += index;
        //     } else{
        //         currScore += Number(index);
        //     }
        // }
       // currName = currName.join('')
        if(currName in racersScore){
            racersScore[currName] += currScore;
        }
        //console.log(command);

        info = arr.shift()
        //command = info.match(pattern);
    }

    let entries = Object.entries(racersScore).sort((a, b) => b[1] - a[1]);

    
        console.log(`1st place: ${entries[0][0]}`);
        console.log(`2nd place: ${entries[1][0]}`);
        console.log(`3rd place: ${entries[2][0]}`);

    // for(let single in racersScore){
    //     console.log(`${single} -> ${racersScore[single]}`);
    // }
    //console.log(racers);

}
// race(['George, Peter, Bill, Tom',

// 'G4e@55or%6g6!68e!!@ ',

// 'R1@!3a$y4456@',

// 'B5@i@#123ll',

// 'G@e54o$r6ge#',

// '7P%et^#e5346r',

// 'T$o553m&6',

// 'end of race'])
race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',

'Mi*&^%$ch123o!#$%#nne787) ',

'%$$B(*&&)i89ll)*&) ',

'R**(on%^&ald992) ',

'T(*^^%immy77) ',

'Ma10**$#g0g0g0i0e',

'end of race'] )