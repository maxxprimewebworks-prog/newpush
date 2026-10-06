let emojis = new Array();
emojis.push('😂',  '😒',  '❤️', '❤️', '❤️', '❤️', '❤️', '❤️');

// Counting no of items in an array
let itemsNumber = emojis.length;
// Setting the length of an array
emojis.length = 20;
console.log(emojis);
console.log(itemsNumber);


// Getting an item from an array
console.log(emojis[1]);
console.log(emojis[22]);  //undefined
console.log(emojis[7]);
console.log(emojis[4]);

// Setting an item
emojis[7] = 'Hello';
emojis[8] = 'World';
emojis[9] = 'Hi';
console.log(emojis);
