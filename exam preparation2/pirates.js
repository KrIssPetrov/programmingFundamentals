function pirates(input) {

    let targetCities = {};

    while (input[0] !== 'Sail') {

        let [cityName, population, gold] = input.shift().split('||');
        population = Number(population);
        gold = Number(gold);
        let city = targetCities[cityName]

        let newCity = {
            population: population,
            gold: gold
        }


        if (!targetCities.hasOwnProperty(cityName)) {
            targetCities[cityName] = newCity;
        } else {
            city.population += population;
            city.gold += gold;
        }
        //console.log(citiesInfo);


    }

    input.splice(0, 1);

    while (input[0] !== 'End') {

        let tokens = input.shift().split('=>');
        let currentEvent = tokens.shift();
        let town = tokens.shift();
        let currentCity = targetCities[town];

        if (currentEvent == 'Plunder') {

            let populationToAttack = Number(tokens.shift());
            let goldToGet = Number(tokens.shift())

            currentCity.population -= populationToAttack;
            currentCity.gold -= goldToGet;

            console.log(`${town} plundered! ${goldToGet} gold stolen, ${populationToAttack} citizens killed.`);

            if (currentCity.population <= 0 || currentCity.gold <= 0) {
                delete targetCities[town];
                console.log(`${town} has been wiped off the map!`);
            }

        } else {
            let goldToRise = Number(tokens.shift());

            if (goldToRise < 0) {
                console.log(`Gold added cannot be a negative number!`);
                continue;
            }

            currentCity.gold += goldToRise;
            console.log(`${goldToRise} gold added to the city treasury. ${town} now has ${currentCity.gold} gold.`);
        }

    }

    if (Object.keys(targetCities).length > 0) {
        console.log(`Ahoy, Captain! There are ${Object.keys(targetCities).length} wealthy settlements to go to:`);
        
        // let targetCitiesEntry = Object.entries(targetCities);
        // let citiesArr = [];

        // for(let cityIndx of targetCitiesEntry){
        //     let targetCitiesKeys = Object.entries(cityIndx[1])
        //     citiesArr.push([cityIndx[0], ...targetCitiesKeys])
        //     console.log(cityIndx[0]);
        //     console.log(`${targetCitiesKeys[0][0]} -> ${targetCitiesKeys[0][1]}`);
            
        // }
        // citiesArr.sort((a, b) => a[1][1] - b[1][1])

        //let targetCitiesValues = Object.values(targetCities)
        // for(let cityIndx of targetCitiesEntry){
        //     let targetCitiesKeys = Object.entries(cityIndx[1])
        //     targetCitiesKeys.sort((a, b) => a[1] - b[1])
        //     console.log(cityIndx[0]);
        //     console.log(`${targetCitiesKeys[0][0]} -> ${targetCitiesKeys[0][1]}`);
            
        // }
        for (let town in targetCities) {
            let city = targetCities[town];
            console.log(`${town} -> Population: ${city.population} citizens, Gold: ${city.gold} kg`);
        }

    } else {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    }

}
// pirates((["Tortuga||345000||1250",

//     "Santo Domingo||240000||630",

//     "Havana||410000||1100",

//     "Sail",

//     "Plunder=>Tortuga=>75000=>380",

//     "Prosper=>Santo Domingo=>180",

//     "End"]))
pirates((["Nassau||95000||1000",

    "San Juan||930000||1250",

    "Campeche||270000||690",

    "Port Royal||320000||1000",

    "Port Royal||100000||2000",

    "Sail",

    "Prosper=>Port Royal=>-200",

    "Plunder=>Nassau=>94000=>750",

    "Plunder=>Nassau=>1000=>150",

    "Plunder=>Campeche=>150000=>690",

    "End"]))