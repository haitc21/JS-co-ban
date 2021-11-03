// Có 4 cách đê truy vấn DOM
// 1. Id
// 2. Class name
// 3. selectors
// 4 Html Collection

// var headingNode = document.getElementById('heading1');
// console.log(headingNode);

// getElementsByTagName => HTMLCollection
//  var headingNode = document.getElementsByTagName('h1');
// console.log(headingNode);

// getElementsByClassName => HTMLCollection
// var headingNodes = document.getElementsByClassName('test');
// console.log(headingNodes);

// var selector = document.querySelector('.test');
// console.log(selector);

// querySelectorAll => NodeList
// var selectors = document.querySelectorAll('.test');
// console.log(selectors[0]);

// 4 Html Collection
// các thẻ như form,  a thì tự thành Html Collection
// var selectors = document.forms;
// console.log(selectors);

// Attr node
// var headingNode = document.getElementById('heading1');
// console.log(headingNode);
// headingNode.title = 'test title';
// console.log(headingNode);
// console.log(headingNode.title);
// headingNode.setAttribute('test-attr','123');
// console.log(headingNode);
// console.log(headingNode.getAttribute('test-attr'));

// Text node
// var headingNode = document.getElementById('heading1');
// headingNode.innerText = 'thay doi text';
// console.log(headingNode.innerText);
// console.log(headingNode.textContent);
// innerText lấy ra text bỏ hết thẻ và khoảng trắng
// innerText trả ra nội dung như trên trang (css ẩn đi thì cũng k trả về

// textContent lấy hết ội dung node kể cả khoảng tắng
// textContent trả hết nội dung trong node về kể cả khi css ẩn đi

// innerText thêm thẻ html thì vẫn ra text vì nó tự động ẩn
// đổi thành mã chó dấu < >
// dấu xuống dòng thì tự thành </br>
// headingNode.innerText = `

// <h1>abc</h1>


// `;

// textContent thêm thẻ html thì vẫn ra text vì nó tự động ẩn
// đổi textContent mã chó dấu < >
// dấu xuống dòng thì tự thành khoảng trắng nên html k có tác động gì
// headingNode.textContent = `

// <h1>abc</h1>


// `;

var box = document.querySelector('.box');
console.log(box);
// innerHTML ghi đè tất cả nội dung bên trong DOM
box.innerHTML = '<h1>Hai dz</h1>';
// outerHTML ghi đè cả DOm
// mất luôn thẻ div class="box"
// box.outerHTML = '<h1>Hai dz 2</h1>';
// console.log(document.querySelector('.box')); // null
console.log([box.height, box.width]);