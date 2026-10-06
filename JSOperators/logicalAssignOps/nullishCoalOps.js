///The nullish operator only assigns y to x if x is null or undefined

let person = {
    firstName: 'Jane',  ///falsy
    lastName: null, ///truthy
    age: 12,   ///truthy
    salary: undefined   ///truthy(only falsy when it's 0)
};

person.firstName ??= 'Mark'; ///Updated
person.age ??= 34; ///no update
person.gender ??= 'Male'; ///updated
person.salary &&= 12345.98 ///updated

console.log(person);