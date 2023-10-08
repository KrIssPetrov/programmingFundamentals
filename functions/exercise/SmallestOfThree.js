function smalestOfThree(num1, num2, num3) {

    let arrWithNums = [num1, num2, num3];
    let arrToStr = arrWithNums.toString();
    arrToStr = arrToStr.split(',');



    let result = smallest();
    console.log(result);

    function smallest(smallestNum) {
        smallestNum = arrToStr[0];

        for (i = 0; i < arrToStr.length; i++) {
            let currentNum = Number(arrToStr[i]);
            if (currentNum < smallestNum) {
                smallestNum = currentNum;
            }
        }
        return smallestNum;
    }
}
smalestOfThree(2, 1, 1);