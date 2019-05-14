//************************************************************
// XmlHTTPRequest and AJAX Use
//************************************************************
// document.getElementById('button').addEventListener('click', loadData);

// // XHR and AJAX is older standard, mostly replaced by Fetch API now (Fetch is built into JS)

// // load data
// function loadData() {
//   // create XHR Object
//   const xhr = new XMLHttpRequest();

//   // Open method
//   xhr.open('GET', 'data.txt', true);

//   //console.log('READYSTATE ', xhr.readyState);

//   // optional, used for spinners/loaders
//   xhr.onprogress = function() {
//     console.log('READYSTATE ', xhr.readyState); // shows 3, processing
//   };

//   // onload callback -- NEWER METHOD, only fires when readystate is 4
//   xhr.onload = function() {
//     console.log('READYSTATE ', xhr.readyState); // only shows state 4
//     if (this.status === 200) {
//       //console.log(this.responseText);
//       document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
//     }
//   };

//   //   // Check readyState == OLDER METHOD
//   //   xhr.onreadystatechange = function() {
//   //     console.log('READYSTATE ', xhr.readyState); // logs all four states
//   //     if (this.status === 200 && this.readyState === 4) {
//   //       console.log(this.responseText);
//   //     }
//   //   };

//   xhr.onerror = function() {
//     console.log('Request error...'); // doesn't handle HTTP errors like 404. Network errors only?
//   };

//   xhr.send();
// }

// // readyState Values
// // 0: request not initialized
// // 1: server connection established
// // 2: request received
// // 3: processing request
// // 4: request finished and response is ready

// // HTTP Statuses
// // 200: "OK"
// // 403: "Forbidden"
// // 404: "Not Found"

//************************************************************
// Working with Ajax and JSON
//************************************************************
// document.getElementById('button1').addEventListener('click', loadCustomer);
// document.getElementById('button2').addEventListener('click', loadCustomers);

// // load customer
// function loadCustomer(e) {
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', 'customer.json', true);

//   xhr.onload = function() {
//     if (this.status === 200) {
//       //console.log(this.responseText);
//       const customer = JSON.parse(this.responseText);
//       const output = `
//         <ul>
//             <li>ID: ${customer.id}</li>
//             <li>Name: ${customer.name}</li>
//             <li>Company: ${customer.company}</li>
//             <li>Phone: ${customer.phone}</li>
//         </ul>
//         `;
//       document.getElementById('customer').innerHTML = output;
//     }
//   };

//   xhr.send();
// }

// // load customers
// function loadCustomers(e) {
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', 'customers.json', true);

//   xhr.onload = function() {
//     if (this.status === 200) {
//       //console.log(this.responseText);
//       const customers = JSON.parse(this.responseText);
//       let output = '';
//       customers.forEach(function(customer) {
//         output += `
//             <ul>
//                 <li>ID: ${customer.id}</li>
//                 <li>Name: ${customer.name}</li>
//                 <li>Company: ${customer.company}</li>
//                 <li>Phone: ${customer.phone}</li>
//             </ul>
//             `;
//       });
//       //console.log(output);
//       document.getElementById('customers').innerHTML = output;
//     }
//   };

//   xhr.send();
// }

// // HTML for this
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
//     <title>Ajax Sandbox</title>
//   </head>
//   <body>
//     <div class="container">
//       <button id="button1">Get Customer</button>
//       <button id="button2">Get Customers</button>
//       <br /><br />
//       <h1>Customer</h1>
//       <div id="customer"></div>
//       <h1>Customers</h1>
//       <div id="customers"></div>
//     </div>
//     <script src="app.js"></script>
//   </body>
// </html>

//************************************************************
// Data from external API (Chuck norris joke generator)
//************************************************************
// document.querySelector('.get-jokes').addEventListener('click', getJokes);

// // getJokes function
// function getJokes(e) {
//   const number = document.querySelector('input[type="number"]').value;

//   const xhr = new XMLHttpRequest();

//   xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

