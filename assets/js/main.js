document.addEventListener('DOMContentLoaded', () => {
    // Theme toggle functionality
    const themeToggle = document.createElement('button');
    themeToggle.classList.add('theme-toggle');
    themeToggle.setAttribute('aria-label', 'Toggle theme');
    themeToggle.innerHTML = '<i class="ti-light-bulb"></i>';

    document.body.appendChild(themeToggle);

    const currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        themeToggle.innerHTML = '<i class="ti-shine"></i>';
    } else {
        themeToggle.innerHTML = '<i class="ti-light-bulb"></i>';
    }

    themeToggle.addEventListener('click', () => {
        let newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);

        if (newTheme === 'dark') {
            themeToggle.innerHTML = '<i class="ti-shine"></i>';
        } else {
            themeToggle.innerHTML = '<i class="ti-light-bulb"></i>';
        }
    });

    // Reveal animations
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));

    // Navbar scroll behavior
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id], div[id="about"], header[role="banner"]');
    const aboutSection = document.querySelector('#about');

    function updateNavbar() {
        if (!aboutSection) return;
        
        const aboutTop = aboutSection.offsetTop;
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        
        // Si hemos scrolleado más allá del inicio de About
        if (scrollPosition > aboutTop) {
            navbar.classList.add('show-navbar');
        } else {
            navbar.classList.remove('show-navbar');
        }
    }

    function setActiveLink() {
        let current = '';
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id') || 'home';

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = sectionId;
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    // Event listeners for scroll
    window.addEventListener('scroll', () => {
        setActiveLink();
        updateNavbar();
    });

    // Initialize states
    setActiveLink();
    updateNavbar();

    // Update on window resize
    window.addEventListener('resize', updateNavbar);
}); 