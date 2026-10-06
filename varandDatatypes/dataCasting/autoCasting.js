let fn = '23';
let f = '15';
let res = fn + f;
console.log(res);  //2315
//Plus has 2 functions, to concat(like addition of strings) and to add nos.
let fn2 = 23;
let fn1 = '23';
let re = fn2 + fn1;
console.log(re);  //2315

let fn3 = 23;
let fn3 = 23;
let re3 = fn3 + fn3;
console.log(re3);

console.log('3' - 2);  //1

console.log('3' + 2);  //'32' + is also used for sting combination(concatenation)

console.log(3 + '2');  //32

alert('3' * '2'); //6 (* has only 1 function which is to times nos)
alert('10' / '2')//5  (same reason with *)
alert(1 + true)//2  (because true is converted to 1)
alert(1 + false);//1 (because false is converted to 0)
alert(1 + undefined);//NaN
alert(1 + null);//1 (because null is converted to 0)
alert('1' + null);//1null
alert(true + null);//1
alert(true + undefined);//NaN