//   xhr.onload = function() {
//     if (this.status === 200) {
//       const response = JSON.parse(this.responseText);
//       //console.log(response);
//       let output = '';
//       if (response.type === 'success') {
//         response.value.forEach(function(joke) {
//           output += `<li>${joke.joke}</li>`;
//         });
//       } else {
//         output += '<li>Something went wrong...</li>';
//       }
//       document.querySelector('.jokes').innerHTML = output;
//     }
//   };

//   xhr.send();

//   e.preventDefault();
// }

// // HTML
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
//     <title>Chuck Norris Joke Generator</title>
//   </head>
//   <body>
//     <div class="container">
//       <h2>Chuck Norris Joke Generator</h2>
//       <form>
//         <div>
//           <label for="number">Number of Jokes</label>
//           <input type="number" id="number" />
//         </div>
//         <div>
//           <button class="get-jokes">Get Jokes</button>
//         </div>
//       </form>
//       <ul class="jokes"></ul>
//     </div>
//     <script src="app.js"></script>
//   </body>
// </html>

//************************************************************
// REST APIs and HTTP Requests/Callbacks
//************************************************************
// const posts = [
//   { title: 'Post One', body: 'This is post one' },
//   { title: 'Post Two', body: 'This is post two' }
// ];

// // // Synchronous way, we don't see the new post
// // function createPost(post) {
// //   setTimeout(function() {
// //     posts.push(post);
// //   }, 2000);
// // }

// // function getPosts() {
// //   setTimeout(function() {
// //     let output = '';
// //     posts.forEach(function(post) {
// //       output += `<li>${post.title}</li>`;
// //     });
// //     document.body.innerHTML = output;
// //   }, 1000);
// // }

// // createPost({ title: 'Post Three', body: 'This is post three' });
// // getPosts();

// // Asynchronous way, getPosts is used as a callback when createPost finishes
// function createPost(post, callback) {
//   setTimeout(function() {
//     posts.push(post);
//     callback();
//   }, 2000);
// }

// function getPosts() {
//   setTimeout(function() {
//     let output = '';
//     posts.forEach(function(post) {
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// createPost({ title: 'Post Three', body: 'This is post three' }, getPosts);

// // HTML
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
//     <title>Ajax Sandbox</title>
//   </head>
//   <body>
//     <script src="app.js"></script>
//   </body>
// </html>

//************************************************************
// Custom HTTP Library (Ajax with Callbacks)
//************************************************************
// // using JSONPlaceholder as fake REST API
// const http = new easyHTTP();

// // // Get Posts
// // http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
// //   if (err) {
// //     console.log(err);
// //   } else {
// //     console.log(posts);
// //   }
// // });

// // // Get Single Post
// // http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, post) {
// //   if (err) {
// //     console.log(err);
// //   } else {
// //     console.log(post);
// //   }
// // });

// // // Do a post, create data
// // const data = {
// //   title: 'Custom Post',
// //   body: 'This is a custom post'
// // };

// // http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post) {
// //   if (err) {
// //     console.log(err);
// //   } else {
// //     console.log(post);
// //   }
// // });

// // // Do a put for post number 1 (hardcoded for now)
// // const data = {
// //   title: 'Custom Post',
// //   body: 'This is a custom post'
// // };

// // http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post) {
// //   if (err) {
// //     console.log(err);
// //   } else {
// //     console.log(post);
// //   }
// // });

// // http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, reply) {
// //   if (err) {
// //     console.log(err);
// //   } else {
// //     console.log(reply);
// //   }
// // });

// //HTML
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
//     <title>EasyHTTP Example</title>
//   </head>
//   <body>
//     <h2>EasyHTTP Example</h2>
//     <script src="easyhttp.js"></script>
//     <script src="app.js"></script>
//   </body>
// </html>
//************************************************************
// ES6 Promises instead of callbacks
//************************************************************
// const posts = [
//   { title: 'Post One', body: 'This is post one' },
//   { title: 'Post Two', body: 'This is post two' }
// ];

// function createPost(post) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       posts.push(post);
//       const error = false;
//       if (!error) {
//         resolve();
//       } else {
//         reject('Something went wrong');
//       }
//     }, 2000);
//   });
// }

