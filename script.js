// Get elements for lightbox
const lightbox = document.querySelector('.lightbox');
const lightboxContent = document.querySelector('.lightbox-content');
const lightboxImage = document.querySelector('.lightbox-image');
const lightboxVideo = document.querySelector('.lightbox-video');
const closeBtn = document.querySelector('.lightbox-close');
const backBtn = document.querySelector('.back-to-gallery');

// Function to open lightbox with image
function openLightbox(imageSrc) {
  lightbox.style.display = 'block';
  lightboxImage.style.display = 'block';
  lightboxVideo.style.display = 'none';
  lightboxImage.src = imageSrc;
  lightboxImage.onload = () => lightboxContent.scrollTop = 0;
}

// Function to open lightbox with video
function openVideoLightbox(videoSrc) {
  lightbox.style.display = 'block';
  lightboxVideo.style.display = 'block';
  lightboxImage.style.display = 'none';
  const videoElement = document.createElement('video');
  videoElement.setAttribute('controls', 'true');
  videoElement.innerHTML = `<source src="${videoSrc}" type="video/mp4">Your browser does not support the video tag.`;
  lightboxVideo.appendChild(videoElement);
  videoElement.play();
}

// Function to close the lightbox
function closeLightbox() {
  lightbox.style.display = 'none';
  lightboxImage.style.display = 'none';
  lightboxVideo.style.display = 'none';
  lightboxVideo.innerHTML = ''; // Remove the video element to stop playback
}

// Function to navigate back to the gallery
function backToGallery() {
  lightbox.style.display = 'none';
  lightboxVideo.innerHTML = ''; // Remove the video element when returning
}

// Add event listeners to gallery images and videos
const galleryItems = document.querySelectorAll('.gallery-item img');
galleryItems.forEach(item => {
  item.addEventListener('click', () => openLightbox(item.src));
});

const galleryVideos = document.querySelectorAll('.gallery-item video');
galleryVideos.forEach(item => {
  item.addEventListener('click', () => openVideoLightbox(item.src));
});

// Close lightbox on clicking the close button
closeBtn.addEventListener('click', closeLightbox);

// Navigate back to the gallery
backBtn.addEventListener('click', backToGallery);
