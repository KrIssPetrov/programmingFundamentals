function employees(arr) {
    let employeesArr = []
    let employees = {};

    for (let employee of arr) {
        let personalNumber = Number(employee.length);
        employees[employee] = personalNumber;
        //console.log(personalNumber);

    }

    for (key in employees) {
        console.log(`Name: ${key} -- Personal Number: ${employees[key]}`);
    }

    //console.log(employees);
}
employees(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal'])