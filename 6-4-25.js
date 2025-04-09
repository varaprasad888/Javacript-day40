// rest and spread operators 
let numbers = [1, 2, 3];
let newNumbers = [...numbers, 4, 5];
console.log(newNumbers);

let firstHalf = [1, 2];
let secondHalf = [3, 4];
let combined = [...firstHalf, ...secondHalf];
console.log(combined);

let person = { name: 'John', age: 30 };
let updatedPerson = { ...person, job: 'Developer' };
console.log(updatedPerson);

let address = { city: 'New York', state: 'NY' };
let person1 = { name: 'John', age: 30 };
let fullPerson = { ...person1, ...address };
console.log(fullPerson);


let fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

let [firstFruit, secondFruit, ...remainingFruits] = fruits;

console.log(firstFruit);       
console.log(secondFruit);      
console.log(remainingFruits);  


