function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function Loop() {
    for (let i = 1; i <= 4; i++) {
        console.log(i);
        await sleep(1000); 
    }
}
Loop();
