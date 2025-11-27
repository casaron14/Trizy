// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Scroll indicator visibility
const scrollIndicator = document.querySelector('.scroll-indicator');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  // Hide scroll indicator when scrolling down
  if (scrollTop > 100) {
    scrollIndicator.style.opacity = '0';
    scrollIndicator.style.visibility = 'hidden';
  } else {
    scrollIndicator.style.opacity = '1';
    scrollIndicator.style.visibility = 'visible';
  }
  
  lastScrollTop = scrollTop;
});

// Smooth scroll behavior for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
  });
}

// Navbar background on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) {
    navbar.style.background = 'rgba(15, 23, 42, 0.95)';
  } else {
    navbar.style.background = 'rgba(15, 23, 42, 0.9)';
  }
});

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

// Add hover effect to buttons
document.querySelectorAll('.contact-btn, .cta-button').forEach(btn => {
  btn.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-3px)';
  });
  
  btn.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
  });
});

// Animate stats on scroll
const statCards = document.querySelectorAll('.stat-card');
let statsAnimated = false;

const animateStats = () => {
  if (statsAnimated) return;
  
  statCards.forEach((card, index) => {
    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'scale(1)';
    }, index * 100);
  });
  
  statsAnimated = true;
};

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateStats();
    }
  });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.stats-section');
if (statsSection) {
  statsObserver.observe(statsSection);
}

// Smooth scroll to top on page load
window.addEventListener('load', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
