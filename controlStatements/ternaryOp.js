let fname = 'Paul';
fname === 'Paul' ? console.log('I am paul') : console.log('Name is not Paul');


let age = 12;
let nat = 'Nigerian';
let message = '';

age >= 18
? (message = 'You can vote')
: nat === 'Nigerian'
? (message = 'Too young')
: (message = 'Not Nigerian');

console.log(message);

let speed = 10;
let mess = speed >= 120 ? 'Too fast' : speed >= 80 ? 'Fast' : 'OK';

console.log(mess);