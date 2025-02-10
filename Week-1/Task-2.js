// Define an array of strings
const array = ["Lionel", "Messi", "LionelMessi", "Suarez", "Neymar"];

let i = 0;

// Start the while loop to iterate through the array
while (i < array.length) {
    // Break the loop if the current word's length exceeds 8 characters
    if (array[i].length > 8) {
        break;
    }

    // Use forEach 
    [array[i]].forEach(array => {
        console.log(array + "!");
    });

    // Increment the index to move to the next word
    i++;
}
