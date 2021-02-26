// Remember that comments should explain WHY the code does something and NOT
// WHAT the code does

// These DOM element selectors select the input elements 'Grid Height' and
// 'Grid Width'.
const inputWidth = document.getElementById('width');
const inputHeight = document.getElementById('height');

// This function 'drawGrid()' creates a dynamic grid-like table. This function
// executes once the 'Submit' button is clicked by the User. The default action
// of the 'Submit' button is prevented by this function.

// 'drawGrid()' fetches the integer values entered by the User, selects the
// table element and the proceeds to create a table through the use of a Nested
// For Loop.
function drawGrid (evt) {
  removeGrid()
  evt.preventDefault();
  const gridRows = inputWidth.value;
  const gridColumns = inputHeight.value;

  let table = document.getElementById('grid')

  for (r = 1; r <= gridRows; r++) {
    let gr = document.createElement('tr')

    for (c = 1; c <= gridColumns; c++) {
      let gc = document.createElement('td')

      gr.appendChild(gc)
    }
    table.appendChild(gr)
  }
}

// This code is the DOM selection of the 'Submit' button. Then an event is
// added to the 'Submit' button which runs the 'drawGrid()' function once the
// User clicks (this is the event) on the 'submit' button
const drawButton = document.getElementById('submit');
drawButton.addEventListener('click', drawGrid);

// This function 'pageReset()' reloads the webpage, and before doing so, it sets
// the default colour back to 'black' and sets the values for the integers to 1
function pageReset (evt) {
  colour.value = '#000000';
  inputWidth.value = "1";
  inputHeight.value = "1";
  location.reload()
}

// This code is the DOM selection of the 'Reset' button. An event is added to
// the 'Reset' button which runs the 'pageReset()' function if the User decides
// to start over again on a new canvas but with different dimensions.
const reset = document.getElementById('reset');
reset.addEventListener('click', pageReset);

// This is the DOM selection of the colour picker input tool which is on the
// HTML webpage.
const colour = document.getElementById('colourTool');

// This function is designed with the aim of changing the background colour of
// a selected cell with the colour that the User has chosen in the colour input
// tool.
function colourChanger (evt) {
  const pixelBrush = colour.value;
  if (evt.target.nodeName === 'TD') {
    evt.target.style.backgroundColor = pixelBrush;
  }
}

// This code is the DOM selector of the the grid canvas. I am using Event
// Delegation here to implement the 'colourChanger()' function.
const gridTable = document.getElementById('grid')
gridTable.addEventListener('click', colourChanger, true);

// This 'eraser' function acts as a sort of eraser where the User can double
// click on a cell and the cell will be coloured with a white background
function eraser (evt) {
  if (evt.target.nodeName === 'TD') {
    evt.target.style.backgroundColor = 'white';
  }
}

// This code references the same DOM as the 'colourChanger()' function, but to
// implement it properly, 'eraser()' will only execute on a double click.
gridTable.addEventListener('dblclick', eraser, true);

// This function 'clearGrid()' wipes out all the coloured cells while keeping
// the generated grid structure intact. This function selects all the elements
// with the <td> tag, and returns and HTML collection. A For Loop then combs
// through each item in this collection and sets the background colour white.
function clearGrid (evt) {
  const cellBlocks = document.getElementsByTagName('td');
  for (i = 0; i < cellBlocks.length; i++) {
    cellBlocks[i].style.backgroundColor = null;
  }
}

// This function 'removeGrid()' will wipe away an existing grid when the user
// clicks on the "Submit" button again after already creating a grid. This
// function selects the existing DOM through its "ID" and then sets the
// Element's "innerHTML" to basically nothing, achieving the wiped away effect.
function removeGrid (evt) {
  const tableGrid = document.getElementById('grid');
  tableGrid.innerHTML="";
}

// This is the DOM selection of the 'Clear' button on the webpage. An event is
// added where if the User clicks on the 'Clear' button, the grid is wiped
// clean but still remains intact structurally.
const clear = document.getElementById('clear')
clear.addEventListener('click', clearGrid);
