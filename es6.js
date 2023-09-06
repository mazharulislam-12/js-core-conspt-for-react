// 1. template String
const numbers = [45, 62, 23, 78, 96]
const student = {
    name: 'Shakib Khan',
    age: 32,
    movies: ['abcd', 'asdf']
}
const about = `My Name is ${student.name}. I am now ${student.age}. My movies ${student.movies}. Has numbers ${numbers[2]}. Also like movies ${student.movies[0]}`
console.log(about);

// 2. arrow function 
const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65;
const isEven = x => x % 2 == 0;
const addThree = (x, y, z) => x + y + z ;
const doMath = (num1, num2) =>{
    const sum = num1 + num2;
    return sum;
}

// 3. spread operator
const originalArray = [1, 2, 3];
const copyArray = [...originalArray];
console.log(originalArray);
console.log(copyArray);

// create a new array form an older array and add an element
const currentNUmber = [...originalArray, 44]
console.log(currentNUmber);