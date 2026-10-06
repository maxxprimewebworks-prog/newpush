console.log(Boolean(0) + '<br>');//false
console.log(Boolean(null) + '<br>');//false
console.log(Boolean(false) + '<br>');//false
console.log(Boolean(undefined) + '<br>');//false
console.log(Boolean(NaN) + '<br>');//false
console.log(Boolean(1) + '<br>');//true
console.log(Boolean(true) + '<br>');//true


console.log(Boolean('') + '<br>');//false
console.log(Boolean('0') + '<br>');//true
console.log(Boolean('false') + '<br>');//true
console.log(Boolean('Hello World') + '<br>');//true
console.log(Boolean('  '));//true