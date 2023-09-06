// 1. JSON , stringify, parse
// const student = {
//     name: 'Shakib Khan',
//     age: 32,
//     movies: ['abcd', 'asdf']
// }
// const studentJSON = JSON.stringify(student)
// console.log(studentJSON);

// const studentObject = JSON.parse(studentJSON)
// console.log(studentObject);

// 2. fetch
// fetch ('url')
//     .then(res => res.json())
//     .then(data => console.log(data))

//3. keys
// const keys = Object.keys(student)    
// console.log(keys);

//4. value
// const value = Object.values(student)
// console.log(value);

//5. for----> forEach, map

//6. for fo --> aon array like object

//7. for in--> on object

//add on remove on array
const products = [
    {name: 'laptop', price: 32000, brand: 'lenovo', color: 'silver'},
    {name: 'Mobile', price: 6500, brand: 'Apple', color: 'Black'},
    {name: 'Mobile', price: 20000, brand: 'Oppo', color: 'Golden'},
    {name: 'Watch', price: 5600, brand: 'Mi', color: 'Black'},
    {name: 'Tablet', price: 200000, brand: 'pixel', color: 'golden'},
];
const newProduct = {name: 'webCame', price: 5000, brand: 'cannon', color: 'black'}
//copy products an array an then add element
const newProducts = [...products, newProduct] 
console.log(newProducts);


//create a new array without one specific item
//remove tablet means create a new array without the tablet
const remaining = products.filter(p => p.name !== 'Tablet');
console.log(remaining); 
