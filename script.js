document.addEventListener('DOMContentLoaded', function () {
    const stars = document.querySelectorAll('.star');
    const averageRatingText = document.getElementById('average-rating');
    const thankYouMessage = document.getElementById('thank-you-message');
    let totalRating = 0;
    let ratingCount = 0;

    // Event listener for star ratings
    stars.forEach(star => {
        star.addEventListener('click', function () {
            const ratingValue = this.getAttribute('data-value');
            totalRating += parseInt(ratingValue);
            ratingCount += 1;

            const averageRating = (totalRating / ratingCount) * 20; // Percentage calculation
            averageRatingText.textContent = `Average Rating: ${averageRating.toFixed(2)}%`;
            thankYouMessage.style.display = 'block'; // Show thank you message

            // Highlight stars based on the current rating
            highlightStars(ratingValue);
        });
    });

    function highlightStars(rating) {
        stars.forEach(star => {
            star.style.color = star.getAttribute('data-value') <= rating ? '#f1c40f' : '#fff';
        });
    }

    // Modal functionality
    function showModal(text) {
        document.getElementById('modal-text').innerText = text;
        document.getElementById('modal').style.display = 'block';
    }
    function closeModal() {
        document.getElementById('modal').style.display = 'none';
    }
    
    // Close modal when clicking outside of the content
    window.onclick = function(event) {
        const modal = document.getElementById('modal');
        if (event.target === modal) {
            closeModal();
        }
    };
    
    // Arrow navigation functionality
    const nextArrow = document.getElementById('next-arrow');
    const galleryContainer = document.querySelector('.gallery-container');

    nextArrow.addEventListener('click', () => {
        galleryContainer.scrollBy({
            top: 0,
            left: 200, // Adjust this value based on the image width
            behavior: 'smooth'
        });
    });
});
