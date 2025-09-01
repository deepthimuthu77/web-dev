var message = prompt("Enter your message: ")
var charactersLimit = 140;

if (message.length <= charactersLimit){
    console.log("The characters limit is satisfied. \nRemaining characters: " + (charactersLimit - message.length));
}
else{
    console.log("The characters limit is in overflow. Reduce the number of words before posting.")
}