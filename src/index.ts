
let count : number = 0;

const counterElement = document.getElementById('counter') as HTMLElement;
const incrementButton = document.getElementById('increment') as HTMLButtonElement;
const decrementButton = document.getElementById('decrement') as HTMLButtonElement;

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

updateCounter();
