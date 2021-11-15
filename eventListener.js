var nut = document.querySelector('#nut');
console.log(nut);

function Viec1() {
    console.log('viec 1');
}
nut.addEventListener('click',Viec1);
nut.addEventListener('click',Viec2);

function Viec2() {
    console.log('viec 2');
}

nut.removeEventListener('click',Viec2);