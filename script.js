// Get all gallery images and videos
const galleryItems = document.querySelectorAll('.gallery-item img, .gallery-item video');

// Create lightbox container
const lightbox = document.createElement('div');
lightbox.classList.add('lightbox');
document.body.appendChild(lightbox);

// Create lightbox content container
const lightboxContent = document.createElement('div');
lightboxContent.classList.add('lightbox-content');
lightbox.appendChild(lightboxContent);

// Close button
const closeButton = document.createElement('button');
closeButton.textContent = 'Close';
closeButton.classList.add('close');
lightboxContent.appendChild(closeButton);

// Add event listener to close the lightbox
closeButton.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Open the clicked item in the lightbox
galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    const clone = item.cloneNode(true);
    lightboxContent.innerHTML = ''; // Clear previous content
    lightboxContent.appendChild(clone); // Add the clicked item
    lightbox.style.display = 'flex'; // Show the lightbox
  });
});
