//1 
// let myBody = document.getElementsByTagName('body')[0];
let myBody = document.body;
console.log(myBody);
//2
let first = myBody.firstElementChild
console.log(first);
//3
let last = myBody.lastElementChild
console.log(last);
//4
let myDiv = document.getElementsByTagName('div')[0]
let divChildren = myDiv.children
console.log(divChildren);
//5
let liAll = document.getElementsByTagName('li')[0];
let suivant = liAll.nextElementSibling
console.log(suivant);

//6
let precedant = suivant.previousElementSibling
console.log(precedant);