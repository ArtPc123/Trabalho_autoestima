        function toggleLike(btn) {
            const icon = btn.querySelector('.action-icon');
            const count = btn.querySelector('.action-count');
            
            if (btn.classList.contains('liked')) {
                btn.classList.remove('liked');
                icon.innerHTML = '<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>';
                const currentCount = parseInt(count.textContent.replace('k', '')) * 1000;
                const newCount = currentCount - 1;
                count.textContent = newCount >= 1000 ? (newCount / 1000).toFixed(1) + 'k' : newCount;
            } else {
                btn.classList.add('liked');
                icon.innerHTML = '<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#ff3b5c"/>';
                const currentCount = parseFloat(count.textContent.replace('k', '')) * 1000;
                const newCount = currentCount + 1;
                count.textContent = (newCount / 1000).toFixed(1) + 'k';
            }
        }

        // Smooth scroll snap behavior
        const container = document.getElementById('feed');
        let isScrolling;

        container.addEventListener('scroll', () => {
            window.clearTimeout(isScrolling);
            isScrolling = setTimeout(() => {
                const scrollTop = container.scrollTop;
                const postHeight = window.innerHeight;
                const currentPost = Math.round(scrollTop / postHeight);
                container.scrollTo({
                    top: currentPost * postHeight,
                    behavior: 'smooth'
                });
            }, 150);
        });