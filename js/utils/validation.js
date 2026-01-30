// Input Validation Utilities

export function validateIntegerInput(input) {
    const errorElement = document.getElementById(input.id + 'Error');
    const value = input.value;
    
    // Remove any non-numeric characters
    input.value = value.replace(/[^0-9]/g, '');
    
    // Check if the value is empty or not a positive integer
    if (input.value === '' || parseInt(input.value) <= 0) {
        errorElement.textContent = "Please enter a positive integer";
        input.classList.add('error');
        return false;
    }
    
    // Check if the value is too large
    if (parseInt(input.value) > 1000000000) {
        errorElement.textContent = "Value is too large. Please enter a smaller number";
        input.classList.add('error');
        return false;
    }
    
    errorElement.textContent = "";
    input.classList.remove('error');
    return true;
}

export function validateInput(input) {
    const value = parseFloat(input.value);
    const errorElement = document.getElementById(input.id + 'Error');
    
    if (isNaN(value) || value <= 0) {
        errorElement.textContent = "Please enter a valid positive number";
        input.classList.add('error');
        return false;
    }
    
    errorElement.textContent = "";
    input.classList.remove('error');
    return true;
}
