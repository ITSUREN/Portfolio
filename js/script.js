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

    // Immediately set initial positions without transitions
    contents.forEach((content, i) => {
        content.style.transition = 'none';
        if (i === currentIndex) {
            content.style.transform = 'translateX(0)';
            content.style.opacity = '1';
        } else {
            content.style.transform = 'translateX(100%)';
            content.style.opacity = '0';
        }
    });

    // Enable transitions after first paint
    requestAnimationFrame(() => {
        contents.forEach((content) => {
            content.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
        });
    });

    // Switch content with sliding effect
    const switchContent = (newIndex) => {
        if (newIndex === currentIndex) return;

        const isForward = newIndex > currentIndex;

        contents.forEach((content, i) => {
            if (i === newIndex) {
                content.style.transform = 'translateX(0)';
                content.style.opacity = '1';
                content.style.zIndex = '2';
            } else if (i === currentIndex) {
                content.style.transform = isForward ? 'translateX(-100%)' : 'translateX(100%)';
                content.style.opacity = '0';
                content.style.zIndex = '1';
            } else {
                content.style.transform = i > newIndex ? 'translateX(100%)' : 'translateX(-100%)';
                content.style.opacity = '0';
                content.style.zIndex = '0';
            }
        });
        currentIndex = newIndex;
    };

    // Add event listeners to tabs
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            if (index !== currentIndex) {
                switchContent(index);
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
            }
        });
    });

    // Initialize the first tab and content as active
    tabs[0].classList.add('active');

    // Load details from JSON
    loadDetails();
});
