// EXAMINE THE DOCUMENT OBJECT //

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title =  123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID //
//console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000';

// GETELEMENTSBYCLASSNAME //
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < items.length; i++){
//   items[i].style.backgroundColor = '#f4f4f4';
// }

// GETELEMENTSBYTAGNAME //
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < li.length; i++){
//   li[i].style.backgroundColor = '#f4f4f4';
// }

// QUERYSELECTOR //
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World'

// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND"

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// QUERYSELECTORALL //
// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even= document.querySelectorAll('li:nth-child(even)');

// for(var i = 0; i < odd.length; i++){
//   odd[i].style.backgroundColor = '#f4f4f4';
//   even[i].style.backgroundColor = '#ccc';
// }



// TRAVERSING THE DOM //
// var itemList = document.querySelector('#items');
// // parentNode
//  console.log(itemList.parentNode); // is going to be the div

//  //var div = itemList.parentNode;  //parentNode = same thing
//  //console.log(div);
//  //itemList.parentNode.innerText = 'I think I understand it better. ';
//  var itemOne = itemList.children[1];
//  var itemZero = itemList.children[0];
//  console.log(itemOne);
//  console.log(itemList);
//  itemList.children[1].innerText='yellow';
//  itemOne.style.backgroundColor = 'yellow';
//  itemZero.innerText ='red';
//  itemZero.style.backgroundColor='red';
//  itemList.children[2].innerText ='blue';
//  itemList.children[2].style.backgroundColor='blue';

// itemOne[1].innerText = ' Not sure'
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// childNodes  Not such a great option.
//console.log(itemList.childNodes);

//console.log(itemList.children);
//console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// // FirstChild
// console.log(itemList.firstChild);
// // firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';


// lastChild
// console.log(itemList.lastChild);
// lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

// nextSibling
// console.log(itemList.nextSibling);
// // nextElementSibling
// console.log(itemList.nextElementSibling);

// previousSibling
// console.log(itemList.previousSibling);
// previousElementSibling
// console.log(itemList.previousElementSibling);itemList.previousElementSibling.style.color = 'green';

// createElement

// // Create a div
// var newDiv =  document.createElement('div');

// // Add class
// newDiv.className= 'hello';

// // Add id
// newDiv.id = 'hello1';

// // Add attr
// newDiv.setAttribute('title', 'Hello Div');

// // Create text node
// var newDivText = document.createTextNode('People');
// newDiv.innerText = 'hello ';

// //Create an H1 element inside the div
// var newH1 = document.createElement('h1');
// //var newH1Text = document.createTextNode('HOLA'); 
// newDiv.appendChild(newH1);
// newH1.innerText = ' Oye,   What\'s up?';
// console.log(newH1.innerText);


// // Add text to div
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// //console.log(newDiv);

// newDiv.style.fontSize = '30px';

// container.insertBefore(newDiv, h1);




// EVENTS //
//var button = document.querySelector('button');

// function buttonClick(){
//   console.log ('button clicked');
// }






// button.addEventListener('click', function (event) {
//  console.log(event);
// });

// button.addEventListener('click', function (event) {
//   let target = event.target;
//   target.classList.toggle('button--red');
//   target.classList.toggle('button--green');
// });
// document.getElementById('demo').addEventListener('click', myFunction);
// function myFunction (){
//   document.getElementById('demo').innerHTML = 'Did you Click Something?';
// };
// //var button = document.getElementById('button');
// //console.log(button);
// //var button = document.getElementById('button').addEventListener('click', buttonClick);

// //function buttonClick(){
//   //console.log('button clicked');
// //}


// function buttonClick(){
// console.log('Button clicked');
// document.getElementById('header-title').textContent = 'Changed';
// document.querySelector('#main').style.backgroundColor = 'lightblue';
// console.log('e');}
let button = document.querySelector('#button')

button.addEventListener('click', function (event){
document.querySelector('.title').textContent = 'Changed';
console.log(event);

console.log(event.type);
let target = event.target;
target.classList.toggle('button--red');
target.classList.toggle('button--green');
 });

 let extraContent = document.querySelector('.extra-content');

let showMoreButton = document.querySelector('.show-more-button');

let showLessButton = document.querySelector('.show-less-button');

showMoreButton.addEventListener('click', function(event){
  // Reveal the extra content
  extraContent.classList.add('visible');
  // Hide `Show More` button
  event.target.classList.remove('visible');
  // Show `Show Less` button
  showLessButton.classList.add('visible');
});

showLessButton.addEventListener('click', function(){
  // Hide the extra content
  extraContent.classList.remove('visible');
  // Hide `Show Less` button
  event.target.classList.remove('visible');
  // Show `Show More` button
  showMoreButton.classList.add('visible');
});


// //   // console.log(e.target);
// //   // console.log(e.target.id);
// //   // console.log(e.target.className);
// //   // console.log(e.target.classList);
// //   // var output = document.getElementById('output');
// //   // output.innerHTML = '<h3>'+e.target.id+'</h3>';

// //   // console.log(e.type);

// //   //console.log(e.clientX);
// //   //console.log(e.clientY);

// //   //console.log(e.offsetX);
// //   //console.log(e.offsetY);

// //   // console.log(e.altKey);
// //   // console.log(e.ctrlKey);
// //   // console.log(e.shiftKey);
// // }

// var button = document.getElementById('button');
// var box = document.getElementById('box');

//button.addEventListener('click', runEvent);
//button.addEventListener('dblclick', runEvent);
//button.addEventListener('mousedown', runEvent);
//button.addEventListener('mouseup', runEvent);

//box.addEventListener('mouseenter', runEvent);
//box.addEventListener('mouseleave', runEvent);

//box.addEventListener('mouseover', runEvent);
//box.addEventListener('mouseout', runEvent);

// box.addEventListener('mousemove', runEvent);

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select = document.querySelector('select');

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);

// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);

// itemInput.addEventListener('input', runEvent);

// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);

// form.addEventListener('submit', runEvent);

// function runEvent(e){
//   e.preventDefault();
//   console.log('EVENT TYPE: '+e.type);

  //console.log(e.target.value);
  // document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';

  // output.innerHTML = '<h3>MouseX: '+e.offsetX+' </h3><h3>MouseY: '+e.offsetY+'</h3>';

  // document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 40)";
//}