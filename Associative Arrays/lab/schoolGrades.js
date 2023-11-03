function schoolGrades(input){

    let schoolGradesList = {};

    for(let index of input){

        let tokens = index.split(' ');
        let name = tokens.shift();
        let keys = Object.keys(schoolGradesList);
        let tokensAsNums = tokens.map(token => {return Number(token)})
       
        if(keys.includes(name)){
            schoolGradesList[name].push(...tokensAsNums);
            
        } else {
            schoolGradesList[name] = tokensAsNums;
           
        }
        

    }

    let entries = Object.entries(schoolGradesList).sort((a, b) => a[0].localeCompare(b[0]));
    

   //console.log(sorted);
    for(let [name, grades] of entries){
        let gradesSum = grades.reduce((acc, value) => acc + value);

        console.log(`${name}: ${(gradesSum / grades.length).toFixed(2)}`);
    }

}
schoolGrades(['Lilly 4 6 6 5',

'Tim 5 6',

'Tammy 2 4 3',

'Tim 6 6'])

// schoolGrades(['Steven 3 5 6 4',

// 'George 4 6',

// 'Tammy 2 5 3',

// 'Steven 6 3'])