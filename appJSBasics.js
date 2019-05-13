// Log to console
// console.log('Hello World');
// console.log(123);
// console.log(true);
// //var greeting = 'Hello';
// //console.log(greeting);
// var arr = [1, 2, 3.4];
// console.log(arr);
// var obj = { a: 1, b: 2 };
// console.log(obj);
// console.table(obj);
// console.error('This is an error');
// console.clear();
// console.warn('This is a warning');
// console.time('Hello');
// console.log('Hello World');
// console.log('Hello World');
// console.log('Hello World');
// console.log('Hello World');
// console.log('Hello World');
// console.log('Hello World');
// console.timeEnd('Hello');

// var, let, const

// var name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// // init var
// var greeting;
// console.log(greeting);
// greeting = 'Hello';
// console.log(greeting);

// // letters, numbers, _, $
// // cannot start with number
// var _name = 'John';

// // multi word vars
// var firstName = 'John'; // camel case
// var first_name = 'Sara'; // underscore
// var FirstName = 'Tom'; // pascal case
// var firstname = 'blarg';

// let name;
// name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// const
// const name = 'John Doe';
// console.log(name);
// cannot reassign
//name = 'Sara';
// have to assign value
//const greeting;

// const person = {
//   name: 'John',
//   age: 30
// };

// person.name = 'Sara';
// person.age = 32;

//console.log(person);

// const numbers = [1, 2, 3, 4, 5];
// numbers.push(6);
// //numbers = [2, 3];
// console.log(numbers);

// PRIMITIVE

//string
// const name = 'John Doe';
// console.log(typeof name);
// // number
// const age = 45;
// console.log(typeof age);
// // bool
// const hasKids = true;
// console.log(typeof hasKids);
// //Null
// const car = null;
// console.log(typeof car); // funny bug returned as object
// //undefined
// let test;
// console.log(typeof test);
// //symbol
// const sym = Symbol();
// console.log(typeof sym);

// // REFERENCE TYPES

// //Array
// const hobbies = ['movies', 'nusic'];
// console.log(typeof hobbies);
// // object literal
// const address = {
//   city: 'Boston',
//   state: 'MA'
// };
// console.log(typeof address);
// //date
// const today = new Date();
// console.log(today);
// console.log(typeof today);

//conversion
//let val;

// number to string
// val = String(555);
// val = String(4 + 4);
// // bool to string
// val = String(true);
// // date to string
// val = String(new Date());
// // array to string
// val = String([1, 2, 3, 4]);

// //toString method
// val = (5).toString();
// val = true.toString();

// // string to number
// val = Number('5');
// val = Number(true);
// val = Number(false);
// val = Number(null);
// val = Number('hello'); // NaN
// val = Number([1, 2, 3]); // NaN

// val = parseInt('100.30');
// val = parseFloat('100.30');

// //output
// console.log(val);
// console.log(typeof val);
// //console.log(val.length);
// console.log(val.toFixed(2));

//coercion
// const val1 = String(5);
// const val2 = 6;

// const sum = Number(val1 + val2);

// console.log(sum);
// console.log(typeof sum);

// const num1 = 100;
// const num2 = 50;
// let val;

// // simple math with numbers
// val = num1 + num2;
// val = num1 % num2;

// // Math object
// val = Math.PI;
// val = Math.E;
// val = Math.round(2.4);
// val = Math.ceil(2.4);
// val = Math.floor(2.8);
// val = Math.sqrt(64);
// val = Math.abs(-3);
// val = Math.pow(8, 2); // 64
// val = Math.min(2, 33, 4, 1, 55, -6);
// val = Math.max(2, 33, 4, 1, 55, -6);
// val = Math.random();

// val = Math.floor(Math.random() * 20 + 1);

// console.log(val);

// // String concat etc
// const firstName = 'William';
// const lastName = 'Johnson';
// const str = 'Hello there my name is Brad';
// const age = 50;
// let val;

// // concatenation
// val = firstName + lastName;
// val = firstName + ' ' + lastName;

// // append
// val = 'Brad ';
// val += 'Traversy';

// val = 'He3llo, my name is ' + firstName + ' and I am ' + age;

// // Escaping (prettifier is changing \ to ")
// val = "That's awesome, I can't wait";

// // Length
// val = firstName.length;

// // concat
// val = firstName.concat(' ', lastName);

// // change case
// val = firstName.toUpperCase();
// val = firstName[2];

// // indexof
// val = firstName.indexOf('l');
// val = firstName.lastIndexOf('l');

// //charAt
// val = firstName.charAt(2);

// // get last char
// val = firstName.charAt(firstName.length - 1);

// // substring
// val = firstName.substring(0, 4);

// //slice
// val = firstName.slice(0, 4);
// val = firstName.slice(-3);

// //split
// val = str.split(' ');

// // replace
// val = str.replace('Brad', 'Jack');

// // includes
// val = str.includes('foo');

// console.log(val);
// console.table(val);

// Template strings

// const name = 'John';
// const age = 31;
// const job = 'Web Developer';
// const city = 'Miami';
// let html;

