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
        speed = speed * 0.8;
        let timerId = setInterval(() => click(), speed);    
    }
};

function speed13() {
    if (clicker >= 1000) {
        clicker = clicker - 1000;
        speed = speed * 0.7;
        let timerId = setInterval(() => click(), speed);    
    }
};

function speed14() {
    if (clicker >= 10000) {
        clicker = clicker - 10000;
        speed = speed * 0.1;
        let timerId = setInterval(() => click(), speed);    
    }
};