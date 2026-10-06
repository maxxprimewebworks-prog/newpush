// This has both truthy and false part

if(false) {
    console.log('Helo!!!');
    console.log(2 ** 10);
}  
else{
    console.log('This is else typeelse');
    console.log(34 * 5);
}

var userName = 'John';
var userAge = 34;

if(userName === 'John' && userAge >= 18)  {
    console.log(`Welcome ${userName}, you can votee`);
}
else{
    console.log('Please, check your name or age');
}