// ********************************************************
// Patterns
// ********************************************************
//
// ********************************************************
// Module and Revealing Module Pattern
// ********************************************************
// ES 6 introduced modules, still not fully supported by browsers
// ES 5 method is as follows:
//
// Basic structure (IIFE)
// (function() {
//     // Declare private variables and functions

//     return {
//         // Declare public variables and functions
//     }
// })();

// STANDARD MODULE PATTERN
// const UICtrl = (function() {
//   // Declare private variables and functions
//   let text = 'Hello World';

//   const changeText = function() {
//     const element = document.querySelector('h1');
//     element.textContent = text;
//   };

//   return {
//     // Declare public variables and functions
//     callChangeText: function() {
//       changeText();
//       console.log(text);
//     }
//   };
// })();

// UICtrl.callChangeText();

// REVEALING MODULE PATTERN
// Revealing module pattern directly exposes methods that are inside the module.
// I guess it's a more formalized pattern?
// const ItemCtrl = (function() {
//   let _data = []; // _convention for private variables

//   function add(item) {
//     _data.push(item);
//     console.log('Item added...');
//   }

//   function get(id) {
//     return _data.find(item => {
//       return item.id === id;
//     });
//   }

//   return {
//     add: add,
//     get: get
//   };
// })();

// ItemCtrl.add({ id: 1, name: 'John' });
// ItemCtrl.add({ id: 2, name: 'Mark' });
// console.log(ItemCtrl.get(2));

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
//     <h1></h1>
//     <script src="app.js"></script>
//   </body>
// </html>

// ********************************************************
// Singleton Pattern
// ********************************************************
// Manifestation of the module pattern
// Used for example, to represent logged-in user

// const Singleton = (() => {
//   let instance;

//   function createInstance() {
//     const object = new Object({ name: 'Alison' });
//     return object;
//   }

//   return {
//     getInstance: function() {
//       if (!instance) {
//         instance = createInstance();
//       }
//       return instance;
//     }
//   };
// })();

// const instanceA = Singleton.getInstance();
// const instanceB = Singleton.getInstance();

// console.log(instanceA === instanceB); // returns same object

// //console.log(instanceA);

// HTML as above

// ********************************************************
// Factory Pattern/Method
// ********************************************************
// creates an interface for creating objects, allowing subclasses to choose what to instantiate
// eg different types of memberships
// function MemberFactory() {
//   this.createMember = function(name, type) {
//     let member;

//     if (type === 'simple') {
//       member = new SimpleMembership(name);
//     } else if (type === 'standard') {
//       member = new StandardMembership(name);
//     } else if (type === 'super') {
//       member = new SuperMembership(name);
//     }

//     member.type = type;
//     member.define = function() {
//       console.log(`${this.name} (${this.type}): ${this.cost}`);
//     };

//     return member;
//   };
// }

// const SimpleMembership = function(name) {
//   this.name = name;
//   this.cost = '$5.00';
// };

// const StandardMembership = function(name) {
//   this.name = name;
//   this.cost = '$15.00';
// };

// const SuperMembership = function(name) {
//   this.name = name;
//   this.cost = '$25.00';
// };

// const members = [];
// const factory = new MemberFactory();

// members.push(factory.createMember('John Doe', 'simple'));
// members.push(factory.createMember('Chris Jackson', 'super'));
// members.push(factory.createMember('Janice Williams', 'simple'));
// members.push(factory.createMember('Tom Smith', 'standard'));

// //console.log(members);

// members.forEach(member => member.define());

// HTML as above

// ********************************************************
// Observer Pattern (subscribe/unsubscribe)
// ********************************************************
// function EventObserver() {
//   this.observers = [];
// }

// EventObserver.prototype = {
//   subscribe: function(fn) {
//     this.observers.push(fn);
//     console.log(`You are now subscribed to ${fn.name}`);
//   },
//   unsubscribe: function(fn) {
//     this.observers = this.observers.filter(item => {
//       if (item !== fn) return item;
//     });
//     console.log(`You are now unsubscribed from ${fn.name}`);
//   },
//   fire: function() {
//     this.observers.forEach(item => item.call());
//   }
// };

