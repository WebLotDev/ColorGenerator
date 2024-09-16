function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function generatePalette(numColors) {
  const palette = [];
  for (let i = 0; i < numColors; i++) {
    palette.push(getRandomColor());
  }
  return palette;
}

function displayPalette(palette) {
  const container = document.getElementById('palette-container');
  container.innerHTML = ''; // Clear previous palette
  palette.forEach(color => {
    const swatch = document.createElement('div');
    swatch.className = 'color-swatch';
    swatch.style.backgroundColor = color;

    const colorCode = document.createElement('div');
    colorCode.className = 'color-code';
    colorCode.textContent = color;

    swatch.appendChild(colorCode);
    container.appendChild(swatch);
  });
}

document.getElementById('generate-btn').addEventListener('click', () => {
  const palette = generatePalette(5); // Adjust number of colors here
  displayPalette(palette);
});
