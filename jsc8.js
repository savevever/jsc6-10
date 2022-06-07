const container = document.getElementById('js-container');
const highlight = document.getElementById('js-hightlight');
var containerHeight;

window.onscroll = function() {

    containerHeight = container.offsetHeight - window.innerHeight;
    var containerPos = container.getBoundingClientRect();
    var diff = containerHeight + containerPos.top;
    var progressPercentage = diff / containerHeight * 100;
    var cssWidth = Math.floor(100 - progressPercentage);

    highlight.style.width = cssWidth + "%";

}