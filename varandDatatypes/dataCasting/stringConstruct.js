let res1 = String(10.5);
let strRes = typeof res1; //Checking Data type
console.log(strRes);
console.log(res1);//'10.5'


let res2 = String(123);///'123'
let strRes1 = typeof res2;
console.log(strRes1, res2);


console.log(String(100+ 23));  //The answer turns to string('123')
console.log(String(true));  //'true'
console.log(String(false)); //'false'


console.log(String(123e-1));//'false'
console.log(String(0xff));//'255'
console.log(String(undefined));//'undefined'


console.log(String(null)); //'null' 