// // without  template strings (es5)

// html =
//   '<ul><li>Name: ' +
//   name +
//   '</li><li>Age: ' +
//   age +
//   '</li><li>Job: ' +
//   job +
//   '</li><li>City: ' +
//   city +
//   '</li></ul>';

// // with template strings (es6, aka template literals)

// function hello() {
//   return 'hello';
// }

// html = `
//     <ul>
//         <li>Name: ${name}</li>
//         <li>Age: ${age}</li>
//         <li>Job: ${job}</li>
//         <li>City: ${city}</li>
//         <li>${2 + 2}</li>
//         <li>${hello()}</li>
//         <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
//     </ul>
//   `;

// document.body.innerHTML = html;

// // Create some arrays
// const numbers = [43, 56, 33, 23, 44, 36, 5];
// const numbers2 = new Array(22, 45, 33, 76, 54);
// const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
// const mixed = [22, 'Hello', true, undefined, null, { a: 1, b: 1 }, new Date()];

// //console.log(mixed);

// let val;

// // get array length
// val = numbers.length;
// // check if array
// val = Array.isArray(numbers);
// // get single value
// val = numbers[3];
// val = numbers[0];
// // overwrite array
// numbers[2] = 100;
// // find index of value
// val = numbers.indexOf(36);

// // // Mutating arrays
// // // add to end
// // numbers.push(250);
// // // add to front
// // numbers.unshift(120);
// // // take off from end
// // numbers.pop();
// // // take off from front
// // numbers.shift();
// // // splice remove elements
// // numbers.splice(1, 3);
// // // reverse
// // numbers.reverse();

// // concatenate
// val = numbers.concat(numbers2);

// // sort
// val = fruit.sort();
// val = numbers.sort();

// // use the compare function
// val = numbers.sort(function(x, y) {
//   return x - y;
// });

// // reverse sort
// val = numbers.sort((x, y) => {
//   return y - x;
// });

// // find
// function under50(num) {
//   return num < 50;
// }
// val = numbers.find(under50);

// val = numbers.filter(x => x < 50);

// console.log(numbers);
// console.log(val);

// // Object literals

// const person = {
//   firstName: 'Steve',
//   lastName: 'Smith',
//   age: 36,
//   email: 'steve@aol.com',
//   hobbies: ['music', 'sports'],
//   address: {
//     city: 'Miami',
//     state: 'FL'
//   },
//   getBirthYear: function() {
//     return 2017 - this.age;
//   }
// };
// let val;

// val = person;
// // Get specific value
// val = person.firstName;
// val = person['lastName'];
// val = person.age;
// val = person.hobbies[1];
// val = person.address.state;
// val = person.address['city'];
// val = person.getBirthYear();

// console.log(val);

// const people = [{ name: 'John', age: 30 }, { name: 'Mike', age: 23 }, { name: 'Nancy', age: 40 }];

// for (let i = 0; i < people.length; i++) {
//   console.log(people[i].name);
// }

// // Dates and Times

// let val;
// const today = new Date();
// let birthday = new Date('9-10-1981 11:25:00');
// birthday = new Date('September 10 1981');
// birthday = new Date('9/10/1981');

// val = today.getMonth(); // zero based
// val = today.getDate(); // not zero based
// val = today.getDay(); // day of week
// val = today.getFullYear();
// val = today.getHours();
// val = today.getMinutes();
// val = today.getSeconds();
// val = today.getMilliseconds();
// val = today.getTime(); // timestamp -- seconds passed since jan 1 1970 unix thing

// birthday.setMonth(2);
// birthday.setDate(12);
// birthday.setFullYear(1985);
// birthday.setHours(3);
// birthday.setMinutes(30);
// birthday.setSeconds(25);
// console.log(birthday);

// console.log(val);
// console.log(typeof val);

// Conditionals

//const id = 100;

// if (id == 100) {
//   console.log('correct');
// } else {
//   console.log('incorrect');
// }

// if (id != 101) {
//   console.log('correct');
// } else {
//   console.log('incorrect');
// }

// // val and type (preferred)

// if (id === 100) {
//   console.log('correct');
// } else {
//   console.log('incorrect');
// }

// if (id !== 100) {
//   console.log('correct');
// } else {
//   console.log('incorrect');
// }

//test for existence

// if (typeof id !== 'undefined') {
//   console.log(`The ID is ${id}`);
// } else {
//   console.log('No ID');
// }

// greater less than

// if (id > 100) {
//   console.log('correct');
// } else {
//   console.log('incorrect');
// }

// // if else

// const color = 'yellow';

// // if (color === 'red') {
// //   console.log('color is red');
// // } else if (color === 'blue') {
// //   console.log('color is blue');
// // } else {
// //   console.log('color is unknown');
// // }

// // logical operators
// const name = 'Steve';
// const age = 16;

// // AND
// if (age > 0 && age < 13) {
//   console.log(`${name} is a child`);
// } else if (age >= 13 && age < 20) {
//   console.log(`${name} is a teenager`);
// } else {
//   console.log(`${name} is an adult`);
// }

