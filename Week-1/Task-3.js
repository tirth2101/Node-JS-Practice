// Outer loop iterates from 1 to 3
for (let i = 1; i <= 3; i++) {
    console.log(`Outer loop iteration: ${i}`);

    // Inner loop iterates from 1 to 5
    for (let j = 1; j <= 5; j++) {
        if (j === i) {
            break;
        }

        console.log(`  Inner loop iteration: i = ${i}, j = ${j}`);
    }
}
