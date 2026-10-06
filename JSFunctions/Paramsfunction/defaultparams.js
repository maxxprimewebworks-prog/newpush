//Default parameter in function
function userApp(userName = 'John'){
    if (username === 'John'){
        return `Hello ${username}`
    }
    return 'Hello Guest'
}

let usermessage = userApp()
console.log(usermessage);

let usermessage2 = userApp('Peter')
console.log(usermessage2);