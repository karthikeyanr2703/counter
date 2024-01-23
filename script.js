// Get references to HTML elements by their IDs
let num = document.getElementById("num");  // Element to display the number
let plus = document.getElementById("plus"); // Button to increment the number
let minus = document.getElementById("minus"); // Button to decrement the number

// Initialize a variable to hold the current number
let a = 0;

// Set the initial display value of the number
num.innerHTML = "0" + a;

// Add a click event listener to the "plus" button
plus.addEventListener("click", function () {
  // Check if the current number is already at the maximum value (10)
  if (a == 10) {
    num.innerHTML = a; // If yes, keep the display unchanged
  } else {
    // Increment the current number
    a = a + 1;
    
    // Check if the number has reached 10 after incrementing
    if (a == 10) {
      num.innerHTML = a; // If yes, update the display without leading zero
    } else {
      num.innerHTML = "0" + a; // If no, update the display with leading zero
    }
  }
});

// Add a click event listener to the "minus" button
minus.addEventListener("click", function () {
  // Check if the current number is already at the minimum value (0)
  if (a == 0) {
    num.innerHTML = "0" + a; // If yes, keep the display unchanged
  } else {
    // Decrement the current number
    a = a - 1;
    
    // Update the display with the decremented number and leading zero
    num.innerHTML = "0" + a;
  }
});
