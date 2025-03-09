// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animate sections on scroll
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 50%",
            scrub: 1
        }
    });
});

// Animate stat cards
const statCards = document.querySelectorAll('.stat-card');
statCards.forEach((card, index) => {
    gsap.from(card, {
        opacity: 0,
        x: index % 2 === 0 ? -50 : 50,
        duration: 1,
        scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 60%",
            scrub: 1
        }
    });
});

// Animate timeline items
const timelineItems = document.querySelectorAll('.timeline-item');
timelineItems.forEach((item, index) => {
    gsap.from(item, {
        opacity: 0,
        x: index % 2 === 0 ? -50 : 50,
        duration: 1,
        scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "top 60%",
            scrub: 1
        }
    });
});

// Animate action cards
const actionCards = document.querySelectorAll('.action-card');
actionCards.forEach((card, index) => {
    gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: index * 0.2,
        scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 60%",
            scrub: 1
        }
    });
});

// Interactive hotspots
const hotspots = document.querySelectorAll('.hotspot');
hotspots.forEach(hotspot => {
    const content = hotspot.querySelector('.hotspot-content');
    
    hotspot.addEventListener('mouseenter', () => {
        gsap.to(content, {
            opacity: 1,
            y: 0,
            duration: 0.3
        });
    });
    
    hotspot.addEventListener('mouseleave', () => {
        gsap.to(content, {
            opacity: 0,
            y: -10,
            duration: 0.3
        });
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
}); 