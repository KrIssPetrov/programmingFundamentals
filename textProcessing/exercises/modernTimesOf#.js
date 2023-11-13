function modernTimesOfHashTag(string) {

    let arr = string.split(' ').filter(index => index.startsWith('#') && index.length > 1).map(indx => indx.slice(1))
    //console.log(arr);
    for (let index of arr) {
        let isValid = true;

        for (let char of index) {
            if (!/[A-Za-z]/.test(char)) {
                isValid = false;
                break;
            }
        }

        if (isValid) {
            console.log(index);
        }

    }



}



modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia')