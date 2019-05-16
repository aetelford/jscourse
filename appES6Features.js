//***********************************************
// try/catch
//***********************************************
// const user = { email: 'jdoe@email.com' };

// try {
//   // produce a reference error
//   //myFunction();
//   // produce a type error
//   //null.myFunction();
//   // produce syntax error
//   //eval('Hello World');
//   //produce URI error
//   //decodeURIComponent('%');

//   if (!user.name) {
//     throw new SyntaxError('User has no name');
//   }
// } catch (e) {
//   console.log(e);
//   console.log(e.message);
//   console.log(e.name);
//   console.log(e instanceof ReferenceError);
// } finally {
//   console.log('Finally runs regardless...');
// }

// console.log('Program continues');

//***********************************************
// Iterators and Generators (ES 6)
//***********************************************
// // Iterator Example
// function nameIterator(names) {
//   let nextIndex = 0;

//   return {
//     next: function() {
//       return nextIndex < names.length ? { value: names[nextIndex++], done: false } : { done: true };
//     }
//   };
// }

// // create an array of names
// const namesArr = ['Jack', 'Jill', 'John'];

// // init iterator and pass in names array
// const names = nameIterator(namesArr);

// console.log(names.next()); // get Jack
// console.log(names.next()); // get Jill
// console.log(names.next()); // get Jill
// console.log(names.next()); // undefined, done = true

// // Generator Example (same behaviour as iterator above, retains state between next calls)
// function* sayNames() {
//   yield 'Jack';
//   yield 'Jill';
//   yield 'John';
// }

// const name = sayNames();

// console.log(name.next());
// console.log(name.next());
// console.log(name.next());
// console.log(name.next());

// // Generator Example, ID creator
// function* createIds() {
//   let index = 0;

//   while (true) {
//     yield index++;
//   }
// }

// const gen = createIds();
// const gen2 = createIds();

// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen2.next().value);

// HTML
// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <meta http-equiv="X-UA-Compatible" content="ie=edge" />
//     <link
//       rel="stylesheet"
//       href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.css"
//     />
//     <title>Javascript Sandbox</title>
//   </head>
//   <body>
//     <script src="app.js"></script>
//   </body>
// </html>

//***********************************************
// Profile Scroller - Iterator Mini Project
//***********************************************
// const data = [
//   {
//     name: 'John Doe',
//     age: 32,
//     gender: 'male',
//     lookingFor: 'female',
//     location: 'Boston MA',
//     image: 'https://randomuser.me/api/portraits/men/82.jpg'
//   },
//   {
//     name: 'Jen Smith',
//     age: 26,
//     gender: 'female',
//     lookingFor: 'female',
//     location: 'Miami FL',
//     image: 'https://randomuser.me/api/portraits/women/82.jpg'
//   },
//   {
//     name: 'William Johnson',
//     age: 38,
//     gender: 'male',
//     lookingFor: 'male',
//     location: 'Lynn MA',
//     image: 'https://randomuser.me/api/portraits/men/83.jpg'
//   }
// ];

// const profiles = profileIterator(data);

// // Call first profile automatically
// nextProfile();

// // Next Event
// document.getElementById('next').addEventListener('click', nextProfile);

// // Next profile display fn
// function nextProfile() {
//   const currentProfile = profiles.next().value;

//   if (currentProfile !== undefined) {
//     document.getElementById('profileDisplay').innerHTML = `
//     <ul class="list-group">
//         <li class="list-group-item">Name: ${currentProfile.name}</li>
//         <li class="list-group-item">Age: ${currentProfile.age}</li>
//         <li class="list-group-item">Location: ${currentProfile.location}</li>
//         <li class="list-group-item">Preference:
//         ${currentProfile.gender}
//         looking for ${currentProfile.lookingFor}</li>
//     </ul>
//     `;
//     document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
//   } else {
//     // No more profiles
//     window.location.reload();
//   }
// }

// // Profile iterator
// function profileIterator(profiles) {
//   let nextIndex = 0;

//   return {
//     next: function() {
//       return nextIndex < profiles.length
//         ? {
//             value: profiles[nextIndex++],
//             done: false
//           }
//         : { done: true };
//     }
//   };
// }

// HTML
// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <!-- Required meta tags -->
//     <meta charset="utf-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

//     <!-- Bootstrap CSS -->
//     <link
//       rel="stylesheet"
//       href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
//       integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
//       crossorigin="anonymous"
//     />

//     <title>Profile scroller</title>
//   </head>
//   <body>
//     <div class="container">
//       <div class="row">
//         <div class="col-md-6 mx-auto text-center">
//           <h1 class="mb-3">Profile Scroller</h1>
//           <div id="imageDisplay"></div>
//           <br />
//           <div id="profileDisplay"></div>
//           <br />
//           <button id="next" class="btn btn-dark btn-block">Next</button>
//         </div>
//       </div>
//     </div>

//     <!-- Optional JavaScript -->
//     <!-- jQuery first, then Popper.js, then Bootstrap JS -->
//     <script
//       src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
//       integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
//       crossorigin="anonymous"
//     ></script>
//     <script
//       src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
//       integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
//       crossorigin="anonymous"
//     ></script>
//     <script
//       src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
//       integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
//       crossorigin="anonymous"
//     ></script>
//     <script src="app.js"></script>
//   </body>
// </html>

