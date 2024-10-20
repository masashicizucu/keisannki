"use strict";
let count = 0;
const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
function updateCounter() {
    counterElement.textContent = count.toString();
}
incrementButton.addEventListener('click', () => {
    count++;
    updateCounter();
});
decrementButton.addEventListener('click', () => {
    count--;
    updateCounter();
});
updateCounter();
