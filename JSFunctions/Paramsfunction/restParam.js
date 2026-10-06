// The rest parameter allows us to represent an indefinite no of arguments as an array.

function userData(...Data){
    return data;
}
let myData = userData('Kola' , 23 , 'Male');
console.log(myData);

let myData1 = userData('Kola' , 23 , 'Male' , 2344.55);
console.log(myData1);

let myData2 = userData('Kola' , 23 , 'Male' , 37363 , 'Director');
console.log(myData2);

//Destructuring an array
//Destructuring is a js expression that makes it possible to unpack values from arrays,
// or properties from objects into distinct variables.

let[userName , age , gender , ...rest] = myData
console.log(userName);
console.log(age);
console.log(gender);
console.log(rest);

let[userName1 , age1 , gender1 , ...rest1] = myData1
console.log(userName1);
console.log(age1);
console.log(gender1);
console.log(rest1);

let[userName2 , age2 , gender2 , ...rest2] = myData2
console.log(userName2);
console.log(age2);
console.log(gender2);
console.log(rest2);