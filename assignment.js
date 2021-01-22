// 1. kilometer to meter converter (1 kilometer = 1000 meter)
function kilometerToMeter(distance) {
    if (distance == undefined) {
        return "ERROR: Please Pass the Distance value.";
    } else if (distance < 0 || typeof distance != "number") {
        return "ERROR: Distance Can\'t be Negative or String";
    } else {
        var meter = distance * 1000;
        return meter;
    }
}

// 2. Budget calculation to buy watch, phone and laptop (1 watch = 50$, 1 phone = 100$, 1 laptop = 500$)
function budgetCalculator(watch, phone, laptop) {
    var totalBudget;

    if (watch == undefined || phone == undefined || laptop == undefined) {
        return "ERROR: Please Pass all required Value.";
    } else if (parseInt(watch) != watch || parseInt(phone) != phone || parseInt(laptop) != laptop) {
        return "ERROR: Your amount of product can\'t be fraction.";
    } else if (watch < 0 || phone < 0 || laptop < 0) {
        return "ERROR: Amount of Product can\'t be negative.";
    } else if (typeof watch != "number" || typeof phone != "number" || typeof laptop != "number") {
        return "ERROR: You can't pass String as Input.";
    } else {
        var watchPrice = watch * 50;
        var phonePrice = phone * 100;
        var laptopPrice = laptop * 500;
        totalBudget = watchPrice + phonePrice + laptopPrice;
    }
    return totalBudget;
}

// 3. Hotel Cost Calculation
function hotelCost(spendDays) {
    var totalCost, firstTenDaysCost, secondTenDaysCost, remainingDaysCost;

    if (spendDays == undefined) {
        return "ERROR: Please Pass a value.";
    } else if (parseInt(spendDays) != spendDays) {
        return "ERROR: Your days count should be Integer as Full Day.";
    } else if (spendDays < 0 || typeof spendDays != "number") {
        return "ERROR: You can\'t pass negative value or String as Input.";
    } else if (spendDays <= 10) {
        totalCost = spendDays * 100;
    } else if (spendDays <= 20) {
        firstTenDaysCost = 10 * 100;
        remainingDaysCost = (spendDays - 10) * 80;
        totalCost = firstTenDaysCost + remainingDaysCost;
    } else if (spendDays > 20) {
        firstTenDaysCost = 10 * 100;
        secondTenDaysCost = 10 * 80;
        remainingDaysCost = (spendDays - 20) * 50;
        totalCost = firstTenDaysCost + secondTenDaysCost + remainingDaysCost;
    }
    return totalCost;
}

// 4. Find the Friend holding the longest String;
function megaFriend(friendsArray) {
    var longestNameLength = 0;
    var longestName;

    if (friendsArray == undefined) {
        return "ERROR: Please pass Array to the function.";
    }
    if (friendsArray.length == 0) {
        return "ERROR: Your Array is empty.";
    }
    for (var i = 0; i < friendsArray.length; i++) {
        var name = friendsArray[i];
        var nameLength = friendsArray[i].length;

        if (nameLength > longestNameLength) {
            longestNameLength = nameLength;
            longestName = name;
        }
    }
    return longestName;
}





