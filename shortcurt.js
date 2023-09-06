// false value
// '', 0, false, null, undefined

// true value
// 'any text', 5, true, {}, []

//check any truthy

let myVar = 5;
if (myVar) {
    myVar = myVar* 100;
}
else{
    myVar = 0
}

//you check negative or falsy anything
let myMoney = 50;
if (!myMoney) {
    
}
const money = 80;
let food;
if (money > 100) {
    food = 'I eat Biryani'
}
else{
    food = 'I eat cha and biscuit'
}
//ternary
const food1 = money>100 ? 'Biryani': 'cha'
console.log(food1);

const drink = (money > 100 && myVar > 100) ? 'coke' : 'filter water'
console.log(drink);

//number to string conversion
const num1 = 52;
console.log(num1);
const numStr = num1 + '';
console.log(numStr);

//string to number conversion
const input = '520';
console.log(input);
const inputNUmber = +input;
console.log(inputNUmber);

//  functional ternary operator
let isActive = true;
const showUser = () => console.log('Display User');
const hideUser = () => console.log('hide User');
isActive ? showUser() : hideUser() 
//use && if the left side is true then right side will be executed
isActive && showUser()  
// use || if the left side is false then right side will be executed
isActive || hideUser()

// toggle boolean
isActive = !isActive




