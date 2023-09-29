function theatrePromotions(typeOfDay, age) {
    let isNotInRange = false;
    if (age < 0 || age > 122) {
        console.log("Error!")
        isNotInRange = true;
    }
    let ticketPrice = 0;

    switch (typeOfDay) {
        case "Weekday":
            if (age <= 18) {
                ticketPrice = 12;
            } else if (age <= 64) {
                ticketPrice = 18;
            } else if (age <= 122) {
                ticketPrice = 12;
            } break;
        case "Weekend":
            if (age <= 18) {
                ticketPrice = 15;
            } else if (age <= 64) {
                ticketPrice = 20;
            } else if (age <= 122) {
                ticketPrice = 15;
            } break;
        case "Holiday":
            if (age <= 18) {
                ticketPrice = 5;
            } else if (age <= 64) {
                ticketPrice = 12;
            } else if (age <= 122) {
                ticketPrice = 10;
            } break;

    }
    if (!isNotInRange)
        console.log(`${ticketPrice}$`);
}
theatrePromotions("Weekday", 122)