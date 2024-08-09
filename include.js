// MAKING NAVBAR COMPONENT
function includeHTML() {
    const elements = document.querySelectorAll('[data-include]');
    elements.forEach(el => {
        const file = el.getAttribute('data-include');
        fetch(file)
            .then(response => {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.text();
            })
            .then(data => {
                el.innerHTML = data;
                el.removeAttribute('data-include');
                includeHTML(); // Recursive call to include nested includes
                addActiveClass(); // Add active class after HTML content is included
                enableTooltips(); // Enable tooltips after HTML content is included
                setupNavbarScroll(); // Set up scroll event listener after content is included
            })
            .catch(error => {
                console.error('Error including HTML:', error);
                el.innerHTML = 'Content not found';
            });
    });
}


// ADD ACTIVE CLASS TO CURRENT PAGE
function addActiveClass() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPath = window.location.pathname.split('/').pop();

    navLinks.forEach(link => {
        const href = link.getAttribute('href').split('/').pop();
        if (href === currentPath) {
            link.classList.add('active');
        }
    });
}

// ENABLE TOOLTIPS
function enableTooltips() {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
}

// SETUP NAVBAR SCROLL EVENT LISTENER
function setupNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY >400) {
                navbar.style.backgroundColor="rgba(0,0,0,0.7)";
            } else {
                navbar.style.backgroundColor="rgba(0,0,0,0.6)";
            }
        });
    } else {
        console.error('Navbar element not found');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    includeHTML();
    addActiveClass();
    enableTooltips();
});
