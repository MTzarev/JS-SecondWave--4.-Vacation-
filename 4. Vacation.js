function vacation(num, type, dayType) {
    let price = 0;
    if (dayType === "Friday") {
        if (type == "Students") {
            price = 8.45;
        } else if (type === "Business") {
            price = 10.90;
        } else if (type === "Regular") {
            price = 15;
        }
    } else if (dayType === "Saturday") {
        if (type === "Students") {
            price = 9.80;
        } else if (type === "Business") {
            price = 15.60;
        } else if (type === "Regular") {
            price = 20;
        }
    } else if (dayType === "Sunday") {
        if (type === "Students") {
            price = 10.46;
        } else if (type === "Business") {
            price = 16;
        } else if (type === "Regular") {
            price = 22.50;
        }
    }
    let totalPrice = 0
    if (num >= 30 && num < 100 && type === "Students") {
        totalPrice = price * num * 0.85;
    } else if (num >= 100 && type === "Business") {
        totalPrice = price * (num - 10);
    } else if (num >= 10 && num <= 20 && type === "Regular") {
        totalPrice = totalPrice * 0.95;
    } else {
        totalPrice = price * num;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);

}
vacation(40,
    "Regular",
    "Saturday");
