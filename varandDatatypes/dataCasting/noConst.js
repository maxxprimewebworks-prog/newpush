console.log(Number('10.5')); //10.5
console.log(Number(true));//1
console.log(Number(false));//0
console.log(Number(null));//0
console.log(Number(undefined));//returns NaN
console.log(Number('123'));//123


console.log(typeof Number('10.5'));
console.log(Number(''));//0
console.log(Number(' '));//0
console.log(Number('123e-1'));//12.3
console.log(Number('0xFF'));//255(hexadecimal rep.)


console.log(Number('undefined'));//NaN
console.log(Number('null'));//NaN
console.log(Number('Hello World'));//NaN