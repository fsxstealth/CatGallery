// Submit the rating to the server
async function submitRating(rating) {
    try {
        // Replace 'http://localhost:3000/ratings' with your actual backend API URL if needed
        const response = await fetch('http://localhost:3000/ratings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_id: 1, // Replace with actual user ID if available
                rating: rating,
            }),
        });

        const data = await response.json();
        console.log(data.message); // Confirm rating submission
        fetchAverageRating(); // Fetch average rating after submission
    } catch (error) {
        console.error('Error submitting rating:', error);
    }
}

// Fetch the average rating from the server
async function fetchAverageRating() {
    try {
        // Replace 'http://localhost:3000/ratings/average' with your actual backend API URL if needed
        const response = await fetch('http://localhost:3000/ratings/average');
        const data = await response.json();
        const averageRating = data.averageRating ? data.averageRating.toFixed(1) : 'N/A';
        document.getElementById('average-rating').innerText = `Average Rating: ${averageRating}`;
    } catch (error) {
        console.error('Error fetching average rating:', error);
    }
}

// Call fetchAverageRating on page load to display the average rating
window.onload = function() {
    fetchAverageRating();
};

// Add event listeners to the star rating system
document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('click', function() {
        const rating = this.getAttribute('data-value');
        submitRating(rating); // Submit the selected rating
        displayThankYouMessage(); // Show thank you message after rating
    });
});

// Display a thank you message after rating
function displayThankYouMessage() {
    const thankYouMessage = document.getElementById('thank-you-message');
    thankYouMessage.style.display = 'block';
    setTimeout(() => {
        thankYouMessage.style.display = 'none';
    }, 3000); // Hide message after 3 seconds
}
