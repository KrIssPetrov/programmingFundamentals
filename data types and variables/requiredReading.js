function readings(pages, pagesForHour, allowedDays){
    let totalTimeToRead = pages / pagesForHour;
    let hoursForADay = totalTimeToRead / allowedDays;

    console.log(hoursForADay);
}
readings(212, 20, 2)