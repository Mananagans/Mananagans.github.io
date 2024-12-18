// JavaScript for Tech Services Website

// Dark Mode Toggle
const toggleDarkMode = () => {
    const body = document.body;
    body.classList.toggle('dark-mode');
	// Adjust dark mode-specific styles
	const darkModeTextElements = document.querySelectorAll('.dark-mode-text');
            darkModeTextElements.forEach(el => {
                el.style.color = document.body.classList.contains('dark-mode') ? '#ffffff' : '#333333';
            });
    // Save preference in localStorage
    try {
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    } catch (error) {
        console.error('Error saving dark mode preference:', error);
    }
};

// Apply saved dark mode preference on page load
try {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'enabled') {
        document.body.classList.add('dark-mode');
    }
} catch (error) {
    console.error('Error loading dark mode preference:', error);
}

// Add event listener to the toggle button (if available in HTML)
const darkModeButton = document.getElementById('dark-mode-toggle');
if (darkModeButton) {
    darkModeButton.addEventListener('click', toggleDarkMode);
}

// Form Validation
const validateForm = () => {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');

    try {
        if (!name.value.trim()) {
            alert('Name is required.');
            name.focus();
            return false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.trim())) {
            alert('Please enter a valid email address.');
            email.focus();
            return false;
        }

        const phonePattern = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
        if (!phonePattern.test(phone.value.trim())) {
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

        return true;
    } catch (error) {
        console.error('Error validating form:', error);
        alert('An error occurred during form validation. Please try again.');
        return false;
    }
};

// Simulate form submission
const submitForm = (formData) => {
    try {
        console.log('Form data submitted:', formData);
        alert('Form data has been sent to the server!');
    } catch (error) {
        console.error('Error submitting form:', error);
        alert('An error occurred during form submission. Please try again.');
    }
};

// Attach validation and submission to the form
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        if (validateForm()) {
            try {
                const formData = {
                    name: document.getElementById('name').value.trim(),
                    email: document.getElementById('email').value.trim(),
                    phone: document.getElementById('phone').value.trim(),
                    subject: document.getElementById('subject').value.trim(),
                    message: document.getElementById('message').value.trim()
                };
                submitForm(formData);
            } catch (error) {
                console.error('Error processing form data:', error);
                alert('An error occurred. Please try again.');
            }
        }
    });
}

// Highlight Active Navigation Link
const setActiveNav = () => {
    try {
        const navLinks = document.querySelectorAll('nav a');
        const currentURL = window.location.href;

        navLinks.forEach(link => {
            if (currentURL.includes(link.getAttribute('href'))) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    } catch (error) {
        console.error('Error setting active navigation link:', error);
    }
};

// Call the function to set the active navigation link
setActiveNav();
