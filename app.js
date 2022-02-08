
let count = 0;
let decrease = document.getElementById('decrease');
let increase = document.querySelector('.increase');
let reset = document.querySelector('.reset')
const counter = document.querySelector('#value');

function decreaseCount(){
    count--;
    if (count > 0){
        counter.style.color = "green"
    } else if (count < 0){
        counter.style.color = "red"
    } else {
        counter.style.color = "black"
    };
    counter.textContent = count;
}

function increaseCount(){
    count++;
    if (count > 0){
        counter.style.color = "green"
    } else if (count < 0){
        counter.style.color = "red"
    } else {
        counter.style.color = "black"
    };    
    counter.textContent = count;
}

function resetCount(){
    count = 0;
    counter.style.color = "black"
    counter.textContent = count;
}

decrease.addEventListener('click', decreaseCount);

increase.addEventListener('click', increaseCount);

reset.addEventListener('click', resetCount);


