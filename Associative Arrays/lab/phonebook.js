function phoneBook(input) {

    let phoneBookList = {};

    for (let index of input) {
        [name, phone] = index.split(' ');
        phoneBookList[name] = phone;
        //  console.log(name, phone);
    }

    let entries = Object.entries(phoneBookList)
    entries.forEach(element => {
        console.log(element.join(' -> '));
    });
}
phoneBook(['Tim 0834212554',

    'Peter 0877547887',

    'Bill 0896543112',

    'Tim 0876566344'])