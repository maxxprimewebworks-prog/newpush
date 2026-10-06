// The logical AND assignmaent operator (&&=) only updates the new value if the old value is truthy

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