// // OR
// if (age < 16 || age > 65) {
//   console.log(`${name} cannot run in race`);
// } else {
//   console.log(`${name} is registered`);
// }

// // ternary operator
// console.log(id === 100 ? 'correct' : 'incorrect');

// // without braces
// if (id === 100) console.log('correct');
// else console.log('incorrect');

// switch statements

// const color = 'blue';

// switch (color) {
//   case 'red':
//     console.log('color is red');
//     break;
//   case 'blue':
//     console.log('color is blue');
//     break;
//   default:
//     console.log('unknown color');
//     break;
// }

// let day;

// switch (new Date().getDay()) {
//   case 0:
//     day = 'Sunday';
//     break;
//   case 1:
//     day = 'Monday';
//     break;
//   case 2:
//     day = 'Tuesday';
//     break;
//   case 3:
//     day = 'Wednesday';
//     break;
//   case 4:
//     day = 'Thursday';
//     break;
//   case 5:
//     day = 'Friday';
//     break;
//   case 6:
//     day = 'Saturday';
//     break;
// }

// console.log(`Today is ${day}`);

// function declarations

// function greet(firstName = 'John', lastName = 'Doe') {
//   //   if (typeof firstName === 'undefined') {
//   //     firstName = 'John';
//   //   }
//   //   if (typeof lastName === 'undefined') {
//   //     lastName = 'Doe';
//   //   }
//   //console.log('Hello');
//   return 'Hello ' + firstName + ' ' + lastName;
// }

// //console.log(greet());

// // function expressions (useful for hoisting, closures)

// const square = function(x = 3) {
//   return x * x;
// };

//console.log(square());

// Immediately Invokable function expressions - IIFEs

// (function() {
//   console.log('IIFE Ran...');
// })();

// (function(name) {
//   console.log('Hello ' + name);
// })('Brad');

// Property Methods

// const todo = {
//   add: function() {
//     console.log('Add todo..');
//   },
//   edit: function(id) {
//     console.log(`Edit todo ${id}`);
//   }
// };

// todo.delete = function() {
//   console.log('Delete todo..');
// };

// todo.add();
// todo.edit(22);
// todo.delete();

// LOOPS

// for (let i = 0; i < 10; i++) {
//   if (i === 2) {
//     console.log('2 is my favorite number');
//     continue;
//   }

//   if (i === 5) {
//     break;
//   }
//   console.log('Number ' + i);
// }

// while loop

// let i = 0;

// while (i < 10) {
//   console.log('Number ' + i);
//   i++;
// }

// // do while loop

// let i = 0;

// do {
//   console.log('Number ' + i);
//   i++;
// } while (i < 10);

//const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
// }

// array forEach
// cars.forEach((car, index, array) => {
//   console.log(`${index} : ${car}`);
//   console.log(array);
// });

// array map
// const users = [
//   { id: 1, name: 'John' },
//   { id: 2, name: 'Sara' },
//   { id: 3, name: 'Karen' },
//   { id: 4, name: 'Steve' }
// ];

// const ids = users.map(user => user.id);

// console.log(ids);

// const user = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 40
// };

// for (let x in user) {
//   console.log(`${x} : ${user[x]}`);
// }

// WINDOW METHODS / OBJECTS / PROPERTIES

//window.console.log(123);

// Alert
//window.alert('Hello World');

// Prompt
//const input = window.prompt();
//alert(input);

// Confirm
// if (window.confirm('Are you sure')) {
//   console.log('YES');
// } else {
//   console.log('NO');
// }

// let val;

// // outer height and width
// val = window.outerHeight;
// val = window.outerWidth;
// // inner height and width
// val = window.innerHeight;
// val = window.innerWidth;

// // scroll points
// val = window.scrollY;
// val = window.scrollX;

// // Location Object
// val = window.location;
// val = window.location.hostname;
// val = window.location.port;
// val = window.location.href;
// val = window.location.search; // ?id=1 for example

// // redirect
// //window.location.href = 'http://google.com';
// // reload
// //window.location.reload();

// // History Object
// //window.history.go(-3);
// //val = window.history.length;

// // Navigator Object (actually named after netscape navigator)
// val = window.navigator;
// val = window.navigator.appName;
// val = window.navigator.appVersion;
// val = window.navigator.userAgent;
// val = window.navigator.platform;
// val = window.navigator.vendor;
// val = window.navigator.language;

// console.log(val);

// Scoping of variables
// Global Scope

// var a = 1;
// let b = 2;
// const c = 3;

// function test() {
//   var a = 4;
//   let b = 5;
//   const c = 6;

//   console.log('Function Scope: ', a, b, c);
// }

// test();

// if (true) {
//   // Block Scope
//   var a = 4; // this overrides var a = 1 at global scope
//   let b = 5;
//   const c = 6;
//   console.log('If Scope:', a, b, c);
// }

// for (var a = 0; a < 10; a++) {
//   console.log(`Loop: ${a}`); // this messes up global a
// }

// console.log('Global Scope: ', a, b, c);
