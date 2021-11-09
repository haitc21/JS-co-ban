var imp = document.querySelector("#imput-text");
var ckb = document.querySelector("#check-box");
var sel = document.querySelector("#select");

// oninput nhap vao input la co
imp.oninput = function (e) {
    console.log(e.target.value);
}
ckb.onchange = function (e) {
    console.log(e.target.checked);
}
sel.onchange = function (e) {
    console.log(e.target.value);
}

document.onkeyup = function (e) {
    // which mã code của phím bấm
    console.log(e.which);
    switch (e.which) {
        case 27:
            console.log('Thoát');
            break;
        case 13:
            console.log('Enter');
            break;
        default:
            break;

    }
}