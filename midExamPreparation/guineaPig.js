function guineaPig(arr) {

    let foodIngrams = Number(arr[0] * 1000);
    let hayQtyinGrams = Number(arr[1] * 1000);
    let coverInGrams = Number(arr[2] * 1000);
    let puppyInGrams = Number(arr[3] * 1000);

    let isEnough = true;

    let day = 1;

    while (day <= 30) {
        
        foodIngrams -= 300;
        
        if (day % 2 == 0) {
            let hayToUse = foodIngrams * 0.05;
            hayQtyinGrams -= hayToUse;
        }
        
        if (day % 3 == 0) {
            let coverToUse = Number((puppyInGrams / 3).toFixed(2));
            coverInGrams -= coverToUse
        }
        if (foodIngrams <= 0 || hayQtyinGrams <= 0 || coverInGrams <= 0) {
            console.log(`Merry must go to the pet store!`);
            isEnough = false;
            break;
        }
        day++;
    }

    if (isEnough) {
        console.log(`Everything is fine! Puppy is happy! Food: ${((foodIngrams / 1000).toFixed(2))}, Hay: ${(hayQtyinGrams / 1000).toFixed(2)}, Cover: ${(coverInGrams / 1000).toFixed(2)}.`);
    }
    //console.log(coverToUse);

}
//guineaPig([10, 5, 5.2, 1]);
//guineaPig([1,1.5,3,1.5]);
guineaPig([9,5,5.2,1])