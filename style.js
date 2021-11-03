var dom = document.querySelector('.test-style');
dom.style.width = '100px';
dom.style.height = '100px';
dom.style.backgroundColor = 'red';
console.log(dom);
Object.assign(dom.style,{
    widh: '200px',
    backgroundColor: 'blue'
});
console.log(dom);