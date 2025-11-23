document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.querySelector('.newsletter form');
    const messageDiv = document.querySelector('.newsletter .message');
    
    newsletterForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from actually submitting
        
        const emailInput = document.getElementById('email');
        const email = emailInput.value.trim();
        
        // Reset styles first
        messageDiv.style.backgroundColor = '';
        messageDiv.style.color = '#ffffff';
        messageDiv.style.border = '';
        
        if (email === '') {
            // If no email entered - error styling
            messageDiv.textContent = 'Please enter a valid email address.';
            messageDiv.style.backgroundColor = '#ff6b6b'; // Red background for error
            messageDiv.style.color = '#ffffff';
            messageDiv.style.border = '2px solid #ff4757';
        } else {
            // If email is entered - success styling
            messageDiv.innerHTML = `Thank you! Your email address <strong>${email}</strong> has been added to our mailing list!`;
            messageDiv.style.backgroundColor = '#48BB78'; // Green background for success
            messageDiv.style.color = '#ffffff';
            messageDiv.style.border = '2px solid #2d8c54';
        }
        
        // Common styling for both messages
        messageDiv.style.padding = '15px';
        messageDiv.style.marginTop = '15px';
        messageDiv.style.borderRadius = '5px';
        messageDiv.style.textAlign = 'center';
        messageDiv.style.fontWeight = 'bold';
    });
});