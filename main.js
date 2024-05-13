import { hsl } from 'd3';
import namer from 'color-namer';

export function generateColorScheme(baseColor) {
  // Convert the base color to HSL
  const hslColor = hsl(baseColor);

  // Generate an array of 5 colors with the same saturation and lightness but different hues
  const colors = Array.from({ length: 5 }, (_, i) => {
    const color = hslColor.brighter(i * 0.2); // Adjust brightness for each color
    color.h = (hslColor.h + i * 72) % 360; // Adjust hue for each color
    return color.toString();
  });

  return colors;
}

const colors = ['blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'cyan', 'magenta', 'lime', 'teal'];
const randomColor = colors[Math.floor(Math.random() * colors.length)];

const initScheme = generateColorScheme(randomColor);
const app = document.getElementById('app');
const clearApp = () => app.innerHTML = ''; 
const init = (colorScheme) => {
  app.innerHTML = `
  <h1>Color Scheme</h1>
  <p>Base color: <span id="color"></span></p>
  <div style="display: flex; justify-content: space-around;">
    ${colorScheme.map(color => `<div style="background-color: ${color}; width: 100px; height: 100px;"></div>`).join('')}
  </div>
`;
return colorScheme;
}
const colorScheme = init(initScheme);

function rgbToName(rgb) {
  // Convert the RGB color to a hex color
  const hex = rgbToHex(rgb);

  // Get the names of the color
  const names = namer(hex);

  // Return the first name from the 'ntc' list
  return names.ntc[0].name;
}

function rgbToHex(rgb) {
  return '#' + rgb.map(x => {
    const hex = x.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }).join('');
}

function rgbStringToArray(rgbString) {
  // Remove the "rgb(" at the start and the ")" at the end, and then split the string into an array
  const rgbValues = rgbString.slice(4, -1).split(',');

  // Convert each element of the array to a number
  const rgbArray = rgbValues.map(Number);

  return rgbArray;
}

const colorDiv = document.getElementById('color');
colorDiv.style = `
font-weight: bold;
color: ${colorScheme[0]};
cursor: pointer;
`;

colorDiv.textContent = rgbToName(rgbStringToArray(colorScheme[0]));

colorDiv.onclick = () => {
  clearApp();
  init(generateColorScheme(randomColor));
}