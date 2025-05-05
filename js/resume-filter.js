// Get all education and experience items
document.addEventListener('DOMContentLoaded', function() {
    const educationItems = document.querySelectorAll('.education-item');
    const experienceItems = document.querySelectorAll('.experience-item');
    
    // Create filter button container
    const filterContainer = document.createElement('div');
    filterContainer.className = 'resume-filter';
    filterContainer.innerHTML = `
        <button class="filter-btn active" data-filter="all">All</button>
        <button class="filter-btn" data-filter="education">Education</button>
        <button class="filter-btn" data-filter="experience">Experience</button>
    `;
    
    // Insert filter buttons below resume title
    const resumeTitle = document.querySelector('.resume h2');
    resumeTitle.parentNode.insertBefore(filterContainer, resumeTitle.nextSibling);
    
    // Add click event listeners to filter buttons
    const filterButtons = document.querySelectorAll('.resume-filter .filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            // Show/hide items based on filter
            if (filter === 'all') {
                educationItems.forEach(item => item.style.display = 'block');
                experienceItems.forEach(item => item.style.display = 'block');
            } else if (filter === 'education') {
                educationItems.forEach(item => item.style.display = 'block');
                experienceItems.forEach(item => item.style.display = 'none');
            } else if (filter === 'experience') {
                educationItems.forEach(item => item.style.display = 'none');
                experienceItems.forEach(item => item.style.display = 'block');
            }
        });
    });
}); 