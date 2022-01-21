function writeCards(arr, event) {
    const messageArray = [];

    for (let i = 0; i < arr.length; i++) {
        const message = `Thank you, ${arr[i]}, for the wonderful ${event} gift!`;
        messageArray.push(message);
    };
    // console.log(messageArray);
    return messageArray;
}
writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");


function countDown(count) {
    while (count > -1) {
        console.log(count);
        count--;
    }
}
countDown(10);
