document.addEventListener('DOMContentLoaded', () => {
    // Dynamic Year for Footer
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Mobile Menu Toggle (To be implemented if needed)
    console.log('Tulz.net loaded successfully');
});
