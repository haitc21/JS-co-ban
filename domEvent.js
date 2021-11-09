var h1Element = document.querySelectorAll('h1');
console.log(h1Element);
for (const index in h1Element) {
    h1Element[index].onclick = function (e) {
        // e kiểu Pointerevent
        // e.target trả về chính element node đó
        console.log(e.target);
    }
}
