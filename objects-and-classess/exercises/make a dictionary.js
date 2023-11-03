function makeADictionary(arr) {

    let dictionary = [];

    for (let index of arr) {

        let parse = JSON.parse(index);
        let term = Object.keys(parse).join();
        let description = Object.values(parse).join();
        let newObj = { term: term, description: description };
        

        let isInDictionary = dictionary.find((value) => value.term == term);

        if (isInDictionary) {
            
            isInDictionary.description = description;
            

        } else {
            dictionary.push(newObj);

        }
        

    }


    dictionary.sort((a, b) => a.term.localeCompare(b.term));
    

    for (let index of dictionary) {
        console.log(`Term: ${index.term} => Definition: ${index.description}`);
    }
}
makeADictionary([

    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',

    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Coffee":"b hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',

    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',

    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',

    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'

])