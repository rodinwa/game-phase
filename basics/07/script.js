// 1 hour = 60 minute4s
function hourToMinutes(hours) {
    let result = hours * 60;
    console.log(result);
    return result;
}

let a = hourToMinutes(10);
let b = hourToMinutes(10);

let dayToHours = function (days) {
    return days * 24;
};

let c = dayToHours(1);
console.log(c);

// variables declarations
let balance = 100,
    stock = 50,
    price = 5,
    quantity = 8;

// 1. check if we have stock
// 2. reduce stock, increase balance
function makeSale(items) {
    if (stock > items) {
        let change = items * price;
        
        stock -= items;
        
        balance += change;
        console.log(stock);
        console.log(balance);
        return "you made a sale";
    } else {
        return "not enough items to sell";
    }
}

let madeIt = makeSale(quantity);
let nope = makeSale(55);
console.log(madeIt);
console.log(nope);