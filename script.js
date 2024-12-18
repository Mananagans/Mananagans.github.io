// JavaScript for Tech Services Website

// Dark Mode Toggle
function toggleDarkMode() {
    try {
        // Check if dark mode is active and toggle
        if (document.body.className === 'dark-mode') {
            document.body.className = '';
        } else {
            document.body.className = 'dark-mode';
        }

        // Adjust dark mode-specific styles
        const darkModeTextElements = document.querySelectorAll('.dark-mode-text');
        darkModeTextElements.forEach(el => {
            el.style.color = document.body.classList.contains('dark-mode') ? '#ffffff' : '#333333';
        });
    } catch (error) {
        console.error('Error toggling dark mode:', error);
    }
}

// Form Validation
function validateForm(event) {
    try {
        // Access event target elements
        const form = event.target;
        const name = form.elements['name'];
        const email = form.elements['email'];
        const phone = form.elements['phone'];
        const subject = form.elements['subject'];
        const message = form.elements['message'];

        // Perform basic validation
        if (!name.value.trim()) {
            alert('Name is required.');
            name.focus();
            return false;
        }

        if (!email.value.trim().includes('@')) {
            alert('Please enter a valid email address.');
            email.focus();
            return false;
        }

        if (phone.value.trim().length < 10) {
            alert('Please enter a valid phone number.');
            phone.focus();
            return false;
        }

        if (!subject.value.trim()) {
            alert('Subject is required.');
            subject.focus();
            return false;
        }

        if (!message.value.trim()) {
            alert('Message cannot be empty.');
            message.focus();
            return false;
        }

        alert('Form submitted successfully!');
        return true;
    } catch (error) {
        console.error('Error validating form:', error);
        return false;
    }
}