// const click = new EventObserver();

// // DOM event listeners
// document
//   .querySelector('.sub-ms')
//   .addEventListener('click', () => click.subscribe(getCurMilliseconds));
// document
//   .querySelector('.unsub-ms')
//   .addEventListener('click', () => click.unsubscribe(getCurMilliseconds));
// document.querySelector('.sub-s').addEventListener('click', () => click.subscribe(getCurSeconds));
// document
//   .querySelector('.unsub-s')
//   .addEventListener('click', () => click.unsubscribe(getCurSeconds));
// document.querySelector('.fire').addEventListener('click', () => click.fire());

// // Click Handler
// const getCurMilliseconds = () => {
//   console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
// };

// const getCurSeconds = () => {
//   console.log(`Current Seconds: ${new Date().getSeconds()}`);
// };

//ES 6 VERSION

// class EventObserver {
//   constructor() {
//     this.observers = [];
//   }
//   subscribe(fn) {
//     this.observers.push(fn);
//     console.log(`You are now subscribed to ${fn.name}`);
//   }
//   unsubscribe(fn) {
//     this.observers = this.observers.filter(item => {
//       if (item !== fn) return item;
//     });
//     console.log(`You are now unsubscribed from ${fn.name}`);
//   }
//   fire() {
//     this.observers.forEach(item => item.call());
//   }
// }

// const click = new EventObserver();

// // DOM event listeners
// document
//   .querySelector('.sub-ms')
//   .addEventListener('click', () => click.subscribe(getCurMilliseconds));
// document
//   .querySelector('.unsub-ms')
//   .addEventListener('click', () => click.unsubscribe(getCurMilliseconds));
// document.querySelector('.sub-s').addEventListener('click', () => click.subscribe(getCurSeconds));
// document
//   .querySelector('.unsub-s')
//   .addEventListener('click', () => click.unsubscribe(getCurSeconds));
// document.querySelector('.fire').addEventListener('click', () => click.fire());

// // Click Handler
// const getCurMilliseconds = () => {
//   console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
// };

// const getCurSeconds = () => {
//   console.log(`Current Seconds: ${new Date().getSeconds()}`);
// };

//HTML
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
//     <h1>Javascript Sandbox: Patterns</h1>
//     <button class="sub-ms">Subscribe to Milliseconds</button>
//     <button class="unsub-ms">Unsubscribe from Milliseconds</button>
//     <br /><br />
//     <button class="sub-s">Subscribe to Seconds</button>
//     <button class="unsub-s">Unsubscribe from Seconds</button>
//     <br /><br />
//     <button class="fire">Fire</button>

//     <script src="app.js"></script>
//   </body>
// </html>

// ********************************************************
// Mediator Pattern
// ********************************************************
// communicate with peers, eg in a chat room
// const User = function(name) {
//   this.name = name;
//   this.chatroom = null;
// };

// User.prototype = {
//   send: function(message, to) {
//     this.chatroom.send(message, this, to);
//   },
//   receive: function(message, from) {
//     console.log(`${from.name} to ${this.name}: ${message}`);
//   }
// };

// const Chatroom = function() {
//   let users = {}; // list of users

//   return {
//     register: function(user) {
//       // colleagues must register with mediator
//       users[user.name] = user;
//       user.chatroom = this;
//     },
//     send: function(message, from, to) {
//       if (to) {
//         // Single user message
//         to.receive(message, from);
//       } else {
//         // mass message
//         for (key in users) {
//           if (users[key] !== from) {
//             users[key].receive(message, from);
//           }
//         }
//       }
//     }
//   };
// };

// const brad = new User('Brad');
// const jeff = new User('Jeff');
// const sara = new User('Sara');

// const chatroom = new Chatroom();

