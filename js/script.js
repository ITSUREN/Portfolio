document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.content');
    const contentContainer = document.querySelector('.content-container');
    const authorDetailsElement = document.getElementById('author-details');
    const contactDetailsElement = document.getElementById('contact-details');
    const aboutDetailsElement = document.getElementById('about-details');
    const workDetailsElement = document.getElementById('work-details');

    let currentIndex = 0;

    const clearPreviousContent = () => {
        contents.forEach(content => content.classList.remove('previous'));
    };

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

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            if (index !== currentIndex) {
                const currentContent = contents[currentIndex];
                const nextContent = contents[index];

                // Clear previous class from all content elements
                clearPreviousContent();

                // Slide out the current content to the left
                currentContent.classList.remove('active');
                currentContent.classList.add('previous');

                // Slide in the next content from the right
                nextContent.classList.remove('previous');
                nextContent.classList.add('active');

                // Update the current index
                currentIndex = index;

                // Update tab active states
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
            }
        });
    });

    // Initialize the first tab and content as active
    tabs[0].classList.add('active');
    contents[0].classList.add('active');

    // Load details from JSON
    loadDetails();
});
