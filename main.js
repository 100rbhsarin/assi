function color(z) {
    var a = getComputedStyle(z);
    var b = a.backgroundColor;
    document.getElementsByClassName("big-hexagon")[0].style.backgroundColor=b;
    }



    

// create color buttons
const colorButtonContainer = document.getElementById('color-buttons');
colorOptions.forEach((colorOption) => {
  const colorButton = document.createElement('button');
  colorButton.style.backgroundColor = colorOption;
  colorButton.addEventListener('click', () => {
    selectedColor = colorOption; // set selected color
    updateSelectedColor(); // update display of selected color
  });
  colorButtonContainer.appendChild(colorButton);
});

// function to update display of selected color
function updateSelectedColor() {
  const colorButtons = document.querySelectorAll('#color-buttons button');
  colorButtons.forEach((colorButton) => {
    if (colorButton.style.backgroundColor === selectedColor) {
      colorButton.classList.add('selected');
    } else {
      colorButton.classList.remove('selected');
    }
  });
}
