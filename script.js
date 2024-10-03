// Existing functions for ratings
async function submitRating(rating) {
    try {
        const response = await fetch('http://localhost:3000/ratings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_id: 1,
                rating: rating,
            }),
        });

        const data = await response.json();
        console.log(data.message);
        fetchAverageRating();
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

// Call fetchAverageRating on page load
window.onload = function() {
    fetchAverageRating();
};

// Modal functionality
function openModal(catId) {
    const modal = document.getElementById('catModal');
    const description = document.getElementById('modal-description');
    
    // Set the modal description based on the catId (you can customize this)
    if (catId === 'cat1') {
        description.innerText = 'This is a cute cat 1!';
    } else if (catId === 'cat2') {
        description.innerText = 'This is a cute cat 2!';
    }
    modal.style.display = 'flex'; // Show modal
}

function closeModal() {
    document.getElementById('catModal').style.display = 'none'; // Hide modal
}

// Scroll functionality
function scrollLeft() {
    const container = document.querySelector('.gallery-container');
    container.scrollBy({ left: -300, behavior: 'smooth' });
}

function scrollRight() {
    const container = document.querySelector('.gallery-container');
    container.scrollBy({ left: 300, behavior: 'smooth' });
}