// function getPosts() {
//   setTimeout(function() {
//     let output = '';
//     posts.forEach(function(post) {
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// createPost({ title: 'Post Three', body: 'This is post three' })
//   .then(getPosts)
//   .catch(function(err) {
//     console.log(err);
//   });

// // HTML
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
//     <title>Ajax Sandbox</title>
//   </head>
//   <body>
//     <script src="app.js"></script>
//   </body>
// </html>
//************************************************************
// The Fetch API
//************************************************************
// document.getElementById('button1').addEventListener('click', getText);
// document.getElementById('button2').addEventListener('click', getJSON);
// document.getElementById('button3').addEventListener('click', getExternal);

// function getText() {
//   fetch('data.txt')
//     .then(function(res) {
//       return res.text();
//     })
//     .then(function(data) {
//       //console.log(data);
//       document.getElementById('output').innerHTML = data;
//     })
//     .catch(function(err) {
//       console.log(err);
//     });
// }

// function getJSON() {
//   fetch('posts.json')
//     .then(function(res) {
//       return res.json();
//     })
//     .then(function(data) {
//       //console.log(data);
//       let output = '';
//       data.forEach(function(post) {
//         output += `<li>${post.title}</li>`;
//       });
//       document.getElementById('output').innerHTML = output;
//     })
//     .catch(function(err) {
//       console.log(err);
//     });
// }

// function getExternal() {
//   fetch('https://api.github.com/users')
//     .then(function(res) {
//       return res.json();
//     })
//     .then(function(data) {
//       //console.log(data);
//       let output = '';
//       data.forEach(function(user) {
//         output += `<li>${user.login}</li>`;
//       });
//       document.getElementById('output').innerHTML = output;
//     })
//     .catch(function(err) {
//       console.log(err);
//     });
// }

// // HTML
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
//     <title>Fetch API Sandbox</title>
//   </head>
//   <body>
//     <div class="container">
//       <h1>Fetch API Sandbox</h1>
//       <button id="button1">Get Text</button>
//       <button id="button2">Get JSON</button>
//       <button id="button3">Get API Data</button>
//       <br /><br />
//       <div id="output"></div>
//     </div>
//     <script src="app.js"></script>
//   </body>
// </html>

//************************************************************
// Arrow functions
//************************************************************
// // const sayHello = function() {
// //   console.log('Hello');
// // };

// // const sayHello2 = () => {
// //   console.log('Hello');
// // };

// // const sayHello3 = () => console.log('Hello');

// // const sayHello4 = () => 'Hello'; // don't need return keyword unless returning object literal with braces (if so use parenthese)

// // const sayHello5 = () => ({ msg: 'Hello' }); // for example

// // // params, single needs no parentheses
// // const sayHello6 = name => console.log(`Hello ${name}`);

// // const sayHello7 = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

// // sayHello3();
// // console.log(sayHello5());
// // sayHello6('Alison');
// // sayHello7('Alison', 'Telford');

// // as callbacks
// const users = ['Nathan', 'John', 'William'];

// const nameLengths = users.map(name => name.length);

// console.log(nameLengths);

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
//     <h1>Arrow Functions</h1>
//     <script src="app.js"></script>
//   </body>
// </html>

//************************************************************
// The Fetch API with arrow functions
//************************************************************
// document.getElementById('button1').addEventListener('click', getText);
// document.getElementById('button2').addEventListener('click', getJSON);
// document.getElementById('button3').addEventListener('click', getExternal);

// function getText() {
//   fetch('data.txt')
//     .then(res => res.text())
//     .then(data => {
//       document.getElementById('output').innerHTML = data;
//     })
//     .catch(err => console.log(err));
// }

// function getJSON() {
//   fetch('posts.json')
//     .then(res => res.json())
//     .then(data => {
//       let output = '';
//       data.forEach(post => (output += `<li>${post.title}</li>`));
//       document.getElementById('output').innerHTML = output;
//     })
//     .catch(err => console.log(err));
// }

