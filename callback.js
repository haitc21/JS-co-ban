var arr = [
    {
        id: 1,
        name: 'hai'
    },
    {
        id: 2,
        name: 'son'
    },
    {
        id: 3,
        name: 'cuong'
    }
];
console.log(arr);

Array.prototype.haidzMap = function (haiCallBack) {
    var result = [];
    if (typeof haiCallBack === 'function') {

        for (const index in this) {
            // for in nó lặp cả các phần tử trong prototype
            // nên hiện cả haidzMap mới được định nghĩa
            // result.push(haiCallBack(this[index], index));

            // this.hasOwnProperty(index)
            // kiểm tra xem thuộc tính đó không năm trong prototype
            if (this.hasOwnProperty(index)) {
                result.push(haiCallBack(this[index], index));
            }
        }

        // var arrLength = this.length;
        // for (let index = 0; index < arrLength; index++) {
        //     // console.log(index);
        //     // console.log(this[index]);
        //     result.push(haiCallBack(this[index], index));
        // }
        return result;
    }
};

var mang = arr.haidzMap((item, index) => {
    return {
        'index': index,
        Ten: item.name
    }
});

console.log(mang);