/// A variable is a placeholder in RAM to hold a value.

/// var keyword ==== Function scope
var userName = 'Paul'  ///old approach
function info(){
    userName = 'Ann'
    console.log(userName);
}
info()
console.log(userName);

/// let keyword ==== Block scope
function info(){
    let myName = 'Kola';
    myName = 'Ann';
    console.log(myName);
}
info()
console.log(myName);
/// const keyword ==== Block scope
const user = 'Peter'
function info(){
    const MYNAME = 'Ann'
    console.log(MYNAME); 
}
/// 1. DON'T use keywords
let _const = 30;
let _class = 'My class';
const _while ='Some data';

/// 2. DON'T use special characters in your variable.
//let +myName = ''

/// 3. Variables can't start with numbers.
//const 123indomie = 'Big-boy'

/// 4. Your variable must describe the usage.
let empNames = 'Peter Doe';
const EmployeeID = '3333';
let StudentAge = 34;
/// Data type means value type.