// function getExternal() {
//   fetch('https://api.github.com/users')
//     .then(res => res.json())
//     .then(data => {
//       let output = '';
//       data.forEach(user => (output += `<li>${user.login}</li>`));
//       document.getElementById('output').innerHTML = output;
//     })
//     .catch(err => console.log(err));
// }

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
//     <title>Fetch API Sandbox</title>
//   </head>
//   <body>
//     <div class="container">
//       <h1>Fetch API Sandbox</h1>
//       <button id="button1">Get Text</button>
//       <button id="button2">Get JSON</button>
//       <button id="button3">Get API Data</button>
//       <br /><br />
//       <div id="output"></div>
//     </div>
//     <script src="app.js"></script>
//   </body>
// </html>

//************************************************************
// Custom HTTP Library (Fetch With Promises)
//************************************************************
// const http = new EasyHTTP();

// // // Get Users
// // http
// //   .get('https://jsonplaceholder.typicode.com/users')
// //   .then(data => console.log(data))
// //   .catch(err => console.log(err));

// // // Post Data
// // const data = { name: 'John Doe', username: 'johndoe', email: 'jdoe@gmail.com' };

// // http
// //   .post('https://jsonplaceholder.typicode.com/users', data)
// //   .then(data => console.log(data))
// //   .catch(err => console.log(err));

// // // Put Data
// // const data = { name: 'John Doe', username: 'johndoe', email: 'jdoe@gmail.com' };

// // http
// //   .put('https://jsonplaceholder.typicode.com/users/2', data)
// //   .then(data => console.log(data))
// //   .catch(err => console.log(err));

// // Delete
// http
//   .delete('https://jsonplaceholder.typicode.com/users/2')
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// //HTML
// // <!DOCTYPE html>
// // <html lang="en">
// //   <head>
// //     <meta charset="UTF-8" />
// //     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
// //     <meta http-equiv="X-UA-Compatible" content="ie=edge" />
// //     <link
// //       rel="stylesheet"
// //       href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.css"
// //     />
// //     <title>EasyHTTP2 Example</title>
// //   </head>
// //   <body>
// //     <h2>EasyHTTP2 Example</h2>
// //     <script src="easyhttp.js"></script>
// //     <script src="app.js"></script>
// //   </body>
// // </html>

//************************************************************
// Async and Await
//************************************************************
// async function myFunc() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Hello'), 1000);
//   });

//   const error = false;

//   if (!error) {
//     const res = await promise; // wait until promise resolves
//     return res;
//   } else {
//     await Promise.reject(new Error('Something went wrong'));
//   }
// }

// myFunc()
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

// // With Fetch

// async function getUsers() {
//   // await response of fetch call
//   const response = await fetch('https://jsonplaceholder.typicode.com/users');
//   // proceed once that promise is resolved
//   const data = await response.json();
//   // proceed once second promise is resolved
//   return data;
// }

// getUsers().then(users => console.log(users));

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

//************************************************************
// Custom HTTP Library (Fetch With Async Await)
//************************************************************
const http = new EasyHTTP();

// Get Users
http
  .get('https://jsonplaceholder.typicode.com/users')
  .then(data => console.log(data))
  .catch(err => console.log(err));

// Post Data
const data = { name: 'John Doe', username: 'johndoe', email: 'jdoe@gmail.com' };

http
  .post('https://jsonplaceholder.typicode.com/users', data)
  .then(data => console.log(data))
  .catch(err => console.log(err));

// Put Data
http
  .put('https://jsonplaceholder.typicode.com/users/2', data)
  .then(data => console.log(data))
  .catch(err => console.log(err));

// Delete
http
  .delete('https://jsonplaceholder.typicode.com/users/2')
  .then(data => console.log(data))
  .catch(err => console.log(err));

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
//     <title>EasyHTTP3 Example</title>
//   </head>
//   <body>
//     <h2>EasyHTTP3 Example</h2>
//     <script src="easyhttp.js"></script>
//     <script src="app.js"></script>
//   </body>
// </html>
