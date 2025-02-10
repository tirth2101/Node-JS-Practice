// array of strings
const words = ["Lionel", "Messi", "Lionel Messi", "Suarez", "Neymar"];

// Initialize an index for the while loop
let i = 0;


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
