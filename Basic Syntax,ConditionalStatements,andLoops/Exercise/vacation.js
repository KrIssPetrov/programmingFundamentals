function vacation(count, typeOfGroup, dayOfWeek) {
    let priceForGroup = 0;

    switch (typeOfGroup) {
        case "Students":
            if (dayOfWeek == "Friday") {
                priceForGroup = count * 8.45;

            } else if (dayOfWeek == "Saturday") {
                priceForGroup = count * 9.80;
            } else if (dayOfWeek == "Sunday") {
                priceForGroup = count * 10.46;
            }
            if (count >= 30) {
                priceForGroup *= 0.85;
            }
            break;

        case "Business":
            if (count >= 100) {
                count -= 10;
            }
            if (dayOfWeek == "Friday") {
                priceForGroup = count * 10.90;

            } else if (dayOfWeek == "Saturday") {
                priceForGroup = count * 15.60;
            } else if (dayOfWeek == "Sunday") {
                priceForGroup = count * 16;
            }

            break;

        case "Regular":
            if (dayOfWeek == "Friday") {
                priceForGroup = count * 15;

            } else if (dayOfWeek == "Saturday") {
                priceForGroup = count * 20;
            } else if (dayOfWeek == "Sunday") {
                priceForGroup = count * 22.50;
            }
            if (count >= 10 && count <= 20) {
                priceForGroup *= 0.95;
            }
            break;
    }
    console.log(`Total price: ${priceForGroup.toFixed(2)}`);
}
vacation(40,

    "Regular",

    "Saturday")