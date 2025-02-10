// Define an array of strings
const words = ["hello", "world", "LionelMessi", "Suarez", "Neymar"];

let i = 0;

// Start the while loop to iterate through the array
while (i < words.length) {
    // Break the loop if the current word's length exceeds 8 characters
    if (words[i].length > 8) {
        break;
    }

    // Use forEach 
    [words[i]].forEach(word => {
        console.log(word + "!");
    });

    // Increment the index to move to the next word
    i++;
}
