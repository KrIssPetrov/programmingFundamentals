function grade(grade1){

function formatGrade(grade) {

    result = ''
    if (grade < 3) {
        result = `Fail (${Math.floor(grade)})`;
    } else if (grade < 3.50) {
        result = `Poor (${(grade).toFixed(2)})`;
    } else if (grade < 4.50) {
        result = `Good (${(grade).toFixed(2)})`;
    } else if (grade < 5.50) {
        result = `Very good (${(grade).toFixed(2)})`;
    } else {
        result = `Excellent (${(grade).toFixed(2)})`
    }

    return (result);
}

let result = formatGrade;

console.log(result (grade1));
}
grade(3);