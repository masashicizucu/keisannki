
let count : number = 0;

const counterElement = document.getElementById('counter') as HTMLElement;
const incrementButton = document.getElementById('increment') as HTMLButtonElement;
const decrementButton = document.getElementById('decrement') as HTMLButtonElement;
const multipleButton = document.getElementById('multiple') as HTMLButtonElement;
const resetButton = document.getElementById('rest') as HTMLButtonElement;

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
}
)

multipleButton.addEventListener('click', () => {
    count = count*2 ;
    updateCounter();
}
)

resetButton.addEventListener('click', () => {
    count = 0 ;
    updateCounter();
}
)

updateCounter();
