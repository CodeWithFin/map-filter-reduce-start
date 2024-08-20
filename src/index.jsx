var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
// const newNumbers = numbers.map(function (x){
//     return x * 2
// });
// console.log(newNumbers);
//Filter - Create a new array by keeping the items that return true.
// const newNumbers = numbers.filter(function(num){
//     return num >10
// })
// console.log(newNumbers);
//Reduce - Accumulate a value by doing something to each item in an array.
numbers.reduce(function(accumulator,currentNumber){
    return accumulator + currentNumber;
})
//Find - find the first item that matches from an array.

//FindIndex - find the index of the first item that matches.

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
