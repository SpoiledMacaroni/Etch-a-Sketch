const container = document.querySelector('#main-container');

// Add 16 divs
for (let i = 1; i < 257; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.textContent = 'x';
    container.appendChild(square);
}