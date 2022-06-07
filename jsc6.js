var info = document.getElementById('info');
var key = document.getElementById('key');

document.onkeydown = function(e) {
    console.log(e);
    e = e || window.event;
    info.innerHTML = '';
    key.innerHTML = e.keyCode || e.which;
}
