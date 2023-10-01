function dayOfWeek(day) {
    let arrDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    let result = (arrDays[day - 1]);
    if (result !== undefined) {
        console.log(result);
    }
    else {
        console.log('Invalid day!')
    }
}

dayOfWeek(10)