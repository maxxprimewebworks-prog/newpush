//1, parseInt()
var intRes = parseInt('12345');
console.log(intRes);

//2, parseFloat()
var intRes = parseFloat('12345.56');
console.log(floatRes);


var intResBase2 = parseInt('12345', 2);
console.log(intResBase2);


var age = 23;
var res = age.toString();
console.log(res);
var heightn = 123.76;
console.log(heightn.toString());


var money =12_000_000_000.89;
var newMoney = money.toExponential(9);
console.log(newMoney);


var weight = 1234.98765;
var newWeight = weight.toPrecision(3);
console.log(newWeight);


var fixVal = weight.toFixed(3);
console.log(fixVal);

