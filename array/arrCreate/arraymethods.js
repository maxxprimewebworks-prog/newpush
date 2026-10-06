//Adding elements from an array
let emojis = new Array();
// Adding items to an array
let itemNums = emojis.push('😒', '😒', '😒', '😒', '😒', '😒', '😒', '😒');
console.log(itemNums);  //8
let newVals = emojis.unshift('😘', '😘');
console.log(newVals); //20
console.log(emojis);


//Removing elements from an array
let popItem = emojis.pop();  // removes at the end
console.log(popItem);

let shiftItem = emojis.shift();  //removes at the beginning
console.log(shiftItem);
console.log(emojis);

let newEmojis = emojis.concat(['😘', '😘']);
console.log(newEmojis);


let entryRes = emojis.entries();
console.log(entryRes);
console.log(entryRes.next().value);
console.log(entryRes.next().value);
console.log(entryRes.next().value);
console.log(entryRes.next().value);
console.log(entryRes.next().done);
console.log(entryRes.next().value);
console.log(entryRes.next().value);
console.log(entryRes.next().value);
console.log(entryRes.next().value);
console.log(entryRes.next().done);


let slicedItems = emojis.slice(2, 5);
console.log(slicedItems); // ['😘', '😘', '😒']
let spliteItems = emojis.splice(2, 5, '😍', '👍', '🙌');
console.log(spliteItems);



const ages = [3, 10, 18, 20];
ages.some(checkAdult);
function checkAdult(age) {
    return age > 18;
}


const vals = [32, 12, 16, 40];
const result = vals.filter(checkAdult);
console.log(result);  //[32, 40]


function checkAdult(age) {
    return age >= 18;
}


const vals2 = [32, 92, 26, 34];
const result2 = vals2.find(checkAdult);
console.log(result2); //32
function checkAdult(age) {
    return age >= 18;
}



const fruits = ['apple', 'banana', 'mango', 'orange'];
newFruits = fruits.fill('Kiwi');

const fruits2 = ['apple', 'banana', 'mango', 'orange'];
fruits2.fill('Kiwi', 1, 3);

fruits2.includes('banana');  //true
fruits2.includes('kiwi'); // false

fruits2.join(',');  // 'banana'
fruits2.keys();  // Array Iteration {}
fruits2.lastIndexOf('Kiwi');  //





