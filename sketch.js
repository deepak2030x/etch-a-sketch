/* 
steps:
1. when user clicks pad button, app should ask user a data(grid value) through pop up.
2. once user enters value, (limit to 10) take that value and store it in "gridData". 
3. create a function createGrid(value), which takes gridData as argument and creates grid and 
append to the container div.
4. add hover effect on each box. usually add to the parent element (delegates the task) and on each 
hover change the background color. 
*/

// Step 1: grab the pad button.
const pad = document.querySelector(".pad");

// Step 2: add 'click' event listener to the pad button.
pad.addEventListener("click", () => {
  const gridData = +prompt("Enter a grid value (below or equal to 10): ");
  if (gridData == null) {
    return;
  }
  while (gridData > 10) {
    gridData = +prompt("Please enter a value below or equal to 10: ");
  }
  // call createGrid() function;
  createGrid(gridData);
});

// Step 3: create a function to draw a val x val grid.
function createGrid(value) {
  /*
        steps:
        1. Grab the container div (set the width to value * 100) to append grid boxes.
        2. create a value*value boxes and set each box class as ".box" and append
        each box to container.
    */

  //  step 1:
  const container = document.querySelector(".container");
  container.innerHTML = "";
  container.style.width = `${value * 100}px`;

  //  step 2:
  let totalBoxes = value * value;
  for (let i = 0; i < totalBoxes; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    container.append(box);
  }
}

// Step 4: add mouse hover functionaliy.
const container = document.querySelector(".container");
container.addEventListener("pointerover", (event) => {
  event.target.style.backgroundColor = `rgb(${Math.floor(
    Math.random() * 255
  )} ${Math.floor(Math.random() * 255)} ${Math.floor(Math.random() * 255)})`;
});
