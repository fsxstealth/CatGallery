// Add these functions to your existing script.js

async function submitRating(rating) {
    try {
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

async function fetchAverageRating() {
    try {
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
