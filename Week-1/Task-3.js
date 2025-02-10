// Outer loop iterates from 1 to 3
for (let i = 1; i <= 3; i++) {
    console.log(`Outer loop iteration: ${i}`);

    // Inner loop iterates from 1 to 5
    for (let j = 1; j <= 5; j++) {
        // Break the inner loop if j = count(outer loop's current iteration)
        if (j === i) {
            break;
        }

        // Print the values of both loop variables
        console.log(`  Inner loop iteration: i = ${i}, j = ${j}`);
    }
}
