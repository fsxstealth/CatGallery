document.addEventListener('DOMContentLoaded', function () {
    const stars = document.querySelectorAll('.star');
    const averageRatingText = document.getElementById('average-rating');
    let totalRating = 0;
    let ratingCount = 0;

    stars.forEach((star) => {
        star.addEventListener('click', function () {
            const ratingValue = parseInt(this.getAttribute('data-value'));
            totalRating += ratingValue;
            ratingCount++;

            const averageRating = (totalRating / ratingCount) * 20; // Percentage calculation
            averageRatingText.textContent = `Average Rating: ${averageRating.toFixed(2)}%`;

            // Highlight stars based on the current rating
            highlightStars(ratingValue);
        });
    });

    function highlightStars(rating) {
        stars.forEach((star) => {
            star.style.color = star.getAttribute('data-value') <= rating ? '#f1c40f' : '#fff';
        });
    }
});
