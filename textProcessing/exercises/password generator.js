function passwordGenerator(arr) {

    let [str1, str2, replacement] = arr;

    let concat = str1 + str2;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let index = 0;

    for (let char of concat) {
        if (vowels.includes(char)) {

            if (index >= replacement.length) {
                index = 0;
            }
            concat = concat.replace(char, replacement[index].toUpperCase());

            index++;
        }
    }

    concat = concat.split('').reverse().join('')
    console.log(`Your generated password is ${concat}`);

}
passwordGenerator([

    'ilovepizza',

    'ihatevegetables',

    'orange'

])