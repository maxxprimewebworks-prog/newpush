let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = 'Sunday';
        break;

    case 2:
        dayName = 'Monday';
        break;

    case 3:
        dayName = 'Tuesday';
        break;

    case 4:
        dayName = 'Wednesday';
        break;

    case 6:
        dayName = 'Friday';
        break;

    case 7:
        dayName = 'Saturday';
        break;

    case 5:
        dayName = 'Thursday';
        break;

    default:
        dayName = 'Unknown Day of the week';
        break;
}
console.log(`Today is $(dayName)`);



let message;
let char = 'F'
switch (char) {
    case 'a':
    case 'A':
    case 'E':
    case 'e':
    case 'I':
    case 'i':
    case 'O':
    case 'o':
    case 'u':
    case 'U':

        message = 'it is a vowel letter';
        break;
    default:
        message = 'it is not a vowel letter';
        break;
}
console.log(message);