var level = 0;
var counter = 0;
var time = 1000;
// var btn = document.getElementById('button');
// btn.addEventListener('onmouseover', startTime());

console.log(screen.width);
console.log(screen.height);
console.log(window.innerWidth);
console.log(window.innerHeight);

console.log(screen.availWidth);
console.log(screen.availHeight);

function increaseLevel() {
    counter++;
    if (counter == 3) {
        alert("You have reached level "+ (++level + 1));
        counter = 0;
        time -= 200;
        console.log(time);
    }
}

function startTime() {
    console.log(time);
    setTimeout(function() {
        changeBtnPosition();}, time);
}


function changeBtnPosition() {
    document.getElementById("button").style.marginLeft = Math.random()*window.innerWidth+"px";
    document.getElementById("button").style.marginTop = Math.random()*window.innerHeight+"px";
}