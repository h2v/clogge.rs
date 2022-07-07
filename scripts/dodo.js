document.getElementById("head").onmousedown = function() {changeText(this)};
document.getElementById("head").onmouseup = function() {resetText(this)};

document.getElementById("btn") = function() {resetText(this)};

function changeText(x,y) {
    x.textContent = "🦤";
    btn.textContent = "hi" 
}

function resetText(x) {
    x.textContent = "Toilet Cloggers";
}