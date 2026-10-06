/// Syntax:  function <Name of function>  (parameter)  {
 // js code}



 // function hoisting and calling

saveMoney();
saveMoney();

//function signature
function saveMoney (){
    console.log('Money saved');
}

//function calling
let data = saveMoney();
console.log(data);  //undefined

saveMoney();  //Money saved 
//function listening or referencing
saveMoney;