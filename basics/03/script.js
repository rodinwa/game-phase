//Calculate

// addition
let a = 1 + 1;
console.log(a);

let b = 10;
let c = a+b;
console.log(c);

b += 1;
console.log(b);

let x = 10 -5;
console.log(x);

let y = b + x;
console.log(y);

x = x -1;
// x -= 1;
console.log(x);

//multiplication
let unitPrice = 2;
let units = 10;
let total = unitPrice * units;
console.log(total);

//division
let n = 10;
let result = n / 2;

// modulus
let r = 5 % 2;

console.log(r);

// Challenge

let baseWeight = 10000,
    foodWeight = 100,
    passangersWeight = 10,

    fuelUnitWeight = 2,
    fuelUnits = 100,
    fuelWeight = fuelUnitWeight * fuelUnits,
    totalWeight = baseWeight + foodWeight + passangersWeight +
     fuelWeight;

console.log(totalWeight);
