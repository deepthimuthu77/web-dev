let x = 10;

if(x == '10'){ // only matches the data
    console.log('x is 10');
}

if(x === 10){ // matches the datatupe as well
    console.log('x is 10');
}
else if(x > 10){
    console.log('x is greater than 10');
}
else{
    console.log('x is NOT 10')
}

// Ternary operator
const y = 10;
const color = x > 10 ? 'red' : 'blue';
console.log(color);

switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is Not red or blue!!');
        break;
}