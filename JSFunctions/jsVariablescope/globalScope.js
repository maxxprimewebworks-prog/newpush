// var is the old way of declaring variables, i.e before ES6/2015
//to hoist means using a variable before it is made, which would give 'undefined' as a result

function hellApp() {
    //console.log(userName);  undefined(hoisting)
    var userName = 'Dami';
    console.log(userName);
    if (true)  {
        var userName = 'Temi';
        console.log(userName); // Temi
    }
    console.log(userName);
}
console.log('My name is' + userName);
hellApp();
console.log('His name is' + userName);