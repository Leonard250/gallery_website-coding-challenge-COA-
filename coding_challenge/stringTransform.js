function transformString(input) {
    const length = input.length;
    
    // Helper function to reverse a string
    function reverseString(str) {
        return str.split('').reverse().join('');
    }
    
    // Helper function to convert each character to its ASCII code
    function toAsciiCodes(str) {
        return str.split('').map(char => char.charCodeAt(0)).join(' ');
    }
    
    if (length % 15 === 0) {
        // Both rules apply, reverse and then to ASCII codes
        const reversed = reverseString(input);
        return toAsciiCodes(reversed);
    } else if (length % 3 === 0) {
        // Reverse the string
        return reverseString(input);
    } else if (length % 5 === 0) {
        // Convert to ASCII codes
        return toAsciiCodes(input);
    } else {
        // No transformation needed
        return input;
    }
}

// Example: calling the function
console.log(transformString("Hamburger"));  
console.log(transformString("Pizza"));      
console.log(transformString("Chocolate Chip Cookie")); 
