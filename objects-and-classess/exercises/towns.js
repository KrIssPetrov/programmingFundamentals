function towns(arr){

    let townsInfo = {};

    for(let town of arr){
        let currTownInfo = town.split(' |');
        let [city, latitude, longitude] = currTownInfo;
        townsInfo['town'] = city;
        townsInfo['latitude'] = Number(latitude).toFixed(2);
        townsInfo['longitude'] = Number(longitude).toFixed(2);
        // townsInfo.town = city;
        // townsInfo.latitude = Number(latitude).toFixed(2);
        // townsInfo.longitude = Number(longitude).toFixed(2);
        //console.log(townsInfo);
        console.log(townsInfo);
    }
}
towns(['Sofia | 42.696552 | 23.32601','Beijing | 39.913818 | 116.363625'])