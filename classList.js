var element = document.querySelector('#test-class-list');
console.log(element.classList);
element.classList.add("test4");
element.classList.add("test5","test4");
console.log(element.classList);
var hasClass = element.classList.contains("test1");
console.log(hasClass);
element.classList.remove("test1");
console.log(element.classList);

// toggle mếu có thì xóa
// nếu chưa có thì thêm
element.classList.toggle("test4");
console.log(element.classList);