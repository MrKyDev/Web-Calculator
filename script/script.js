function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = '';
}

function calculateResult() {
    const display = document.getElementById("display");
    
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
        setTimeout(clearDisplay, 1500); // Clear the display after showing error for a moment
    }
}

// Add keyboard support
document.addEventListener('keydown', function(event) {
    const key = event.key;

    // Check if the key is a number or an operator
    if ((key >= '0' && key <= '9') || ['+', '-', '*', '/'].includes(key)) {
        appendToDisplay(key);
    }

    // Check for Enter key to calculate result
    if (key === 'Enter') {
        calculateResult();
    }

    // Check for Backspace key to clear the last character
    if (key === 'Backspace') {
        const display = document.getElementById("display");
        display.value = display.value.slice(0, -1); // Remove last character
    }

    // Check for Escape key to clear the display
    if (key === 'Escape') {
        clearDisplay();
    }
});
