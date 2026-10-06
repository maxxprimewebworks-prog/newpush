// function addNum (a,b) {
//    return a + b;
// }
// console.log(addNum(12,13));

// function fullname(fn,sn) {
//     return fn + '' + sn;
// }
// console.log(fullname('Men','Bryan'));

function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++)  {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}

let res2 = titleCase('me you');
console.log(res2);