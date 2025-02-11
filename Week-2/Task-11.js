async function magicFunction() {
    console.log("Visca El Barca!");

    await new Promise(resolve => setTimeout(resolve, 2000)); // Wait for 2 seconds

    return "FC Barcelona for the Win!";
}

// Calling the function 
magicFunction().then(result => console.log(result));
