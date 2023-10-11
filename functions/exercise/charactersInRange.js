function charactersInRange(char1, char2) {

    let code1 = char1.charCodeAt(0);
    let code2 = char2.charCodeAt(0);

    let minCode = Math.min(code1, code2);
    let maxCode = Math.max(code1, code2);

    let result = "";

    for (i = minCode + 1; i < maxCode; i++) {
        let currentChar = String.fromCharCode(i);
        result += `${currentChar} `;
    }
    console.log(result);
}
//charactersInRange('a','d');
charactersInRange('C', '#')