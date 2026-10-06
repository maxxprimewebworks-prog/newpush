let title; ///falsy because it doesn't have a value
title ||= 'God Of War';
console.log(title);  ///God Of War

let myAge = 12;
myAge ||= 25;
console.log(myAge); ///12



let person = {
    firstName: '',  ///falsy
    lastName: 'Doe', ///truthy
    age: 12,   ///truthy
    salary: -0.11   ///truthy(only falsy when it's 0)
};

person.firstName &&= 'Mark'; ///no update
person.lastName &&= 'Smith'; ///updated
person.age &&= 23; ///updated
person.salary &&= 12345.98 ///updated

console.log(person);

person.email ||= 'abc@gmail.com';
console.log(person);