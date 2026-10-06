// let was introduced in ES6/2015.  It's block-scoped(only exists inside {} where declared). 
//It's non hoisted. It can be updated but not re-declared in the same scope.


function hellApp()  {
    console.log(userName);  
    let userName = 'Dami';

    if (true)  {
        let userName = 'Temi';
        console.log(userName);
    }

}
console.log(userName);
console.log('Outside Block' + userName);   // ReferenceError (not hoisted)
hellApp();