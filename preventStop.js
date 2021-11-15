var a = document.querySelector('a');

a.onclick = function (e) {
    e.preventDefault(); // ngăn hành động mặc đinh
    //  e.stopPropagation(); // chống nổi bọt
    console.log(e.target);
};
var ong = document.querySelector('.ong');
ong.onclick = function (e) {
    console.log('ong');
};
var cha = document.querySelector('.cha');
cha.onclick = function (e) {
    console.log('cha');
};
var cu = document.querySelector('.cu');
cu.onclick = function (e) {
    console.log('cu');
}