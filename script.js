// Menu mobile
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mainNav = document.getElementById('mainNav');
const navLinks = mainNav.querySelectorAll('a');

// Toggle menu
mobileMenuBtn.addEventListener('click', () => {
    mainNav.querySelector('ul').classList.toggle('show');
    mobileMenuBtn.classList.toggle('active');
});

// Fermer le menu quand un lien est cliqué
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mainNav.querySelector('ul').classList.remove('show');
        mobileMenuBtn.classList.remove('active');
    });
});

// Fermer le menu quand on clique ailleurs
document.addEventListener('click', (e) => {
    if (!mainNav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        mainNav.querySelector('ul').classList.remove('show');
        mobileMenuBtn.classList.remove('active');
    }
});

// Modal pour les événements
const modal = document.getElementById('eventModal');
const closeModal = document.querySelector('.close-modal');
const eventCards = document.querySelectorAll('.event-card');

eventCards.forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('.event-title').textContent;
        const date = card.querySelector('.event-date .day').textContent + ' ' + 
                     card.querySelector('.event-date .month').textContent;
        const content = card.querySelector('.event-content').innerHTML;
        
        document.getElementById('modalTitle').textContent = title;
        document.getElementById('modalDate').textContent = date;
        document.getElementById('modalBody').innerHTML = content;
        modal.style.display = 'block';
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Formulaire de contact
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Validation simple
        if (name && email && subject && message) {
            alert('Merci pour votre message! Nous vous recontacterons bientôt.');
            contactForm.reset();
        } else {
            alert('Veuillez remplir tous les champs.');
        }
    });
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active nav link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});
