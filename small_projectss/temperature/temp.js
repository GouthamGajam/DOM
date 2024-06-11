
var cc = document.getElementById('cel');
var ff = document.getElementById('fah');


cc.addEventListener('input', convertCtoF);
ff.addEventListener('input', convertFtoC);

function convertCtoF() {
    let c = parseFloat(cc.value);
    let f = (c * 9 / 5) + 32;
    ff.value = f.toFixed(3);
}

function convertFtoC() {
    let f = parseFloat(ff.value);
    let c = (f - 32) * 5 / 9;
    cc.value = c.toFixed(3);
}
