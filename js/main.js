document.addEventListener('DOMContentLoaded', () => {
    // Dynamic Year
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Search Functionality
    const searchInput = document.getElementById('tool-search');
    const toolsGrid = document.getElementById('tools-grid');
    const noResults = document.getElementById('no-results');

    if (searchInput && toolsGrid) {
        const cards = toolsGrid.querySelectorAll('.tool-card');

        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            let visibleCount = 0;

            cards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const keywords = card.getAttribute('data-keywords').toLowerCase();

                if (title.includes(query) || keywords.includes(query)) {
                    card.style.display = 'flex';
                    visibleCount++;
                } else {
                    card.style.display = 'none';
                }
            });

            if (visibleCount === 0) {
                noResults.style.display = 'block';
            } else {
                noResults.style.display = 'none';
            }
        });
    }
});
