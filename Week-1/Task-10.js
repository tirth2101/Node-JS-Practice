// array creation
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

console.log("Initial array:", days);

// use push to add a new day at the end
days.push("Saturday");
console.log("After push:", days); 

// use pop to remove last element
days.pop();
console.log("After pop:", days); 

// use unshift to add a new day at beginnning
days.unshift("Sunday");
console.log("After unshift:", days); 

// use shift to remove first element
days.shift();
console.log("After shift:", days); 

// Find the index of "Wednesday" using indexOf
let index = days.indexOf("Wednesday");
console.log("Index of Wednesday:", index); 
