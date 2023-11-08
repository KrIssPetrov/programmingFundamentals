function arenaTier(input){

    let tier = [];

    let index = 0;
    let command = input[index];
     while(command !== 'Ave Cesar'){

        let checkInput = input[index].split(' ');

        if(checkInput[1] == '->'){
            let [name, tehnique, skillAsStr] = input[index].split(' -> ');

            let skill = Number(skillAsStr);
            let gladiators = [];
            tier.forEach(value => {
                //let objValues = (Object.values(value));
                gladiators.push(value.name);
            })
            if (!gladiators.includes(name)){

                let newGladiator = {name: name, totalSkill: skill, [tehnique]: skill};
                tier.push(newGladiator);

            } else if(gladiators.includes(name)){

                for(let gladiator of tier){

                    if (gladiator.name === name){

                        if(tehnique in gladiator){

                            let previousSkill = gladiator.tehnique;

                            if (skill > previousSkill){

                                gladiator[tehnique] = skill;
                                gladiator.totalSkill -= previousSkill;
                                gladiator.totalSkill += skill;

                            }
                        } else {

                            gladiator[tehnique] = skill;
                            gladiator.totalSkill += skill;

                        }

                    }

                }

            }
                

            //     }
            // } else if (!tier.includes()){
            //     //let newGladiator = {[name]: skill, tehnique: skill}
            // }
            

        } else if (checkInput[1] == 'vs'){
            let [gladiator1, gladiator2] = input[index].split(' vs ');
            let gladiators = [];

            for(let gladiator of tier){
                gladiators.push(gladiator.name);
            }

            if(gladiators.includes(gladiator1) && gladiators.includes(gladiator2)){

                let gladiator1Tehniques = [];
                let gladiator2Tehniques = [];
                let gladiator1Dead = false;
                let gladiator2Dead = false;
                for(let gladiator of tier){
                    if (gladiator.name == gladiator1){
                        let entries = Object.entries(gladiator);
                        let spliced = entries.splice(0, 2);
                        gladiator1Tehniques.push(...entries);
                    } else if(gladiator.name == gladiator2){
                        let entries = Object.entries(gladiator);
                        let spliced = entries.splice(0, 2);
                        gladiator2Tehniques.push(...entries);
                    }
                }

                for(i = 0; i < gladiator1Tehniques.length; i++){
                        let currTehniqueOf1 = gladiator1Tehniques[i][0];
                        let skillof1 = gladiator1Tehniques[i][1];
                            for(j = 0; j < gladiator2Tehniques.length; j++){
                                let currTehniqueOf2 = gladiator2Tehniques[j][0];
                                let skillOf2 = gladiator2Tehniques[j][1];

                                if (currTehniqueOf1 == currTehniqueOf2){
                                    if (skillof1 < skillOf2){
                                        gladiator1Dead = true;
                                        break;
                                    } else if(skillof1 > skillOf2){
                                        gladiator2Dead = true;
                                        break;
                                    }
                                }
                            }

                        if(gladiator1Dead || gladiator2Dead){
                            break;
                        }
                    }

                if(gladiator1Dead || gladiator2Dead){
                    if(gladiator1Dead){
                        for(let gladiator of tier){
                            if(gladiator.name == gladiator1){
                                let indexOfDead = tier.indexOf(gladiator);
                                let spliced = tier.splice(indexOfDead);
                            }
                        }
                    } else {
                        for(let gladiator of tier){
                            if(gladiator.name == gladiator2){
                                let indexOfDead = tier.indexOf(gladiator);
                                let spliced = tier.splice(indexOfDead, indexOfDead);
                            }
                        }
                    }
                }
                
               // console.log(gladiator1Tehniques);
               // console.log(gladiator2Tehniques);

            } else {
                index++;
                command = input[index];
                continue;
            }


        }

        //console.log(checkInput);

        index++;
        command = input[index];
     }

     tier.sort((a, b) => b.totalSkill - a.totalSkill || a.name.localeCompare(b.name));

     for(let index of tier){
        let entries = Object.entries(index);
        let spliced = entries.splice(0, 2);
        entries.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

        console.log(`${index.name}: ${index.totalSkill} skill`);
       entries.forEach(entrie => console.log(`- ${entrie[0]} <!> ${entrie[1]}`));
     }

}
arenaTier([ 'Peter -> Duck -> 400',
 'Julius -> Shield -> 150',
  'Gladius -> Heal -> 200',
 'Gladius -> Support -> 250',
  'Gladius -> Shield -> 250',
   'Peter vs Gladius', 
   'Gladius vs Julius', 
   'Gladius vs Maximilian', 
   'Ave Cesar' ])
// arenaTier([

//     'Peter -> BattleCry -> 400',
    
//     'Alex -> PowerPunch -> 300',
    
//     'Stefan -> Duck -> 200',
    
//     'Stefan -> Tiger -> 250',
    
//     'Ave Cesar'
    
//     ])
