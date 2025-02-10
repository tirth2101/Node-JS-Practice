// Define an array of numbers
const num = [1,2,3,4,5,6,7,8];

// Iterate through the array using a for loop
for (let i = 0; i < num.length; i++) {
    console.log("Before condition:", num[i]); 

    // Skip the iteration if the number is exactly 3
    if (num[i] === 3) {
        continue;
    }

    // Break the loop if the number is greater than 5
    if (num[i] > 5) {
        break;
    }

    console.log("After condition:", num[i]); 
}
