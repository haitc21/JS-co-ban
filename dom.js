// Có 4 cách đê truy vấn DOM
// 1. Id
// 2. Class name
// 3. selectors
// 4 Html Collection

// var headingNode = document.getElementById('heading1');
// console.log(headingNode);

// var headingNodes = document.getElementsByClassName('heading');
// console.log(headingNodes);

var selector = document.querySelector('.test');
console.log(selector);

var selectors = document.querySelectorAll('.test');
console.log(selectors);