function meetengs(input) {

    let schedule = {};

    for (let index of input) {
        let keys = Object.keys(schedule);
        [day, name] = index.split(' ');

        if (!keys.includes(day)) {
            console.log(`Scheduled for ${day}`);
            schedule[day] = name;
        } else {
            console.log(`Conflict on ${day}!`);
            continue;
        }

    }

    let entries = Object.entries(schedule);
    entries.forEach(element => {
        console.log(element.join(' -> '));
    });

}
meetengs(['Monday Peter',

    'Wednesday Bill',

    'Monday Tim',

    'Friday Tim'])