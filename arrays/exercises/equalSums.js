function equalSums(arr) {

    let result = 0;
    let isSuchIndex = false;
    let isSingleElement = false;
    for (i = 0; i < arr.length; i++) {
        if (arr.length == 1) {
            result = 0;
            isSingleElement = true
            console.log('0');
            break;
        }
        let currentNum = i;
        let sumLeft = 0;
        let sumRigth = 0;

        for (leftCheck = 0; leftCheck < currentNum; leftCheck++) {
            sumLeft += arr[leftCheck];
        }
        for (rigthCheck = currentNum + 1; rigthCheck < arr.length; rigthCheck++) {
            sumRigth += arr[rigthCheck];
        }

        if (sumLeft == sumRigth) {
            result = currentNum;
            isSuchIndex = true;
        }

    }
    if (isSuchIndex) {
        console.log(result);
    } else if (!isSuchIndex && !isSingleElement) {
        console.log('no');
    }

}
//equalSums([1,2,3,3]);
//equalSums([1, 2]);
//equalSums([1]);
equalSums([0,2,0])