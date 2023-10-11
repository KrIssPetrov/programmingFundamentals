function loadingBar(percent) {

    let percentToIdex = percent / 10;
    let arr = [];
    arr.length = 10;
    arr.fill('.');

    let currNum = 1;
    for (i = 0; i < percentToIdex; i++) {
        arr[i] = '%';
        currNum++;
    }

    if (percent < 100) {
        console.log(`${percent}% [${arr.join('')}]`)
        console.log('Still loading...');
    } else {
        console.log('100% Complete!');
    }
}
loadingBar(40);