//***********************************************
// Symbols -- symbols are unique!
//***********************************************
// // const sym1 = Symbol();
// // const sym2 = Symbol('sym2woo');

// // console.log(sym2);
// // console.log(typeof sym2);

// // console.log(Symbol() === Symbol()); // will be false bro

// // Useful as unique object keys
// const KEY1 = Symbol();
// const KEY2 = Symbol('sym2');

// const myObj = {};

// myObj[KEY1] = 'Prop1';
// myObj[KEY2] = 'Prop2';
// myObj.key3 = 'Prop3';
// myObj.key4 = 'Prop4';
// //console.log(myObj[KEY1]);

// // Symbols are not enumerable in for...in
// for (let i in myObj) {
//   console.log(`${i}: ${myObj[i]}`); // only shows prop3, prop4
// }

// // Symbols are ignored by JSON.stringify
// console.log(JSON.stringify(myObj));

// HTML
// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <meta http-equiv="X-UA-Compatible" content="ie=edge" />
//     <link
//       rel="stylesheet"
//       href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.css"
//     />
//     <title>Javascript Sandbox</title>
//   </head>
//   <body>
//     <script src="app.js"></script>
//   </body>
// </html>
//***********************************************
// Destructuring
//***********************************************
// let a, b, c;
// [a, b] = [100, 200];
// // Rest pattern (spread operator)
// [a, b, c, ...rest] = [100, 200, 300, 400, 500];

// console.log(rest);

// ({ a, b } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
// // rest
// ({ a, c, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 });

// console.log(a, c);
// console.log(rest);

// const people = ['John', 'Beth', 'Mike'];

// let [person1, person2, person3] = people;

// console.log(person1, person2, person3);

// // parse array returned from function
// function getPeople() {
//   return ['John', 'Beth', 'Mike'];
// }

// [person1, person2, person3] = getPeople();

// console.log(person1, person2, person3);

// // Object Destructuring
// const person = {
//   name: 'John Doe',
//   age: 32,
//   city: 'Miami',
//   gender: 'Male',
//   sayHello: function() {
//     console.log('Hello');
//   }
// };

// // Old ES5 way
// // const name = person.name,
// //   age = person.age,
// //   city = person.city;

// // New ES6 destructuring
// const { name, age, city, sayHello } = person;

// console.log(name, age, city);

// sayHello();

// HTML
// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <meta http-equiv="X-UA-Compatible" content="ie=edge" />
//     <link
//       rel="stylesheet"
//       href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.css"
//     />
//     <title>Javascript Sandbox</title>
//   </head>
//   <body>
//     <script src="app.js"></script>
//   </body>
// </html>

//***********************************************
// ES 6 Maps (holds key/value pairs)
//***********************************************
// can use ANY type as key or value

// const map1 = new Map();

// // set keys
// const key1 = 'some string',
//   key2 = {},
//   key3 = function() {};

// // set may values by key
// map1.set(key1, 'Value of key1');
// map1.set(key2, 'Value of key2');
// map1.set(key3, 'Value of key3');

// // get values by key
// console.log(map1.get(key1));
// console.log(map1.get(key2));
// console.log(map1.get(key3));

// // count values
// console.log(map1.size);

// // iterating maps
// // loop using for...of to get keys and values
// for (let [key, value] of map1) {
//   console.log(`${key} = ${value}`);
// }
// // iterate keys only
// for (let key of map1.keys()) {
//   console.log(`${key}`);
// }
// // iterate values only
// for (let value of map1.values()) {
//   console.log(`${value}`);
// }
// // loop with foreach
// map1.forEach((value, key) => console.log(`${key} = ${value}`));

// // Convert to arrays

// // create an array of key value pairs
// const keyValArr = Array.from(map1);
// console.log(keyValArr);

// // create an array of values
// const valArr = Array.from(map1.values());
// console.log(valArr);

// // create an array of keys
// const keyArr = Array.from(map1.keys());
// console.log(keyArr);

// HTML same as above
//***********************************************
// ES 6 Sets
//***********************************************
// Sets list of UNIQUE values of any type, no duplicates

// const set1 = new Set();

// // add values to set
// set1.add(100);
// set1.add('A string');
// set1.add({ name: 'John' });
// set1.add(true);
// set1.add(100); // just ignores this

// const set2 = new Set([1, true, 'string']);

// console.log(set1);
// console.log(set2);

// // get count
// console.log(set1.size);

// // check for values
// console.log(set1.has(100)); // true
// console.log(set1.has(50 + 50)); // true
// console.log(set1.has({ name: 'John' })); // false, different reference object

// // delete from set
// set1.delete(100);
// console.log(set1);

// // iterate through sets
// // for..of
// for (let item of set1) {
//   console.log(item);
// }

// //foreach loop
// set1.forEach(value => console.log(value));

// // convert set to array
// const setArr = Array.from(set1);
// console.log(setArr);

// HTML same as above
