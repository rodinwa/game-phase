let item = 'window';

if (item == 'engine') {
    console.log('engine!')
}

if (item != 'engine') {
    console.log('not engine!')
}

let score = 50;

if (score >= 60) {
    console.log('you passed!')
}
else if (score < 10) {
    console.log('meet the teacher');
}
else {
    console.log('not pass');
}

let isEngine = item == 'engine';
console.log(isEngine);

// Challenge
let balance = 100;
let itemPrice = 1000;

// 1. check balance
let isEnough = balance >= itemPrice;

// 2 if they buy, update balance
if (isEnough) {
    //balance = balance - itemPrice;
    balance -= itemPrice;
    console.log('You purchased the item. Your new balance is: ' + balance);
} else {
    console.log('Sorry you need more money, your balance is: ' + balance);
}