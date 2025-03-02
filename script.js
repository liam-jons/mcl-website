// Grabbing elements
const darkModeToggle = document.getElementById('darkModeToggle');
const highContrastToggle = document.getElementById('highContrastToggle');
const fontSizeOptions = document.querySelectorAll('.font-size-option');
const fontStyleOptions = document.querySelectorAll('.font-style-option');
const yearSpan = document.getElementById('year');

// Set current year in footer
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Toggle Dark Mode
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  // If dark mode is on, ensure high contrast is off to avoid conflicts
  if (document.body.classList.contains('dark-mode')) {
    document.body.classList.remove('high-contrast');
  }
});

// Toggle High Contrast
highContrastToggle.addEventListener('click', () => {
  document.body.classList.toggle('high-contrast');
  // If high contrast is on, ensure dark mode is off to avoid conflicts
  if (document.body.classList.contains('high-contrast')) {
    document.body.classList.remove('dark-mode');
  }
});

// Font Size Options
fontSizeOptions.forEach((btn) => {
  btn.addEventListener('click', () => {
    const size = btn.getAttribute('data-size');
    // Remove existing font-size classes
    document.body.classList.remove('font-small', 'font-medium', 'font-large');
    // Add the selected size
    document.body.classList.add(`font-${size}`);
  });
});

// Font Style Options
fontStyleOptions.forEach((btn) => {
  btn.addEventListener('click', () => {
    const style = btn.getAttribute('data-style');
    // Remove existing font-style classes
    document.body.classList.remove('font-style-1', 'font-style-2', 'font-style-3');
    // Add the selected style
    document.body.classList.add(`font-${style}`);
  });
});
