// Counter element
const countElement = document.getElementById('count');
let count = 0;

// Increment button
const incrementBtn = document.getElementById('incrementBtn');
incrementBtn.addEventListener('click', () => {
  count++;
  countElement.textContent = count;
});

// Decrement button
const decrementBtn = document.getElementById('decrementBtn');
decrementBtn.addEventListener('click', () => {
  if (count > 0) {
    count--;
    countElement.textContent = count;
  }
});

// Reset button
const resetBtn = document.getElementById('resetBtn');
resetBtn.addEventListener('click', () => {
  count = 0;
  countElement.textContent = count;
});
