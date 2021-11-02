// // var x;
// // var x = null;
// // var x = '';
// var x = {};

// if(x)
// {
//     console.log(Array.isArray(x));
//     console.log(Object.is(x));
//     console.log(true);
// }
// else {
//     console.log(x);
//     console.log(false);
// }
var empty = 1;
console.log(Object.keys(empty).length === 0 && empty.constructor === Object);
// if (    typeof yourVariable === 'object' &&
// !Array.isArray(yourVariable) &&
// yourVariable !== {}) {
//     console.log(yourVariable);
// }
// else {
//     console.log('Obj rỗng');
// }