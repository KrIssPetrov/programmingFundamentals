function travelTime(input) {

    let travelList = {};

    for (let destination of input) {
        let [country, town, price] = destination.split(' > ');
        price = Number(price);

        if (!travelList.hasOwnProperty(country)) {
            travelList[country] = [town, price];
        } else {
            //let indexOfTown = travelList[country]

            if (travelList[country].includes(town)) {

                update(town, price);

            } else {
                travelList[country].push(town, price)
            }
        }
        // console.log(travelList[country]);
        //console.log(country, town, price);
    }
    let entries = Object.entries(travelList);
    let newEntries = reduce(entries).sort((a, b) => a[0].localeCompare(b[0]) || a[1] - b[1]);

    for (let index of newEntries) {
        let [country, totalPrice, pairs] = index;
        pairs.sort((a, b) => a[1] - b[1]);
        let cycle = ''
        for (k = 0; k < pairs.length; k++) {
            let town = pairs[k][0];
            let price = pairs[k][1];
            cycle +=  ' ' + town + ' -> ' + price;
        }
        let result = country + ' ->' + cycle;
        console.log(result);
    }
    //console.log(`${newEntries[0]} -> ${newEntries[2].forEach(value => console.log(value, '->'))}`);
    //entries.sort((a, b) => a[0].localeCompare(b[0]) || a[1] - b[1]);
    //entries.forEach(entrie => console.log(`${entries[0]} `))


    function reduce(entries) {
        let newEntries = []
        for (let [country, destinations] of entries) {
            let totalPrice = 0;
            let list = [];
            for (let index = 0; index < destinations.length; index++) {
                //list.push(index)
                if (typeof destinations[index] === 'number') {
                    totalPrice += destinations[index];
                } else {
                    list.push([destinations[index], destinations[index + 1]])
                }
            }
            //console.log(newArr);


            newEntries.push([country, totalPrice, list]);
        }

        return newEntries;
    }

    function update(town, newPrice) {

        let entries = Object.entries(travelList);

        for (let [country, cityInfo] of entries) {

            for (let i = 0; i < cityInfo.length; i += 2) {
                let currentCity = cityInfo[i];
                let oldPrice = cityInfo[i + 1];

                if (currentCity == town) {
                    if (oldPrice > newPrice) {
                        cityInfo[i + 1] = newPrice;
                        travelList[country] = cityInfo;

                        return;
                    }
                }
            }

        }
    }
}
// travelTime([

//     "Bulgaria > Sofia > 500",

//     "Bulgaria > Sopot > 800",

//     "France > Paris > 2000",

//     "Albania > Tirana > 1000",

//     "Bulgaria > Sofia > 200"

//     ])
travelTime([

    'Bulgaria > Sofia > 25000',

    'Bulgaria > Sofia > 25000',

    'Kalimdor > Orgrimar > 25000',

    'Albania > Tirana > 25000',

    'Bulgaria > Varna > 25010',

    'Bulgaria > Lukovit > 10'

])