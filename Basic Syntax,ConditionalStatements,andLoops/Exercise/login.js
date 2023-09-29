function login(input) {
    let username = input[0];
    let splitPass = username.split('')
    let reversedArr = splitPass.reverse()
    let reversedPass = reversedArr.join("")

    let tries = 1;
    let index = 1;
    let rightPass = false;

    for (i = 1; i <= input.length; i++) {
        if (input[i] == reversedPass) {
            rightPass = true;
            break;
        }
        if (tries == 4) {
            console.log(`User ${username} blocked!`);
            break;
        }
        console.log(`Incorrect password. Try again.`);
        tries++;

    }
    if (rightPass) {
        console.log(`User ${username} logged in.`);
    }



}
login(['sunny','rainy','cloudy','sunny','not',

'sunny']);