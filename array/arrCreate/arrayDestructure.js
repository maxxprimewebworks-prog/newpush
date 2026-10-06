let emojis = new Array();
emojis.push('😂',  '😒',  '❤️', '❤️', '❤️', '❤️', '❤️', '❤️');
console.log(emojis);


// Array Destructuring
let [emoji1, emoji2, ...others] = emojis
console.log(emoji1);
console.log(emoji2);
console.log(others);
