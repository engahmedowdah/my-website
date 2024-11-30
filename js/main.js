// Sample projects data
const projects = [
    {
        title: 'مشروع 1',
        description: 'وصف المشروع الأول',
        image: 'https://source.unsplash.com/random/800x600/?website',
        link: '#'
    },
    {
        title: 'مشروع 2',
        description: 'وصف المشروع الثاني',
        image: 'https://source.unsplash.com/random/800x600/?coding',
        link: '#'
    },
    {
        title: 'مشروع 3',
        description: 'وصف المشروع الثالث',
        image: 'https://source.unsplash.com/random/800x600/?development',
        link: '#'
    }
];

// Load projects
function loadProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.link}" class="cta-button">عرض المشروع</a>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// Form submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your form submission logic here
        alert('تم إرسال رسالتك بنجاح!');
        contactForm.reset();
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadProjects();
});
