"use strict";
let count = 0;
const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const multipleButton = document.getElementById('multiple');
const resetButton = document.getElementById('rest');
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
multipleButton.addEventListener('click', () => {
    count = count * 2;
    updateCounter();
});
resetButton.addEventListener('click', () => {
    count = 0;
    updateCounter();
});
updateCounter();
