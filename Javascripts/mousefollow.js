const blob = document.querySelector('.blob');

// Store last known mouse position
let lastX = 0;
let lastY = 0;

// Update blob position based on coordinates
function updateBlobPosition(x, y) {
    const blobWidth = blob.offsetWidth;
    const blobHeight = blob.offsetHeight;

    blob.style.left = `${x - blobWidth / 2}px`;
    blob.style.top = `${y - blobHeight / 2}px`;
}

// Mouse move event listener - updates position and stores last coordinates
document.addEventListener('mousemove', (e) => {
    lastX = e.clientX;
    lastY = e.clientY + window.scrollY;
    updateBlobPosition(lastX, lastY);
});

// Handle scroll - uses last known position
window.addEventListener('scroll', () => {
    updateBlobPosition(lastX, lastY);
});

// Handle window resize - uses last known position
window.addEventListener('resize', () => {
    updateBlobPosition(lastX, lastY);
});