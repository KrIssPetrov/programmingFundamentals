function addressBook(input) {

    let addressList = {};

    for (let index of input) {
        let [name, address] = index.split(':');
        addressList[name] = address;
        //console.log(addressList);
    }

    let entries = Object.entries(addressList);
    let sorted = entries.sort((a, b) => a[0].localeCompare(b[0]));

    sorted.forEach((element) => {
        console.log(element.join(' -> '));
    })


}
addressBook(['Tim:Doe Crossing',

    'Bill:Nelson Place',

    'Peter:Carlyle Ave',

    'Bill:Ornery Rd'])