function convertToJSON(name, lastName, color){
    let person = {
        name: name,
        lastName: lastName,
        hairColor: color
    }

    let json = JSON.stringify(person);

    console.log(json);
}
convertToJSON('George', 'Jones','Brown')