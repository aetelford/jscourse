// **************************************************************
// Stuff accessible via the document object
// **************************************************************

// let val;

// val = document;
// val = document.all;
// val = document.all[2];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;

// // not recommended, use selectors
// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;

// val = document.links;
// val = document.links[0];
// val = document.links[0].id;
// val = document.links[0].className;
// val = document.links[0].classList[0];

// val = document.images;

// val = document.scripts;
// val = document.scripts[2].getAttribute('src');

// // let scripts = document.scripts;
// // scripts.forEach(script => console.log(script)); // doesn't work, scripts not an array is collection/iterable

// let scripts = document.scripts;
// let scriptsArr = Array.from(scripts);
// scriptsArr.forEach(script => console.log(script.getAttribute('src')));

// console.log(val);

// **************************************************************
// DOM Selectors for Single Elements
// **************************************************************

// // document.getElementById()

// console.log(document.getElementById('task-title'));

// // Get things from the element
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// const taskTitle = document.getElementById('task-title');

// // Change styling
// taskTitle.style.background = '#333';
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '5px';
// //taskTitle.style.display = 'none';

// // Change content
// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'My Tasks';
// taskTitle.innerHTML = '<span style="color:red">Task List</span>';

// // document.querySelector() -- more powerful and newer than getElementById
// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5')); // gives the first h5 encountered
// document.querySelector('li').style.color = 'red'; // only changes first li element
// document.querySelector('li:last-child').style.color = 'blue'; // search on css pseudoclass
// document.querySelector('li:nth-child(3)').style.color = 'green'; // search on css pseudoclass
// document.querySelector('li:nth-child(4)').textContent = 'Hello World'; // search on css pseudoclass
// document.querySelector('li:nth-child(odd)').style.background = '#ccc'; // only does first cuz single elem selector

// **************************************************************
// DOM Selectors for Multiple Elements
// **************************************************************

// // document.getElementsbyClassName
// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'Hello World';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);

// // document.getElementsByTagName
// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello World';

// //lis.reverse();
// //console.log(lis); // doesn't work, collection not an array

// // Convert collection to array
// lis = Array.from(lis);
// lis.reverse();

// lis.forEach((li, index) => {
//   console.log(li.className);
//   li.textContent = `${index}: Hello`;
// });
// console.log(lis); // works

// // document.querySelectorAll
// const items = document.querySelectorAll('ul.collection li.collection-item');

// // returns NodeList instead of HTMLCollection, don't have to convert to array
// items.forEach((item, index) => {
//   item.textContent = `${index}: Hello`;
// });

// const liOdd = document.querySelectorAll('li:nth-child(odd)');
// const liEven = document.querySelectorAll('li:nth-child(even)');

// liOdd.forEach((li, index) => {
//   li.style.background = '#ccc';
// });

// for (let i = 0; i < liEven.length; i++) {
//   liEven[i].style.background = '#bbb';
// }

// console.log(items);

// **************************************************************
// Traversing the DOM
// **************************************************************

// let val;

// const list = document.querySelector('ul.collection');
// const listItem = document.querySelector('li.collection-item:first-child');

// val = listItem;
// val = list;

// // get child nodes (includes text nodes and comments due to linebreaks in html source file between li elements)
// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
// val = list.childNodes[1].nodeType;

// // Node Types For reference:
// // 1 - Element
// // 2 - Attribute (deprecated)
// // 3 - Text node
// // 8 - Comment
// // 9 - Document itself
// // 10 - Doctype

// // just get element nodes (returns htmlcollection rather than nodelist)
// val = list.children;
// val = list.children[1].textContent = 'Hello';
// // children of children
// list.children[3].children[0].id = 'test-link';
// val = list.children[3].children[0];

// val = list.firstChild; // give text node
// val = list.firstElementChild; // gives first element

// val = list.lastChild; // give last node
// val = list.lastElementChild; // gives last element

// val = list.childElementCount; // counts child elements of item

// // get parent node
// val = listItem.parentNode;
// val = listItem.parentElement; // usually same as node
// val = listItem.parentElement.parentElement; // grandparent

// // siblings
// val = listItem.nextSibling; // gives text node in this case
// val = listItem.nextElementSibling; // gest next li
// val = listItem.nextElementSibling.nextElementSibling; // third
// val = listItem.previousElementSibling; // gets prev li -- NULL
// val = listItem.nextElementSibling.nextElementSibling.previousElementSibling; // second

// console.log(val);

// **************************************************************
// Creating Elements
// **************************************************************

// const li = document.createElement('li');
// // add class
// li.className = 'collection-item';
// // add id
// li.id = 'new-item';
// // add attribute
// li.setAttribute('title', 'New Item');
// // create text node and append to li
// li.appendChild(document.createTextNode('Hello World'));
// // create new link element
// const link = document.createElement('a');
// // add link class
// link.className = 'delete-item secondary-content';
// // add icon html
// link.innerHTML = '<i class="fa fa-remove"></i>';
// // append link into li
// li.appendChild(link);

// // append li as child to existing ul
// document.querySelector('ul.collection').appendChild(li);

// console.log(li);

// **************************************************************
// Removing and Replacing Elements
// **************************************************************

// // replace h5 with <h2>
// const newHeading = document.createElement('h2');
// // add id
// newHeading.id = 'task-title';
// // add new text node to <h2>
// newHeading.appendChild(document.createTextNode('Task List'));

// // get the old heading
// const oldHeading = document.getElementById('task-title');
// // parent
// const cardAction = document.querySelector('.card-action');
// // replace
// cardAction.replaceChild(newHeading, oldHeading);

// //console.log(newHeading);

// // remove element
// const lis = document.querySelectorAll('li');
// const list = document.querySelector('ul');

// // remove list item directly
// lis[0].remove();
// // or remove child
// list.removeChild(lis[2]);

// // Classes and Attributes
// const firstLi = document.querySelector('li:first-child');
// const link = firstLi.children[0]; // gets link

// let val;
// // classes
// val = link.className;
// val = link.classList;
// val = link.classList[0];
// link.classList.add('test');
// link.classList.remove('test');
// val = link;

// // attributes
// val = link.getAttribute('href');
// val = link.setAttribute('href', 'http://google.com');
// link.setAttribute('title', 'Google');
// val = link.hasAttribute('title');
// val = link;
// link.removeAttribute('title');

// console.log(val);

// **************************************************************
// Event Listeners and the Event Object
// **************************************************************
