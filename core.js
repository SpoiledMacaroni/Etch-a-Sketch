const container = document.querySelector('#main-container');

// Add 16 divs
for (let i = 1; i < 257; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.textContent = 'x';
    square.addEventListener("mouseover", function(e) {square.setAttribute("style", "background-color: black;")}, false);
    square.addEventListener("mouseout",square.setAttribute("style", "background-color: white;"))
    container.appendChild(square);
}
