//The filter() method creates a new array containing only the elements that satisfy a condition.

let numbers = [1, 2, 3, 4, 5, 6];
let even = numbers.filter(num => num % 2 === 0);
console.log(even);

let marks = [65, 90, 45, 85, 78];
let result = marks.filter(mark => mark > 80);
console.log(result);

//The map() method creates a new array by transforming each element.
let numbers = [1, 2, 3, 4];
let square = numbers.map(num => num * num);
console.log(square);

let names = ["john", "alice", "bob"];
let upper = names.map(name => name.toUpperCase());
console.log(upper);

//The reduce() method reduces all array elements to a single value.
array.reduce((accumulator, currentValue) => {
    return updatedAccumulator;
}, initialValue);

let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);

let numbers = [10, 25, 8, 40, 15];
let max = numbers.reduce((acc, num) => {
    return num > acc ? num : acc;
}, numbers[0]);
console.log(max);

let arr = [1, 2, 3, 4, 5];

// Filter
console.log(arr.filter(x => x > 2));
// [3, 4, 5]

// Map
console.log(arr.map(x => x * 2));
// [2, 4, 6, 8, 10]

// Reduce
console.log(arr.reduce((sum, x) => sum + x, 0));
// 15