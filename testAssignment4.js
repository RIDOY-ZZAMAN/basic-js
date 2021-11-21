//--------------------------Answer to the Problem 1 Start---------------------------------
//Defining the function named as "seerToMon" with the parameter "seer"
function seerToMon(seer) {
    //If the user inserts a numbere which is less than 0, that means the user inserts negative number and the system will show an string type error message
    if (seer < 0) {
        console.log("Please input a number greater than 0!!!");
    }
    // Else, If the user inserts String, For example ("40") the system will also show an string type error message
    else if (typeof seer == "string") {
        console.log("Do not insert string!!! Please insert a number");
    }
    //Else, we will do the normal calculation. For Example If the user inserts a number, like 80 seer, it will show 2 mon as output.
    else {
        var mon = seer / 40;
    }
    //returning the value of mon
    return mon;
}
//Calling the function and assigned to a variable
var monCalculation = seerToMon(80);
//Finally, we see the output by console log
console.log(monCalculation);
//----------------------------Answer to the Problem 1 End----------------------------
//---------------------------Answer to the Problem 2 Start----------------------------
//Defining the function named as "totalSales" with the parameters "shirts, pants, shoes"
function totalSales(shirts, pants, shoes) {
    //If any of the parameters becomes negative, then the system will show this string type error message.
    if (shirts < 0 || pants < 0 || shoes < 0) {
        console.log("Please don't Insert a nagative number, Insert a positve number.Thank you!!")
    }
    //If any of the parameters becomes greater than 1000, then the system will show this string type error message.
    else if (shirts > 1000 || pants > 1000 || shoes > 1000) {
        console.log("Products Limitation Exceeded!!!!. We don't have that many products to sell you")
    }
    // Else, we will do the normal calculation for total sell.
    else {
        const shirtsPrice = shirts * 100;
        const pantsPrice = pants * 200;
        const shoesPrice = shoes * 500;
        var totalSale = shirtsPrice + pantsPrice + shoesPrice;
    }
    //returning the value of totalSale
    return totalSale;
}
//Calling the function and assigned to a variable
var totalSelling = totalSales(1, 1, 1);
//Finally, we see the output by console log
console.log(totalSelling);
//---------------------------Answer to the Problem 2 End----------------------------
//---------------------------Answer to the Problem 3 Start----------------------------
//Defining the function named as "deliveryCost" with the parameter "tshirtQuantity" for delivery
function deliveryCost(tshirtQuantity) {
    //Assigning cost for per piece of tshirt on different ranges
    const costForFirstHundred = 100;
    const costForSecondHundred = 80;
    const costForRest = 50;
    //If the user inserts a numbere which is less than 0, that means the user inserts negative number and then the system will show an string type error message
    if (tshirtQuantity < 0) {
        console.log("Don't Insert a nagative number, Please Insert a positve numbers.Thank you!")
    }
    // Else, If the tshirtQuantity becomes greater than 10000, then the system will also show this string type error message.
    else if (tshirtQuantity > 10000) {
        console.log("Overloaded!!! We don't deliver this huge amount of tshirt")
    }
    //Else, if tshirtQuantity less than or equal to 100, we will do normal calculation
    else if (tshirtQuantity <= 100) {
        const totalCostFirstHundred = tshirtQuantity * 100;
        return totalCostFirstHundred;
    }
    //Else, if tshirtQuantity less than or equal to 200, we will do normal calculation
    else if (tshirtQuantity <= 200) {
        const firstHundredCost = 100 * costForFirstHundred;
        const restCost = tshirtQuantity - 100;
        const secondHundredCost = restCost * costForSecondHundred;
        const totalCostSecondHundred = firstHundredCost + secondHundredCost;
        return totalCostSecondHundred;
    }
    //Else, if tshirtQuantity is more than 200, we will do normal calculation
    else {
        const firstHundredCost = 100 * costForFirstHundred;
        const secondHundredCost = 100 * costForSecondHundred;
        const restCost = tshirtQuantity - 200;
        const restHundredCost = restCost * costForRest;
        const totalCostRestHundred = firstHundredCost + secondHundredCost + restHundredCost;
        return totalCostRestHundred;
    }
}
//Calling the function and assigned to a variable
const overAllDeliveryCost = deliveryCost(201);
//Finally, see the output by console log
console.log(overAllDeliveryCost);
//---------------------------Answer to the Problem 3 End----------------------------

//---------------------------Answer to the Problem 4 Start----------------------------
//Defining the function named as "perfectFriend" with the parameter "names"
function perfectFriend(names) {
    for (var name of names) {
        if (name.length == 5) {
            break;
        }
        else if (typeof name == "number") {
            return "Please Insert strings in your [names] Array, not a number";
        }
    }
    return name;
}
const names = [1];
const myFriend = perfectFriend(names);
console.log(myFriend);
