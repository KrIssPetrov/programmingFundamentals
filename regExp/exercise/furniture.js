function furniture(input){

    let shoppingCart = [];
    let totalPrice = 0;

    let pattern = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>\d+\.?\d*)!(?<qty>\d+)/;

    let command = input.shift();

    while(command !== 'Purchase'){
        let match = command.match(pattern);

        if(match){
        let name = match.groups.name;
        let price = Number(match.groups.price);
        let qty = Number(match.groups.qty);
        let overallPrice = price * qty;
        
        shoppingCart.push(name)
        totalPrice += overallPrice;
       // console.log(name);
        command = input.shift();
        } else{
            command = input.shift();
        }
    }

    console.log(`Bought furniture:`);
    shoppingCart.forEach(item => console.log(item));
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);

}
//furniture(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase'] );
furniture(['>>Laptop<<312.2323!3',

'>>TV<<300.21314!5',

'>Invalid<<!5',

'>>TV<<300.21314!20',

'>>Invalid<!5',

'>>TV<<30.21314!5',

'>>Invalid<<!!5',

'Purchase'])