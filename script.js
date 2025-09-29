document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth Scrolling for anchors (if you decide to use them, e.g., in a "Back to Top" button)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Check if the link is NOT one of the social links/view links (to allow those to function normally)
            if (!this.classList.contains('social-link') && !this.classList.contains('view-link')) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Interactive Role Highlight Hover Effect (Optional, but adds flair)
    // This is handled mostly by CSS, but JS could be used for more complex effects.
    const roleHighlights = document.querySelectorAll('.role-highlight');
    roleHighlights.forEach(role => {
        role.addEventListener('mouseover', () => {
            // Add a class that triggers a subtle animation if needed, e.g., a glow
            role.classList.add('is-active');
        });
        role.addEventListener('mouseout', () => {
            role.classList.remove('is-active');
        });
    });

    // 3. Simple Card Tilt on Mouse Movement (Advanced Interaction)
    // This adds a very unique, high-end feel by subtly tilting the project cards based on cursor position.
    const projectCards = document.querySelectorAll('.interactive-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within the element
            const y = e.clientY - rect.top;  // y position within the element
            
            // Calculate tilt based on center
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Max tilt angle
            const maxTilt = 5;
            
            // Calculate rotation values (inverted for natural 3D look)
            const rotateX = ((y - centerY) / centerY) * maxTilt * -1;
            const rotateY = ((x - centerX) / centerX) * maxTilt;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            // Reset the transform smoothly
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
        });
    });
});