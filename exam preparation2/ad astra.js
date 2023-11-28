function adAstra(input) {

    let pattern = /([\||#])(?<product>[A-Za-z ]+)\1(?<expirationDate>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/g;
    let result = '';
    let caloriesForADay = 2000;
    let caloriesFromAllProduct = 0;
    let productList = pattern.exec(input[0]);

    while (productList !== null) {

        let { product, expirationDate, calories } = productList.groups;

        //console.log(product, expirationDate, calories);
        caloriesFromAllProduct += Number(calories);

        result += `Item: ${product}, Best before: ${expirationDate}, Nutrition: ${calories}\n`

        productList = pattern.exec(input[0])
    }

    let lastingDays = Math.floor(caloriesFromAllProduct / caloriesForADay)
    console.log(`You have food to last you for: ${lastingDays} days!`);
    console.log(result);
    //console.log(productList);

}
// adAstra([

//     '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'

//     ])

adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#IceCream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'])