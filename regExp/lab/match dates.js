function dates(dates){
     dates = dates.join(' ');

    let pattern = /(?<date>\d{2})([\/,\-,\.])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})/gm

    let date = pattern.exec(dates);

    while(date != null){
        console.log(`Day: ${date.groups.date}, Month: ${date.groups.month}, Year: ${date.groups.year}`);

        date = pattern.exec(dates);
    }
}
dates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016'] )