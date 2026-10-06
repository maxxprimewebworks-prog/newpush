// A non-void function returns data to the aller

function withdrawmoney () {
    return 'Money safely withdrawn'
}

let data = withdrawmoney()
console.log(data.toUpperCase())
console.log(data[10].toUpperCase())

function getData()  {
    return {
        id : 12,
        name : 'John',
        age : 34
    }
}

let obj = getData()
console.log(obj.age);
console.log(obj.name);

function getData2()  {
    return new Array (12, 34, 45, 12, 33);
}
let arr = getData2()

console.log(arr);
console.log(arr.push(33, 64, 754, 75));
console.log(arr);