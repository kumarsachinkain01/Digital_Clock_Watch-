const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');
const day = document.querySelector('.day');

var monthName = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

const clock = setInterval(function time(){
    let today = new Date();
    let d = today.getDate();
    let m = today.getMonth();
    let y = today.getFullYear();
    let h = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    
    day.innerHTML = `${d} ${monthName[m]} ${y}`;
    hour.textContent = h;
    minute.innerText = min;
    second.innerText = sec;
}, 1000);
