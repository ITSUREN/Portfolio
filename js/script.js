document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.content');
    const authorDetailsElement = document.getElementById('author-details');
    const contactDetailsElement = document.getElementById('contact-details');
    const aboutDetailsElement = document.getElementById('about-details');
    const workDetailsElement = document.getElementById('work-details');

    let currentIndex = 0; // Index of the currently visible content

    // Load details from JSON
    const loadDetails = () => {
        fetch('/data/details.json')
            .then(response => response.json())
            .then(data => {
                authorDetailsElement.innerHTML = `
                    Name: ${data.author.name}<br>
                    ORCID: ${data.author.orcid}
                `;
                contactDetailsElement.innerHTML = `
                    Email: ${data.contact.email}
                `;
                aboutDetailsElement.innerHTML = `
                    ${data.about.details}
                `;
                workDetailsElement.innerHTML = `
                    ${data.work.details}
                `;
            })
            .catch(error => console.error('Error loading details:', error));
    };

    // Switch content with sliding effect
    const switchContent = (newIndex) => {
        if (newIndex === currentIndex) return; // No need to switch if already active

        const currentContent = contents[currentIndex];
        const nextContent = contents[newIndex];

        // Determine the direction of the slide
        const isForward = newIndex > currentIndex;

        // Prepare next content for sliding
        nextContent.style.transform = isForward ? 'translateX(100%)' : 'translateX(-100%)';
        nextContent.style.opacity = '1'; // Make next content visible
        nextContent.style.zIndex = '2';

        // Slide out the current content
        currentContent.style.transform = isForward ? 'translateX(-100%)' : 'translateX(100%)';
        currentContent.style.opacity = '0';
        currentContent.style.zIndex = '1';

        // Slide in the next content
        nextContent.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
        currentContent.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
        nextContent.style.transform = 'translateX(0)';

        // Update the current index after the transition
        setTimeout(() => {
            currentContent.style.zIndex = '';
            nextContent.style.zIndex = '';
            currentIndex = newIndex;
        }, 300); // Match the CSS transition duration
    };

    // Add event listeners to tabs
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            if (index !== currentIndex) {
                switchContent(index);

                // Update tab active state
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
            }
        });
    });

    // Initialize the first tab and content as active
    tabs[0].classList.add('active');
    contents[0].style.transform = 'translateX(0)';
    contents[0].style.opacity = '1';

    // Load details from JSON
    loadDetails();
});
