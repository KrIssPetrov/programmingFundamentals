function companyUsers(input) {

    let companyList = {};

    for (let index of input) {
        let [company, employeeId] = index.split(' -> ');

        if (!companyList.hasOwnProperty(company)) {
            companyList[company] = [employeeId];
        } else {
            let arr = companyList[company]
            if (!companyList[company].includes(employeeId)) {
                companyList[company].push(employeeId);
            }

        }
        //console.log(company, employeeId); 
    }
    companyList = Object.entries(companyList).sort((a, b) => a[0].localeCompare(b[0]));
    companyList.forEach(element => {
        console.log(element[0]);
        let array = element[1];
        array.forEach(element => console.log('--', element))
    });

}
companyUsers(['SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345'])