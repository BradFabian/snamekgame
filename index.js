const grid = document.querySelector(".grid");

const startButton = document.querySelector("#start");

const score = document.querySelector("#score");

let squareArray = [];

function createGrid() {
  // create 100 of these elements
  for (let i = 0; i < 100; i++) {
    // create elements
    const square = document.createElement("div");
    // add styling to these elements
    square.classList.add("square");
    //put the element into our grid
    grid.appendChild(square);

    // create array of squares
    squareArray.push(square);
  }
  console.log(squareArray);
}

createGrid();
