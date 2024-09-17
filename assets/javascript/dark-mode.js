export function darkMode() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const bodyElement = document.body;
    const searchBox = document.querySelector('.search-box');
    const mainContainer = document.querySelector('.main-container');

    // Load saved dark mode state from localStorage
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'enabled') {
        bodyElement.classList.add('dark-mode');
        if (searchBox) searchBox.classList.add('dark-mode');
        if (mainContainer) mainContainer.classList.add('dark-mode');
    }

    // Add event listener to toggle dark mode on image click
    darkModeToggle.addEventListener('click', () => {
        const isDarkMode = bodyElement.classList.toggle('dark-mode');
        
        if (isDarkMode) {
            localStorage.setItem('darkMode', 'enabled');
            if (searchBox) searchBox.classList.add('dark-mode');
            if (mainContainer) mainContainer.classList.add('dark-mode');
        } else {
            localStorage.setItem('darkMode', 'disabled');
            if (searchBox) searchBox.classList.remove('dark-mode');
            if (mainContainer) mainContainer.classList.remove('dark-mode');
        }
    });
}
