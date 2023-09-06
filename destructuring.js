// 1. array destructuring 
// const numbers = [45, 63];
// const [x, y] = numbers;
// console.log(x, y);


// function boxify(num1, num2) {
//     const nums = [num1, num2]
//     return nums;
// }
// console.log(boxify(90, 34));


// const student = {
//     name: 'Shakib Khan',
//     age: 32,
//     movies: ['abcd', 'asdf']
// }
// const [firstMovies, secondMovies] = student.movies
// console.log(firstMovies, secondMovies);

// 2. object destructuring 
// const {name, age} = {name: 'Babul', age: 32}
// console.log(name, age);

const employee = {
    id: 'vs code',
    designation: 'developer',
    machine: 'mac',
    language: ['html', 'css', 'js'],
    specification: {
        height: 6,
        width: 62,
        address: 'Dhaka',
        drink: 'water',
        watch: {
            color: 'black',
            price: 5000,
            brand: 'apple'
        }
    }
}
const {machine, id} = employee;
console.log(machine, id);
const {width, address} = employee.specification;
console.log(width, address);
const {color, brand} = employee.specification.watch;
console.log(color, brand);