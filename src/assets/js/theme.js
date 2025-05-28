// Theme toggle functionality
const themeToggle = () => {
    const toggleBtn = document.createElement('button');
    toggleBtn.classList.add('theme-toggle');
    toggleBtn.innerHTML = `
        <svg class="sun-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3zm0-2V4c0-.55-.45-1-1-1s-1 .45-1 1v3c0 .55.45 1 1 1s1-.45 1-1zm0 14v-3c0-.55-.45-1-1-1s-1 .45-1 1v3c0 .55.45 1 1 1s1-.45 1-1zm6.36-12.64l2.12-2.12c.39-.39.39-1.02 0-1.41s-1.02-.39-1.41 0l-2.12 2.12c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0zM4.93 19.07l2.12-2.12c.39-.39.39-1.02 0-1.41s-1.02-.39-1.41 0l-2.12 2.12c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0zM20 11h3c.55 0 1-.45 1-1s-.45-1-1-1h-3c-.55 0-1 .45-1 1s.45 1 1 1zM4 11h3c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1z"/>
        </svg>
        <svg class="moon-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-3.03 0-5.5-2.47-5.5-5.5 0-1.82.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"/>
        </svg>
    `;
    
    document.body.appendChild(toggleBtn);
    
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    toggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
};

// Scroll reveal functionality
const scrollReveal = () => {
    const reveals = document.querySelectorAll('.reveal');
    
    const revealElement = () => {
        reveals.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };
    
    window.addEventListener('scroll', revealElement);
    revealElement();
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    themeToggle();
    scrollReveal();
}); 