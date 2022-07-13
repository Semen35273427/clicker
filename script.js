let clicker = 0;
let speed = 1000;
// повторить с интервалом 2 секунды
let timerId = setInterval(() => click(), speed);

// Добаляет один поинт к цели

function click() {
    if (clicker >= 10000) {
        alert("Good job! Take a cake.");
        let timerId = setInterval(() => stop(), 0);
    }
    
    clicker++;
    document.getElementById("counter").innerHTML = clicker;
    document.getElementById("goal").innerHTML = 10000-clicker;
};

function oneClick() {
    clicker = clicker + 1;
    document.getElementById("counter").innerHTML = clicker;
    document.getElementById("goal").innerHTML = 10000-clicker;
};

function speed12() {
    if (clicker >= 10) {
        clicker = clicker - 10;
        speed = speed * 0.8;
        let timerId = setInterval(() => click(), speed);
        // удаление элемента html по id
        document.getElementById("one").remove();    
    }
};

function speed13() {
    if (clicker >= 100) {
        clicker = clicker - 100;
        speed = speed * 0.7;
        let timerId = setInterval(() => click(), speed);
        document.getElementById("two").remove();        
    }
};

function speed14() {
    if (clicker >= 500) {
        clicker = clicker - 500;
        speed = speed * 0.1;
        let timerId = setInterval(() => click(), speed);
        document.getElementById("three").remove();        
    }
};