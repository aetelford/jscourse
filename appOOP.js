// ****************************************************
// ES 5 Object constructors
// ****************************************************
// // Person constructor
// function Person(name, dob) {
//   this.name = name;
//   //this.age = age;
//   this.birthday = new Date(dob);
//   this.calculateAge = function() {
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
//   };
// }

// // const brad = new Person('Brad', 36);
// // const john = new Person('John', 30);

// // console.log(john.age);

// const brad = new Person('Brad', '8-3-1968');
// console.log(brad.calculateAge());

// ****************************************************
// Built in Constructors
// ****************************************************
// // String
// const name1 = 'Jeff';
// const name2 = new String('Jeff');

// name2.foo = 'bar';

// console.log(name1, name2);

// console.log(typeof name2); // returns object, === vs primitive string will return false, == will work

// // Number
// const num1 = 5;
// const num2 = new Number(5);

// console.log(typeof num2);

// // Boolean
// const bool1 = true;
// const bool2 = new Boolean(true);

// console.log(typeof bool2);

// // Functions
// const getSum1 = function(x, y) {
//   return x + y;
// };

// const getSum2 = new Function('x', 'y', 'return x + y');

// console.log(getSum2(1, 1));

// // Objects
// const john1 = {
//   name: 'John'
// };

// const john2 = new Object({ name: 'John' }); // equivalent?

// console.log(john2);

// // Arrays
// const arr1 = [1, 2, 3, 4];
// const arr2 = new Array(1, 2, 3, 4); // equivalent

// // Regular Expressions
// const re1 = /\w+/;
// const re2 = new RegExp('\\w+'); // equivalent

// console.log(re2);

// ****************************************************
// Prototypes
// ****************************************************
// // Object.prototype
// // Person.prototype inherits from that

// // Person constructor
// function Person(firstName, lastName, dob) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.birthday = new Date(dob);
//   //   this.calculateAge = function() {
//   //     const diff = Date.now() - this.birthday.getTime();
//   //     const ageDate = new Date(diff);
//   //     return Math.abs(ageDate.getUTCFullYear() - 1970);
//   //   };
// }

// // Calculate age
// Person.prototype.calculateAge = function() {
//   const diff = Date.now() - this.birthday.getTime();
//   const ageDate = new Date(diff);
//   return Math.abs(ageDate.getUTCFullYear() - 1970);
// };

// // Get full name
// Person.prototype.getFullName = function() {
//   return `${this.firstName} ${this.lastName}`;
// };

// // Gets married
// Person.prototype.getsMarried = function(newLastName) {
//   this.lastName = newLastName;
// };

// const john = new Person('John', 'Doe', '8-12-1990');
// const mary = new Person('Mary', 'Johnson', 'March 20 1978');

// console.log(mary);
// console.log(john.calculateAge());
// console.log(mary.getFullName());
// mary.getsMarried('Smith');
// console.log(mary.getFullName());

// console.log(mary.hasOwnProperty('firstName'));
// console.log(mary.hasOwnProperty('getFullName'));

// ****************************************************
// Prototypal Inheritance
// ****************************************************
// // Person constructor
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// // Greeting method
// Person.prototype.greeting = function() {
//   return `Hello there ${this.firstName} ${this.lastName}`;
// };

// const person1 = new Person('John', 'Doe');
// console.log(person1.greeting());

// // Customer constructor
// function Customer(firstName, lastName, phone, membership) {
//   Person.call(this, firstName, lastName);
//   this.phone = phone;
//   this.membership = membership;
// }

// // Inherit the Person prototype methods
// Customer.prototype = Object.create(Person.prototype); // sets proto to Person
// // Make customer.prototype return customer
// Customer.prototype.constructor = Customer;
// // Override greeting for customer
// Customer.prototype.greeting = function() {
//   return `Hello there ${this.firstName} ${this.lastName}, welcome to our company`;
// };

// // create customer
// const customer1 = new Customer('Tom', 'Hardy', '555-5555', 'Standard');
// console.log(customer1);
// console.log(customer1.greeting());

// ****************************************************
// Using Object.create to create objects
// ****************************************************

// const personPrototypes = {
//   greeting: function() {
//     return `Hello there ${this.firstName} ${this.lastName}`;
//   },
//   getsMarried: function(newLastName) {
//     this.lastName = newLastName;
//   }
// };

// const mary = Object.create(personPrototypes);
// mary.firstName = 'Mary';
// mary.lastName = 'Williams';
// mary.age = 30;

// console.log(mary);
// mary.getsMarried('Thompson');
// console.log(mary.greeting());

// // Alternative way to use object.create
// const brad = Object.create(personPrototypes, {
//   firstName: { value: 'Brad' },
//   lastName: { value: 'Traversy' },
//   age: { value: 36 }
// });

// console.log(brad);
// console.log(brad.greeting());

// ****************************************************
// ES 6 classes
// ****************************************************
// class Person {
//   constructor(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthday = new Date(dob);
//   }
//   greeting() {
//     return `Hello there ${this.firstName} ${this.lastName}`;
//   }
//   calculateAge() {
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
//   }
//   getsMarried(newLastName) {
//     this.lastName = newLastName;
//   }
//   // Static methods
//   static addNumbers(x, y) {
//     return x + y;
//   }
// }

// const mary = new Person('Mary', 'Williams', '11-13-1980');

// mary.getsMarried('Tucker');
// console.log(mary);
// console.log(mary.greeting());
// console.log(mary.calculateAge());
// console.log(Person.addNumbers(1, 1));

// ****************************************************
// ES 6 subclasses (inheritance, extending classes)
// ****************************************************

// // can use private fields with #
// class Person {
//   #firstName = '';
//   #lastName = '';
//   constructor(firstName, lastName) {
//     this.#firstName = firstName;
//     this.#lastName = lastName;
//   }
//   greeting() {
//     return `Hello there ${this.#firstName} ${this.#lastName}`;
//   }
// }

// class Customer extends Person {
//   constructor(firstName, lastName, phone, membership) {
//     super(firstName, lastName); // call parent class constructor
//     this.phone = phone;
//     this.membership = membership;
//   }
//   static getMembershipCost() {
//     return 500;
//   }
// }

// const john = new Customer('John', 'Doe', '555-5555', 'Standard');
// console.log(john);
// console.log(john.greeting());
// console.log(Customer.getMembershipCost());
// console.log(john.firstName);
