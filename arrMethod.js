var arr = [
    {
        id: 1,
        name: 'Iphone',
        price: 1000
    },
    {
        id: 2,
        name: 'samsung',
        price: 800
    },
    {
        id: 3,
        name: 'xiaomi',
        price: 500
    },
    {
        id: 4,
        name: 'oppo',
        price: 0
    }
];

// every: tìm lần lượt các phần tử trong mảng
// nếu call back trả về false thì dừng và tả về false
// tương tự với All
// var everyArr = arr.every((item, index) => {
//     console.log(index);
//     return item.price > 0;
// });
// console.log(everyArr);

// some: tìm lần lượt các phần tử trong mảng
// nếu call back trả về true thì dừng và tả về true
// tương tự với Any
// var someArr = arr.some((item, index) => {
//     console.log(index);
//     return item.price > 0;
// });
// console.log(someArr);

// find trả về phần tử đầu tiên
// k thấy trả về undifine
// var findArr = arr.find((item, index) => {
//     console.log(index);
//     return item.price > 0;
// });
// console.log(findArr);

// trả về tất cả phần tử thỏa mãn
// k có thì trả về []
// var filter = arr.filter((item, index) => {
//     console.log(index);
//     return item.price > 0;
// });
// console.log(filter);

// accumulator biến lưu trữ
// currentValue đối tượng hiện tại
// currentIndex index trong mảng đầu vào
// originArr là mảng đầu vào
//originArr cùng vùng nhớ với mảng đầu vào nên
//  nếu originArr thay đổi thì arr cũng thay đổi

// function TinhGia(accumulator, currentValue, currentIndex, originArr) {
//     originArr[0].price = 2000;

//     console.table({
//         'accumulator': accumulator,
//         'currentValue': currentValue.price,
//         'currentIndex': currentIndex
//     });

//     return accumulator + currentValue.price
// }
// reduce truyền vào 2 đối số
// 1 hàm call back
// giá trị khởi tạo của biến lưu trữ
// var reduceArr = arr.reduce(TinhGia, 0);
// console.log(reduceArr);

var newArr = arr.map(a => {
    return {
        Ten: a.name,
        Gia: a.price
    }
});
console.log(newArr);