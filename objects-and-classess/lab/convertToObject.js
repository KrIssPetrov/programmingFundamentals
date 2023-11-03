function convert(jsonStr){
    let person = JSON.parse(jsonStr);
   
    for(let property of Object.keys(person)){
        console.log(`${property}: ${person[property]}`);
    }
    //console.log(person);
}
convert('{"name": "George", "age": 40, "town": "Sofia"}')