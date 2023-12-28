// All the divs are created through DOM
// Main container
function createDiv() {
    const mainDiv = document.createElement("div");
    document.body.appendChild(mainDiv);
    mainDiv.setAttribute("id", "mainDiv");
  }
  createDiv();
  
  // Header
  function createHeader() {
    const header = document.createElement("div");
    mainDiv.appendChild(header);
    header.setAttribute("id", "header");
    header.textContent = 'Etch-a-Sketch';
  }
  createHeader();

  // Grid container
  function createGrid() {
    const mainGrid = document.createElement("div");
    mainDiv.appendChild(mainGrid);
    mainGrid.setAttribute("id", "mainGrid");
  }
  createGrid();
  
  // Function to create individual square and change its color while hovering
  function createChild() {
    const childDiv = document.createElement("div");
    mainGrid.appendChild(childDiv);
    childDiv.setAttribute("class", "childDiv");
    // Event for changing colors while hovering over the squares
    childDiv.addEventListener(
      "mouseover",
      (event) => {
        event.target.style.background = "black";
      }
    );
  }
  
  //Function to loop the squares
  const size = 16;
  function createLoop() {
    for (i = 0; i < size * size; i++) {
      createChild();
    }
  }
  createLoop();
  
    // Button container
    function createNavBar() {
        const navBar = document.createElement("div");
        mainDiv.appendChild(navBar);
        navBar.setAttribute("id", "navBar");
      }
      createNavBar();

  // Function to create buttons, change its color and get user value when button is clicked
  function createButton() {
    // create button for changing grid size
    const button = document.createElement("button");
    navBar.appendChild(button);
    button.setAttribute("id", "button");
    button.textContent = "Change grid size";
  
    // event to get user's value through prompt
    button.addEventListener("click", (event) => {
      userInput = prompt("Please insert desired size, between 1-100");
      if (userInput > 100) {
        alert("Value too high, please retry")
      } else {
        clearGrid();
      }
      resizeGrid(userInput);
    });
  }
  createButton();
  
  //Function to clear color
  function clearColor() {
    // create button for clearing grid
    const clearBtn = document.createElement("button");
    navBar.appendChild(clearBtn);
    clearBtn.setAttribute("id", "clearBtn");
    clearBtn.textContent = "Clear";
  
    // event to clear grid on click
    clearBtn.addEventListener("click", () => {
      mainGrid.childNodes.forEach((child) => {
        child.style.backgroundColor = null;
      });
    });
  }
  clearColor();
  
  // Function to clear grid
  function clearGrid() {
    while (mainGrid.firstChild) {
      mainGrid.removeChild(mainGrid.firstChild);
    }
  }
  
  // Function to change grid size
  function resizeGrid(userInput) {
    for (i = 0; i < userInput * userInput; i++) {
      // redeclare childDiv
      // had difficulty to access the element already created with DOM, so this actually worked
      const childDiv = document.createElement("div");
      mainGrid.appendChild(childDiv);
      childDiv.setAttribute("class", "childDiv");
  
      //calculate size of squares each time grid changes size
      childDiv.style.flexBasis = `calc(100% / ${userInput})`;
  
      //redeclare event listener for changing color when hovering over
      childDiv.addEventListener(
        "mouseover",
        (event) => {
          event.target.style.background = "black";
        }
      );
    }
  }