// chatroom.register(brad);
// chatroom.register(jeff);
// chatroom.register(sara);

// brad.send('Hello Jeff', jeff);
// sara.send('Hello Brad', brad);
// jeff.send('Hi everyone!');

// HTML is basic
// ********************************************************
// State pattern small project
// ********************************************************
// const PageState = function() {
//   let currentState; // = new homeState(this);

//   this.init = function() {
//     this.change(new homeState());
//   };

//   this.change = function(state) {
//     currentState = state;
//   };
// };

// // home state
// const homeState = function(page) {
//   document.querySelector('#heading').textContent = null;
//   document.querySelector('#content').innerHTML = `
//     <div class="jumbotron">
//   <h1 class="display-4">Hello, world!</h1>
//   <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
//   <hr class="my-4">
//   <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
//   <p class="lead">
//     <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
//   </p>
// </div>
//     `;
// };

// // about state
// const aboutState = function(page) {
//   document.querySelector('#heading').textContent = 'About Us';
//   document.querySelector('#content').innerHTML = `
//     <p>This is the about page</p>
//     `;
// };

// // contact state
// const contactState = function(page) {
//   document.querySelector('#heading').textContent = 'Contact Us';
//   document.querySelector('#content').innerHTML = `
//     <form>
//     <div class="form-group">
//       <label for="exampleInputEmail1">Email address</label>
//       <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
//       <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
//     </div>
//     <div class="form-group">
//       <label for="exampleInputPassword1">Password</label>
//       <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
//     </div>
//     <div class="form-check">
//       <input type="checkbox" class="form-check-input" id="exampleCheck1">
//       <label class="form-check-label" for="exampleCheck1">Check me out</label>
//     </div>
//     <button type="submit" class="btn btn-primary">Submit</button>
//   </form>
//       `;
// };

// // Instantiate pageState
// const page = new PageState();

// // init the first state
// page.init();

// // UI variables
// const home = document.getElementById('home');
// const about = document.getElementById('about');
// const contact = document.getElementById('contact');

// home.addEventListener('click', e => {
//   page.change(new homeState());
//   e.preventDefault();
// });

// about.addEventListener('click', e => {
//   page.change(new aboutState());
//   e.preventDefault();
// });

// contact.addEventListener('click', e => {
//   page.change(new contactState());
//   e.preventDefault();
// });

// // HTML
// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <link
//       href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css"
//       rel="stylesheet"
//       integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb"
//       crossorigin="anonymous"
//     />
//     <meta http-equiv="X-UA-Compatible" content="ie=edge" />

//     <title>JavaScript Sandbox: Patterns</title>
//   </head>

//   <body>
//     <nav class="navbar navbar-expand-lg navbar-light bg-light mb-3">
//       <a class="navbar-brand" href="#">State Pattern</a>
//       <button
//         class="navbar-toggler"
//         type="button"
//         data-toggle="collapse"
//         data-target="#navbarSupportedContent"
//       >
//         <span class="navbar-toggler-icon"></span>
//       </button>

//       <div class="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul class="navbar-nav mr-auto">
//           <li class="nav-item">
//             <a id="home" class="nav-link" href="#">Home</a>
//           </li>
//           <li class="nav-item">
//             <a id="about" class="nav-link" href="#">About</a>
//           </li>
//           <li class="nav-item">
//             <a id="contact" class="nav-link" href="#">Contact</a>
//           </li>
//         </ul>
//       </div>
//     </nav>

//     <div class="container">
//       <h1 id="heading"></h1>
//       <div id="content"></div>
//     </div>

//     <script
//       src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
//       integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
//       crossorigin="anonymous"
//     ></script>
//     <script
//       src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js"
//       integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh"
//       crossorigin="anonymous"
//     ></script>
//     <script
//       src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js"
//       integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ"
//       crossorigin="anonymous"
//     ></script>
//     <script src="app.js"></script>
//   </body>
// </html>
