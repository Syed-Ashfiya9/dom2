// Wait for DOM content to be ready
document.addEventListener('DOMContentLoaded', () => {
  // Element references
  const colorInput = document.getElementById('color-input');
  const textInput = document.getElementById('text-input');
  const changeBgBtn = document.getElementById('change-bg-btn');
  const updateTextBtn = document.getElementById('update-text-btn');
  const displayBox = document.getElementById('displayBox');

  /**
   * Check whether a string is a valid CSS color.
   * Approach: set the style.color on a temporary element and see if the browser kept it.
   * This works for named colors, hex, rgb(), rgba(), hsl(), etc.
   * Returns true if valid, false otherwise.
   */
  function isValidColor(colorStr) {
    // empty string is invalid
    if (!colorStr || typeof colorStr !== 'string') return false;
    const s = new Option().style; // lightweight element
    s.color = '';                 // reset
    s.color = colorStr;
    // Browser writes normalized value into s.color when valid, keeps '' when invalid.
    return s.color !== '';
  }

  // Change background handler
  changeBgBtn.addEventListener('click', () => {
    const color = colorInput.value.trim();

    if (!color) {
      alert('Please enter a color name or value!');
      return;
    }

    if (!isValidColor(color)) {
      alert('Invalid color name!');
      return;
    }

    // If valid, apply as background color
    displayBox.style.backgroundColor = color;
  });

  // Update text handler
  updateTextBtn.addEventListener('click', () => {
    const newText = textInput.value;

    if (!newText || newText.trim() === '') {
      alert('Please enter some text!');
      return;
    }

    displayBox.textContent = newText;
  });

  // Optional: allow pressing Enter in text input to update text quickly
  textInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      updateTextBtn.click();
    }
  });

  // Optional: allow pressing Enter in color input to change background quickly
  colorInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      changeBgBtn.click();
    }
  });
});