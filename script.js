let clicker = 0;
let speed = 1000;
// повторить с интервалом 2 секунды
let timerId = setInterval(() => click(), speed);

function click() {
    clicker++;
    document.getElementById("counter").innerHTML = clicker;
};

function oneClick() {
    clicker++;
    document.getElementById("counter").innerHTML = clicker;
};

function speed12() {
    if (clicker >= 100) {
        clicker = clicker - 100;
        speed = speed * 1.2;
        let timerId = setInterval(() => click(), speed);    
    }
};