let person = {
    id : '0001',
    perName : 'Peter',
    age : 23,
    dob : new Date(2000, 4, 12).toDataString()
}

///Converting js object to JSON string
localStorage.setItem('person' , JSON.stringify(person))

//Converting JSON String to JS object
let user = JSON.parse(localStorage.getItem('person'))
console.log(user.id, user.perName, user.age, user.dob);