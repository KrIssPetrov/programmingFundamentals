function occurences(str) {

    let tokens = str.split(' ');

    let list = {};

    for (let string of tokens) {
        let strToLowerCase = string.toLowerCase()
        if (strToLowerCase in list) {
            list[strToLowerCase]++;
        } else {
            list[strToLowerCase] = 1;
        }
    }

    let result = ''
    let entries = Object.entries(list);
    
    for (let element in entries) {
        if (entries[element][1] % 2 !== 0) {
            result += entries[element][0] + ' ';
        }
    }
    console.log(result);

}
occurences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')