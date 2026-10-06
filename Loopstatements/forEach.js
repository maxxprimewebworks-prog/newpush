const users = [
    {
        id : '0001',
        userName : 'Paul',
        userAge : 23,
        userSalary : 2234.44
    },

    {
        id : '00441',
        userName : 'Saul',
        userAge : 3,
        userSalary : 2234.44
    },

    {
        id : '33001',
        userName : 'Laul',
        userAge : 3,
        userSalary : 224.44
    },

    {
        id : '021',
        userName : 'Pul',
        userAge : 2222,
        userSalary : 2234.4
    }

]

users.forEach (
    (user) => {
        user.id = '008';
        user.userName = 'Matt';
        user.email = 'aaaa@bb.com';
    }
)
console.log(users);