function oddEvenSum(num) {

    let odd = 0;
    let even = 0;
    let str = num.toString();
    let strToArr = str.split('');


    for (i = 0; i < str.length; i++) {
        let digit = Number(str[i]);

        if (digit % 2 == 0) {
            even += digit;
        } else {
            odd += digit;
        }
    }

    console.log(`Odd sum = ${odd}, Even sum = ${even}`);
}
oddEvenSum(1000435)