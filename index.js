const grid = document.querySelector(".grid");

const startButton = document.querySelector("#start");

const score = document.querySelector("#score");

let squareArray = [];
let currentSnake = [2, 1, 0];
let direction = 1;

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
console.log(currentSnake);
currentSnake.forEach((index) => squareArray[index].classList.add("snake"));

function move() {
  // remove last element from currentSnake array
  const tail = currentSnake.pop();
  console.log(tail);
  console.log(currentSnake);
  // remove styling fro element
  squareArray[tail].classList.remove("snake");
  // add square in direction we are heading
  const head = currentSnake.unshift(currentSnake[0] + direction);
  // add styling for element
  squareArray[head].classList.add("snake");
}

move();
