// Non default parameterised function

function addNums(firNum, secNum)  {
    if ((typeof firNum === 'number') && (typeof secNum === 'number'))  {
        return firNum + secNum;
    }

    else{
        return NaN
    }
}

console.log(addNums(45, 45));
console.log(addNums(6, 3));
console.log(addNums('VSDV', 45));
console.log(addNums('ASCAS', 5));

let user = 'admin';
let password = 'a23';
let message = '';
function signIn(userName, userPassword) {
    if (user === userName && password === userPassword)   {
        return message = `Welcome ${user} To Admin Page`;
    }
    else {
        return message = '404!!! Page Not Found!!';
    }
}

let res = signIn('ssadd', 'as23');
console.log(res);
let res2 = signIn('admin', 'as23');
console.log(res2);


//Area of a circle

function areaofcircle(radius) {
    const PI =Math.PI;
    let areacircle = Math.sqrt(radius) * PI;
    return Math.round(areacircle);
}

let result = areaofcircle(7.8);
console.log(result);