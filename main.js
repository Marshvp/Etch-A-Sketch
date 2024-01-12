let container = document.querySelector('.container');

    
    container.style.height = "960px"
    container.style.width = "960px"
    

// This function will be called when the 'bigButton' is clicked
function setupGrid() {
    let playerChoice = playerPrompt(); // Get the user's choice
    if (!playerChoice) return; // Exit if no input is given
    
    // Clear previous grid if it exists
    container.innerHTML = '';

    let row = playerChoice;
    let column = playerChoice;
    let borderWidth = 1;

    let containerWidth = parseInt(container.style.width);
    let containerHeight = parseInt(container.style.height);

    let squareSize = Math.min(containerWidth / column, containerHeight / row);

    for (let i = 0; i < row; i++) {
        let createRow = document.createElement('div');
        createRow.style.display = "flex";
        createRow.style.margin = "0";
        createRow.style.padding = "0";
        createRow.style.width = "100%";
        createRow.style.height = squareSize + "px";
        
        for (let j = 0; j < column; j++) {
            let square = document.createElement('div');
            square.classList.add('paint');
            square.style.border = "black solid 1px";
            square.style.boxSizing = "border-box";
            square.style.width = squareSize + "px";
            square.style.height = squareSize + "px";
            square.style.flex = "0 0 auto";
            createRow.append(square);
        }

        container.append(createRow);
    }

    // Bind 'mouseenter' event to all new '.paint' elements
    bindPainting();
}

// Function to bind 'mouseenter' event to '.paint' elements
function bindPainting() {
    let painting = document.querySelectorAll('.paint');

    painting.forEach(square => {
        square.addEventListener('mouseenter', (event) => {
            event.target.style.background = "black";
        });
    });
}

// Prompt the user for the grid size
function playerPrompt() {
    let answer = parseInt(prompt("What size grid would you like?"));
    if (answer > 100) {
        return alert("Cannot be more then 100")
    } else if (isNaN(answer)) {
        return alert("Please enter a number")
    } else if (answer <= 0) {
            alert("The number must be positive.");
    }
    return answer; // Convert answer to integer
}

// Set up the initial grid
setupGrid();

// Add click event listener to the button
let bigButton = document.getElementById('howmany');
bigButton.addEventListener('click', setupGrid); // Pass the function reference


