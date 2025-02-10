// Array creation
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
console.log("array:", days);

// push to add new Day
days.push("Saturday");
console.log("After push:", days); 

// pop to remove last element
days.pop();
console.log("After pop:", days); 

// Use unshift to add a new day before first element
days.unshift("Sunday");
console.log("After unshift:", days); 

// Use shift to remove first element
days.shift();
console.log("After shift:", days); 

// Find the index of "Wednesday" using indexOf
let index = days.indexOf("Wednesday");
console.log("Index of Wednesday:", index); 
